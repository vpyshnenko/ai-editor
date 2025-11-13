export const content = `import {basicSetup, EditorView} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"
import { oneDark } from '@codemirror/theme-one-dark';

import { content } from './content.js'


new EditorView({
  doc: "content",
  extensions: [
    basicSetup,
    javascript(),
    oneDark // ✅ activates dark theme
  ],
  parent: document.querySelector('#editor')
})
`
