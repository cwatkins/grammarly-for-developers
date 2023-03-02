# Grammarly Text Editor SDK & Angular Example

This demo shows how to add the [Grammarly Text Editor SDK](https://developer.grammarly.com/) to a `<textarea>`, `<input>`, and elements with attribute `contenteditable="true"` in an Angular app.

## Try the demo

You can try the demo in [CodeSandbox](https://codesandbox.io/s/github/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-angular).

## How it works

[app.component.ts](./src/app/app.component.ts) finds the `<textarea>`, `<input>`, and `<div>` (that is `contenteditable`) that are in [app.component.html](./src/app/app.component.html) and then, for each element, invokes [addPlugin()](https://developer.grammarly.com/docs/api/editor-sdk/editorsdk#addplugin) to add Grammarly's writing suggestions in an imperative way.

The example text is defined in [demo.ts](./src/demo.ts).

Learn additional ways to add Grammarly suggestions to Angular apps in the [Grammarly for Developers documentation](https://developer.grammarly.com/docs/api/editor-sdk).

## Get the code

A copy of this code is available in the [Grammarly for Developers GitHub repo](https://github.com/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-angular).

## Ask a question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, join us on the [Grammarly for Developers discussion board](https://github.com/grammarly/grammarly-for-developers/discussions).
