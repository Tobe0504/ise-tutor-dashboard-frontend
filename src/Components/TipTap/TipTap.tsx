import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { SetStateAction, Dispatch } from 'react'
import Button from '../Button/Button'
import classes from './Tiptap.module.css'

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className={classes.container}>
      <div className={classes.buttonGroup}>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          type={editor.isActive('bold') ? 'secondary' : 'primary'}
        >
          Bold
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          type={editor.isActive('italic') ? 'secondary' : 'primary'}
        >
          Italic
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          type={editor.isActive('strike') ? 'secondary' : 'primary'}
        >
          Strike
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          type={editor.isActive('code') ? 'secondary' : 'primary'}
        >
          Code
        </Button>
        <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          Clear marks
        </Button>
        <Button onClick={() => editor.chain().focus().clearNodes().run()}>
          Clear nodes
        </Button>
        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          type={editor.isActive('paragraph') ? 'secondary' : 'primary'}
        >
          Paragraph
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          type={
            editor.isActive('heading', { level: 1 }) ? 'secondary' : 'primary'
          }
        >
          H1
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          type={
            editor.isActive('heading', { level: 2 }) ? 'secondary' : 'primary'
          }
        >
          H2
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          type={
            editor.isActive('heading', { level: 3 }) ? 'secondary' : 'primary'
          }
        >
          H3
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          type={
            editor.isActive('heading', { level: 4 }) ? 'secondary' : 'primary'
          }
        >
          H4
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          type={
            editor.isActive('heading', { level: 5 }) ? 'secondary' : 'primary'
          }
        >
          H5
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          type={
            editor.isActive('heading', { level: 6 }) ? 'secondary' : 'primary'
          }
        >
          H6
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          type={editor.isActive('bulletList') ? 'secondary' : 'primary'}
        >
          Bullet list
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          type={editor.isActive('orderedList') ? 'secondary' : 'primary'}
        >
          Ordered list
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          type={editor.isActive('codeBlock') ? 'secondary' : 'primary'}
        >
          Code block
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          type={editor.isActive('blockquote') ? 'secondary' : 'primary'}
        >
          Blockquote
        </Button>
        <Button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Horizontal rule
        </Button>
        <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </Button>
        <Button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </Button>
        <Button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          Redo
        </Button>
      </div>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  // TextStyle.configure({ types: [ListItem.name] }),
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
]

type TipTapProps = {
  state: string
  setState: Dispatch<SetStateAction<string>>
}

const TipTap = ({ state, setState }: TipTapProps) => {
  const handleEditorUpdate = ({ editor }: any) => {
    setState(editor.getHTML())
  }

  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={state}
      onUpdate={handleEditorUpdate}
      editorProps={{
        attributes: {
          class: classes.editor,
        },
      }}
    ></EditorProvider>
  )
}

export default TipTap
