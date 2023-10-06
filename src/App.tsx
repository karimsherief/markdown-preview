import { marked } from "marked";
import { useEffect, useState } from "react";

export default function App() {
  const [markdown, setMarkdown] = useState("");
  const [active, setActive] = useState("markdown");
  const [preview, setPrivew] = useState("");

  useEffect(() => {
    if (active === "preview") {
      setPrivew(marked.parse(markdown));
    }
  }, [active]);

  return (
    <>
      <h1>Markdown preview</h1>
      <div className="container">
        <div className="btns">
          <button
            className={active === "markdown" ? "active" : ""}
            onClick={() => setActive("markdown")}
          >
            Markdown
          </button>
          <button
            className={active === "preview" ? "active" : ""}
            onClick={() => setActive("preview")}
          >
            Preview
          </button>
        </div>
        <div>
          {active === "markdown" ? (
            <textarea
              name="markdown"
              id="markdown"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          ) : (
            <textarea name="preview" id="preview" value={preview} />
          )}
        </div>
      </div>
    </>
  );
}
