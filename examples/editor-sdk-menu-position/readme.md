# Grammarly Button Menu Position

This demo shows how to set the [menu position](https://developer.grammarly.com/docs/api/editor-sdk/grammarlybuttonelement#menuposition) of the Grammarly button in the [Grammarly Text Editor SDK](https://developer.grammarly.com/).

## How it works

[index.html](./public/index.html) and the other HTML files in this repository explicitly add the `<grammarly-button>` element to the page. The element includes the `menu-position` attribute, setting it to either `left` or `right`.

Unlike the other examples in this repo, we've centered the Grammarly button beneath the textarea. We chose this to demonstrate how you can set the menu position to the left or right of the button. Note that if there is not enough space for the menu to be displayed in the designated position, the menu will automatically be placed in a position where it will fit.

You can learn more about the `<grammarly-button>` element in the [Grammarly for Developers docs](https://developer.grammarly.com/docs/customization#custom-position).

## Get the code

A copy of this code is available in the [Grammarly for Developers GitHub repo](https://github.com/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-menu-position).

## Ask a question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, start a new discussion in the [Grammarly for Developers repo](https://github.com/grammarly/grammarly-for-developers/discussions) on GitHub.
