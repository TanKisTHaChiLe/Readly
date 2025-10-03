import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";

import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListOl,
  FaListUl,
  FaRedo,
  FaUndo,
} from "react-icons/fa";
import styles from "./textEditor.module.css";

const MenuBar = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;

  return (
    <div className={styles.toolbar}>
      <button
        onClick={() => {editor.chain().focus().toggleBold().run();console.log(editor)}}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`${styles.button} ${editor.isActive("bold") ? styles.active : ""}`}
      >
        <FaBold />
      </button>
      <button
        onClick={() => {editor.chain().toggleItalic().run(); console.log(editor)}}
          disabled={!editor.can().chain().toggleItalic().run()}
        className={`${styles.button} ${editor.isActive("italic") ? styles.active : ""}`}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={`${styles.button} ${editor.isActive("underline") ? styles.active : ""}`}
      >
        <FaUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${styles.button} ${editor.isActive("bulletList") ? styles.active : ""}`}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${styles.button} ${editor.isActive("orderedList") ? styles.active : ""}`}
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className={`${styles.button} ${editor.isActive("undo") ? styles.active : ""}`}
      >
        <FaUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className={`${styles.button} ${editor.isActive("redo") ? styles.active : ""}`}
      >
        <FaRedo />
      </button>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  Underline,

  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, 
    },
  }),
];

const TextEditor = ({ setDesc }) => {
  return (
    <div className="text-editor" style={{ border: "1px solid #ccc", borderRadius: "4px" }}>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content=""
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          setDesc(json);
        }}
        editorProps={{
          attributes: {
            class: "prose prose-sm mx-auto focus:outline-none",
            style: "min-height: 200px; padding: 16px;",
          },
        }}
      />
    </div>
  );
};

export default TextEditor;
