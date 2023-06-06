# Grammarly Text Editor SDK & Editor.js Example

This demo shows how to add the [Grammarly Text Editor SDK](https://developer.grammarly.com/) to a [Editor.js](https://editorjs.io/) rich text editor. The example uses [addPlugin()](https://developer.grammarly.com/docs/api/editor-sdk/editorsdk#addplugin) to add Grammarly suggestions in an imperative way.

## Try the demo online

You can try the demo in [CodeSandbox](https://codesandbox.io/s/github/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-editorjs?file=/public/index.html).

## Try the demo locally
You can try the demo locally using Vite. Navigate to the `editor-sdk-editorjs` directory and follow the steps below.

### 1. Install the project's dependencies.

With npm:\
`npm install`

With pnpm:\
`pnpm install`

With yarn:\
`yarn install` 

### 2. Run the project.

With npm:\
`npm run vite`

With pnpm:\
`pnpm vite`

With yarn:\
`yarn vite`

### 3. Navigate the project.

Once the project is running, you will see a message from Vite indicating where the project is running. By default, the project runs on localhost:5173. 

## How it works

[index.html](./public/index.html) contains a `<div>`. JavaScript code toward the bottom of the file initializes the Editor.js text editor on that `<div>` and also adds Grammarly suggestions to that `<div>`. Check out [index.html](./public/index.html) for the full code example.

Learn more about how to add Grammarly suggestions to rich text editors by visiting the [Grammarly for Developers documentation](https://developer.grammarly.com/docs/#supported-text-editors).

## Get the code

A copy of this code is available in the [Grammarly for Developers GitHub repo](https://github.com/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-editorjs).

## Ask a question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, join us in the [Grammarly for Developers Discussions](https://github.com/grammarly/grammarly-for-developers/discussions).
