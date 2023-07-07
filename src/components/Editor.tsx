"use client"

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { lowlight } from "lowlight"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import js from "highlight.js/lib/languages/javascript"
import "highlight.js/styles/tokyo-night-dark.css"

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
} from "react-icons/rx"

import { initialContent } from "./initialContent"
import { BubbleButton } from "./BubbleButton"

lowlight.registerLanguage("js", js)

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  })

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 spelche prose prose-violet prose-invert"
        editor={editor}
        spellCheck={false}
      />
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            <RxFontBold className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            <RxFontItalic className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            <RxStrikethrough className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            <RxCode className="w-4 h-4" />
          </BubbleButton>
        </BubbleMenu>
      )}
    </>
  )
}
