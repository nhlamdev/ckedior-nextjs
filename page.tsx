"use client";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<string>("");
  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <form id="content-form">
        <div id="container">
          <textarea id="editor" name="editor"></textarea>
        </div>
        <button
          type="button"
          onClick={() => {
            const data = (window as any).editor.getData();

            setContent(data);
          }}
        >
          click me
        </button>
      </form>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>

      <Script defer src="/script/ckeditor-create.js" />
    </main>
  );
}
