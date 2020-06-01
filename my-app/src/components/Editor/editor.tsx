import React from "react";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";

let showText = "";
const Editor: React.FC = () => {
  showText = "Showing example text";

  const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (error) {
          return new Error(error);
        }
      }
      return "";
    },
  });

  async function renderHTML(inputText: string) {
    return await mdParser.render(inputText);
  }

  return (
    <div>
      <section>
        <MdEditor
          name="MdTextEditor"
          value={showText}
          renderHTML={renderHTML}
          config={{
            view: {
              menu: true,
              md: true,
              html: true,
            },
          }}
        />
      </section>
    </div>
  );
};

export default Editor;
