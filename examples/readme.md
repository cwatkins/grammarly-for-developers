# Grammarly for Developers Code Examples

This directory contains numerous code examples you can use as you learn about the Grammarly Text Editor SDK. Most of the examples contain links to CodeSandbox—an open-source online code editor—so you can tinker with the code in your browser and better understand our features and functionality.

We've organized the examples in two ways: [by Text Editor SDK feature](#code-examples-by-sdk-feature) and [by the technology used](#code-examples-by-the-technology-used).

## Code examples by SDK feature

The following is a list of code examples organized by the SDK feature the app demonstrates.

### Basic Configuration Apps

These apps show the basics of how to add the Grammarly Text Editor Plugin to text editors.

- [Basic SDK Example (JavaScript)](./editor-sdk)
- [Basic SDK Example (React)](./editor-sdk-react/)
- [Basic SDK Example (Vue)](./editor-sdk-vue/)
- [Basic SDK Example (Angular)](./editor-sdk-angular/)

### Starter Apps

These are starter apps you can use as you work through the quick start guide. These starter apps do not yet have the Text Editor Plugin added to the text editors.

- [HTML Starter App](./demo-html/)
- [JavaScript Starter App](./demo-javascript/)
- [React Starter App](./demo-react)
- [Vue Starter App](./demo-vue)
- [Angular Starter App](./demo-angular/)

