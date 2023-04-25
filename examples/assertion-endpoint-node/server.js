const fs = require("fs");
const http = require("http");
const jose = require("jose");
const url = require("url");

const privateKeyData = JSON.parse(fs.readFileSync("./private.jwk"));
const kid = privateKeyData.kid;
const alg = privateKeyData.alg;
jose.importJWK(privateKeyData).then((privateKey) => {
  const server = http.createServer(async function (req, res) {
    console.log(
      `responding to ${req.method}:${req.url} from ${
        req.headers.origin ?? "<NULL>"
      }`
    );
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "X-Client-Type, X-Client-Version",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": req.headers.origin ?? "*",
    };

    const clientId = url.parse(req.url, true).query.clientId;
    if (!clientId) {
      res.writeHead(400, headers);
      res.end(JSON.stringify({ error: "Missing clientId query parameter." }));
      return;
    }
    if (req.method === "OPTIONS") {
      res.writeHead(200, headers);
      res.end();
      return;
    }

    // Generate the JWT assertion based on the request
    // This is the code you will need to add to your server after you have verified that the request
    // is from a valid user.
    const now = Math.floor(new Date().getTime() / 1000);  // Epoch time in seconds
    const issuedAt = now - 5;                 // Backdate by 5 seconds to account for any clock skew
    const expirationTime = issuedAt + 5 * 60; // Assertion will be valid for about 5 minutes
    const assertion = await new jose.SignJWT({})
      .setProtectedHeader({ ver: "v1", alg, kid })
      .setSubject(clientId)
      .setIssuedAt(issuedAt)
      .setIssuer(clientId)
      .setAudience("https://tokens.grammarly.com/oauth2/token")
      .setExpirationTime(expirationTime)
      .sign(privateKey);

    res.writeHead(200, headers);
    res.end(JSON.stringify({ assertion }));
  });

  const port = process.env.PORT || 8080;
  console.log(`Starting server at http://127.0.0.1:${port}`);
  server.listen(port, '127.0.0.1'); // limit this server to only work from localhost
});
