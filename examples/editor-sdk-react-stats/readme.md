# Grammarly Text Editor SDK for React: Session and Document Stats

This demo shows how to listen for and handle the `session-stats` and `document-stats` events using the Grammarly Text Editor Plugin for React's built-in [callback functions](https://developer.grammarly.com/docs/api/editor-sdk/grammarlyeditorplugincallbacks).
- [session-stats](https://developer.grammarly.com/docs/events#session-stats) is an event emitted by the plugin that returns a [SessionStats](https://developer.grammarly.com/docs/api/editor-sdk/sessionstats) object.
- [document-stats](https://developer.grammarly.com/docs/events#document-stats) is an event emitted by the plugin that returns a [DocumentStats](https://developer.grammarly.com/docs/api/editor-sdk/documentstats) object.

**Note**: The `session-stats` and `document-stats` events are only emitted for applications on the [Plus plan](https://developer.grammarly.com/plans). Check out the [Custom Events](https://developer.grammarly.com/docs/events#custom-events) documentation page for a full list of events.


## How it works

The `<GrammarlyEditorPlugin>` React component contains callback props for events that are emitted by the Text Editor Plugin. As an example, the [onSessionStats](https://developer.grammarly.com/docs/api/editor-sdk/grammarlyeditorplugincallbacks#onsessionstats) and [onDocumentStats](https://developer.grammarly.com/docs/api/editor-sdk/grammarlyeditorplugincallbacks#ondocumentstats) callbacks listen for and handle the `session-stats` and `document-stats` events. 

```
<GrammarlyEditorPlugin
  onDocumentStats={(evt) => handleDocStats(evt.detail)}
  onSessionStats={(evt) => handleSessionStats(evt.detail)}
>
```

In the provided example on this page, the `onSessionStats` callback executes and returns a `SessionStats` object when new session information is available, whereas the `onDocumentStats` callback executes and returns a `DocumentStats` object when text is written in the plugin. Both callback props use anonymous functions to receive the event data (`evt`) as a parameter and then pass the event data (the read-only `detail` property) into the `handleDocStats()` and `handleSessionStats()` functions.  

## Get the code

A copy of this code is available in the [Grammarly for Developers GitHub repo](https://github.com/grammarly/grammarly-for-developers/tree/main/examples/editor-sdk-react-stats).

## Ask a question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, join us in the [Grammarly for Developers Discussions](https://github.com/grammarly/grammarly-for-developers/discussions).
