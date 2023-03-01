# Grammarly Text Editor SDK & Angular Example

This demo shows how to add the [Grammarly Text Editor SDK](https://developer.grammarly.com/) to a `<textarea>`, `<input>`, and elements with attribute `contenteditable="true"` in an Angular app.

## Try the demo

You can try the demo in [CodeSandbox](https://codesandbox.io/s/github/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-angular).

## How it works

[Editors.js](./src/Editors.js) contains a `<textarea>`, `<input>`, and `<div>` that is `contenteditable`, with each element wrapped with the `<GrammarlyEditorPlugin>` component. For rendering, [index.js](./src/index.js) specifies the Editors in [app.component.ts](./src/app/app.component.ts.js) that have text defined in [demo.ts](./src/demo.ts).

Learn additional ways to add Grammarly suggestions to Angular apps in the [Grammarly for Developers documentation](https://developer.grammarly.com/docs/editor-sdk).

## Get the code

A copy of this code is available in the [Grammarly for Developers GitHub repo](https://github.com/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-angular).

## Ask a question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, join us in the [Grammarly for Developers Discussions](https://github.com/grammarly/grammarly-for-developers/discussions).
