import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId, demoText } from "./demo";
import "./style.css";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: demoText,
  });
  return (
    // Configure the Grammarly Editor SDK
    // You could also include the config in <GrammarlyEditorPlugin>
    <Grammarly
      clientId={demoClientId}
      config={{
        documentDialect: "british",
        autocomplete: "on",
      }}
    >
      {/* Wrap the rich text editor with <GrammarlyEditorPlugin> to add Grammarly suggestions  */}
      <GrammarlyEditorPlugin>
        <h2>TipTap Text Editor</h2>
        {/* Create a new Tiptap text editor */}
        <EditorContent editor={editor} />
      </GrammarlyEditorPlugin>
    </Grammarly>
  );
};
