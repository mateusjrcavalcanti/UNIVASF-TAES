import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const Theme = EditorView.theme({
  "&": {
    fontSize: "110%",
    fontFamily: "'Roboto Mono',Consolas,monospace",
  },
  ".cm-content": {
    fontFamily: "Menlo, Monaco, Lucida Console, monospace",
  },
  ".cm-gutters": {
    minHeight: "200px",
  },
  ".cm-scroller": {
    overflow: "auto",
    maxHeight: "600px",
  },
});

export function Code({
  language,
  value,
  editable = true,
}: {
  language: string;
  value: string;
  editable?: boolean;
}) {
  const extensions = [Theme];
  if (language === "shell") extensions.push(StreamLanguage.define(shell));
  if (language === "javascript") extensions.push(javascript({ jsx: true }));
  return (
    <CodeMirror
      value={value}
      theme={dracula}
      extensions={extensions}
      editable={editable}
    />
  );
}