**Note:** The quick start guide is shown when you [create a Grammarly for Developers app](https://developer.grammarly.com/apps).

### Activation

This app shows how you can set the Text Editor Plugin's [activation property](https://developer.grammarly.com/docs/api/editor-sdk/editorconfig#activation) to `focus` or `immediate`.

- [Activation Example App](./editor-sdk-activation/)

### Autocomplete

[This app](./editor-sdk-autocomplete/) shows how you can turn on [autocomplete](https://developer.grammarly.com/docs/autocomplete) for your app.

![Autocomplete](https://user-images.githubusercontent.com/5179225/214080804-9a495399-b9fc-4606-8057-84cf7c9ed93f.gif)

**Note:** The Autocomplete feature is only available on the [Plus plan](https://developer.grammarly.com/plans).

### Document dialect

This app shows how you can configure the [document dialect](https://developer.grammarly.com/docs/customization#english-dialect) for your app.

- [Document Dialect Example App](./editor-sdk-document-dialect/)

### Document domain

This app shows how you can configure the [document domain](https://developer.grammarly.com/docs/api/editor-sdk/domain) for your app.

- [Document Domain Example App](./editor-sdk-document-domain/)

### Electron

These apps show how to [add the Text Editor Plugin to Electron apps](https://developer.grammarly.com/docs/editor-sdk-electron).

- [Bundled JavaScript (npm) & Electron Example App](./electron-javascript-npm)
- [JavaScript & Electron Example App](./electron)
- [React & Electron Example App](./electron-react/)
- [Vue & Electron Example App](./electron-vue)

### Events

These apps show how your app can respond to events (e.g., [`SessionStats`](https://developer.grammarly.com/docs/api/editor-sdk/sessionstats#sessionstats), [`DocumentStats`](https://developer.grammarly.com/docs/api/editor-sdk/documentstats#documentstats)) in the Text Editor SDK.

- [Event Listener Example App (JavaScript)](./editor-sdk-events/)
- [Stats Example App (React)](./editor-sdk-react-stats/)

### Grammarly button menu position

This app shows how you can configure the [menu position](https://developer.grammarly.com/docs/api/editor-sdk/grammarlybuttonelement#menuposition) of the Grammarly button.

- [Grammarly Button Menu Position Example App](./editor-sdk-menu-position/)

### Introductory text

This app shows how you can configure the [introductory text](https://developer.grammarly.com/docs/customization#introductory-text) that is displayed for new users in suggestion cards.

- [Intro Text Example App](./editor-sdk-intro-text/)

### Rich text editors

These apps show how you can add the Text Editor Plugin to various rich text editors.

- **CKEditor:**
  - [JavaScript Example App](./editor-sdk-ckeditor/)
  - [JavaScript Example App (Imperative)](./editor-sdk-ckeditor-imperative/)
  - [React Example App](./editor-sdk-react-ckeditor/)
  - [Vue Example App](./editor-sdk-vue-ckeditor/)
- **Quill:**
  - [JavaScript Example App](./editor-sdk-quill/)
  - [JavaScript Example App (Imperative)](./editor-sdk-quill-imperative/)
- **Slate:**
  - [React JavaScript Example App](./editor-sdk-react-slate/)
- **TinyMCE:**
  - [JavaScript Example App](./editor-sdk-tinymce/)
  - [JavaScript Example App (Imperative)](./editor-sdk-tinymce-imperative/)
  - [React Example App](./editor-sdk-react-tinymce/)
  - [Vue Example App](./editor-sdk-vue-tinymce/)

### Suggestion categories

This app shows how to configure suggestion categories for your app.

- [Suggestion Categories Example App](./editor-sdk-suggestions-config/)

**Note:** The ability to configure suggestion categories is only available on the [Plus plan](https://developer.grammarly.com/plans).

### Tone detector

This app shows how to turn on the [tone detector](https://developer.grammarly.com/docs/tone) for your app.

- [Tone Detector Example App](./editor-sdk-tone)

**Note:** The tone detector feature is only available on the [Plus plan](https://developer.grammarly.com/plans).

### Trusted Authentication

These examples show how you can configure [trusted authentication](https://developer.grammarly.com/docs/trusted-authentication).

- [Assertion Server (Java)](./assertion-endpoint-java/)
- [Assertion Server (Node)](./assertion-endpoint-node/)
- [Trusted Authentication Example App](./trusted-auth/)

### Turn off UI elements

These apps show three ways to turn off UI elements in the Text Editor Plugin.

- [Turn Off UI Elements Example App (JavaScript)](./editor-sdk-turn-off-ui-elements/)
- [Turn Off UI Elements Example App (React)](./editor-sdk-react-turn-off-ui-elements/)

## Code examples by the technology used

The following is a list of code examples organized by the technology the app uses (e.g., programming language or framework).

### Vanilla JavaScript

- [Activation Example App](./editor-sdk-activation/)
- [Autocomplete Example App](./editor-sdk-autocomplete/)
- [Basic SDK Example](./editor-sdk)
- [CKEditor Example App](./editor-sdk-ckeditor/)
- [CKEditor Example App (Imperative)](./editor-sdk-ckeditor-imperative/)
- [Document Dialect Example App](./editor-sdk-document-dialect/)
- [Document Domain Example App](./editor-sdk-document-domain/)
- [Electron Example App](./electron/)
- [Event Listener Example App](./editor-sdk-events/)
- [Grammarly Button Menu Position Example App](./editor-sdk-menu-position/)
- [Intro Text Example App](./editor-sdk-intro-text/)
- [Quill Example App](./editor-sdk-quill/)
- [Quill Example App (Imperative)](./editor-sdk-quill-imperative/)
- [Starter HTML App](./demo-html/)
- [Starter JavaScript App](./demo-javascript/)
- [Suggestion Categories Example App](./editor-sdk-suggestions-config/)
- [TinyMCE Example App](./editor-sdk-tinymce/)
- [TinyMCE Example App (Imperative)](./editor-sdk-tinymce-imperative/)
- [Tone Detector Example App](./editor-sdk-tone/)
- [Trusted Authentication Example App](./trusted-auth/)
- [Turn Off UI Elements Example App](./editor-sdk-turn-off-ui-elements/)

### React

- [Basic SDK Example](./editor-sdk-react/)
- [CKEditor Example App](./editor-sdk-react-ckeditor/)
- [Document and Session Stats Example App](./editor-sdk-react-stats/)
- [Electron Example App](./electron-react)
- [Slate Example App](./editor-sdk-react-slate/)
- [Starter React App](./demo-react)
- [TinyMCE Example App](./editor-sdk-react-tinymce/)
- [Turn Off UI Elements Example App](./editor-sdk-react-turn-off-ui-elements/)

### Vue

- [Basic SDK Example](./editor-sdk-vue)
- [CKEditor Example App](./editor-sdk-vue-ckeditor/)
- [Electron Example App](./electron-vue)
- [Starter Vue App](./demo-vue/)
- [TinyMCE Example App](./editor-sdk-vue-tinymce/)

### Angular

- [Basic SDK Example](./editor-sdk-angular/)
- [Starter Angular App](./demo-angular/)

### Electron

- [Bundled JavaScript (npm) & Electron Example App](./electron-javascript-npm)
- [JavaScript & Electron Example App](./electron)
- [React & Electron Example App](./electron-react/)
- [Vue & Electron Example App](./electron-vue)

### Java

- [Assertion Server for Trusted Authentication](./assertion-endpoint-java/)

### Node

- [Assertion Server for Trusted Authentication](./assertion-endpoint-node/)
