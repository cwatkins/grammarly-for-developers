# Grammarly Text Editor SDK with Activation Set to Immediate

This demo shows the different options for the [Grammarly Text Editor SDK](https://developer.grammarly.com/) [activation property](https://developer.grammarly.com/docs/v2.x/api/editor-sdk/editorconfig#activation).

## Try the Demo

You can try the demo in [CodeSandbox](https://codesandbox.io/s/github/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-activation?file=/public/index.html).

## How it Works

This example contains two files that are identical except for the value of the `activation` property:
- [index.html](./public/index.html) sets `activation` to `immediate`
- [activationFocus.html](./public/activationFocus.html) sets 'activation' to `focus`

Both pages contain a textarea and listen for [document-stats]() and [session-stats]() events. When the events are fired, the pages update the "Word count" and "Suggestions accepted" lines on the page.

Note that when `activation` is set to `immediate`, the plugin automatically checks the words in the textarea, displays an underline to show a word is misspelled, and fires the events that ultimately lead to the page being updated. When activation is set to `focus`, those actions do not occur until the user focuses on the textarea.

## Get the Code

A copy of this code is available in the [Grammarly for Developers GitHub repo](https://github.com/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-activation).

## Ask a Question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, join us in the [Grammarly for Developers community on GitHub](https://github.com/grammarly/grammarly-for-developers/discussions).
