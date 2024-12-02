import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

interface CodeEditorProps {
  value: string; // The current value of the code field
  onChange: (event: { target: { name: string; value: string } }) => void; // Change handler
  name: string; // Name of the field in the form
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, name }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const monacoEditorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      monacoEditorRef.current = monaco.editor.create(editorRef.current, {
        value: value || "",
        language: "javascript", // Change dynamically if needed
        theme: "vs-dark",
        automaticLayout: true,
      });

      monacoEditorRef.current.onDidChangeModelContent(() => {
        const newValue = monacoEditorRef.current?.getValue() || "";
        onChange({ target: { name, value: newValue } });
      });
    }

    return () => {
      monacoEditorRef.current?.dispose();
    };
  }, [value, onChange, name]);

  return <div style={{ height: "300px", width: "100%" }} ref={editorRef} />;
};

export default CodeEditor;