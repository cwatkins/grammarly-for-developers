# Grammarly Text Editor SDK & Vue Example

This demo shows how to add the [Grammarly Text Editor SDK](https://developer.grammarly.com/) to a `<textarea>`, `<input>`, and elements with attribute `contenteditable="true"` in a Vue app. 

## Try the demo

You can try the demo in [CodeSandbox](https://codesandbox.io/s/github/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-vue).

## How it works

[Editors.vue](./src/components/Editors.vue) contains a `<textarea>`, `<input>`, and `<div>` that is `contenteditable`, with each element wrapped with the `<GrammarlyEditorPlugin>` component. For rendering, [App.vue](./src/App.vue) specifies the Editors in [Editors.vue](./src/components/Editors.vue) that have text defined in [demo.js](./src/components/demo.js).

Learn additional ways to add Grammarly suggestions to Vue apps in the [Grammarly for Developers documentation](https://developer.grammarly.com/docs/editor-sdk-vue).

## Get the code

A copy of this code is available in the [Grammarly for Developers GitHub repo](https://github.com/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-vue). 

## Ask a question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, join us in the [Grammarly for Developers Discussions](https://github.com/grammarly/grammarly-for-developers/discussions).
