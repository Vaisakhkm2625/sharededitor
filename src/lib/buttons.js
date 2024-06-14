
export const createButtons = (editor) => [
    {
        name: 'bold',
        icon: 'fa-solid fa-bold',
        group: 'group1',
        command: () => editor.chain().focus().toggleBold().run(),
        disabled: () => !editor.can().chain().focus().toggleBold().run(),
        isActive: () => editor.isActive('bold')
    },
    {
        name: 'italic',
        icon: 'fa-solid fa-italic',
        group: 'group1',
        command: () => editor.chain().focus().toggleItalic().run(),
        disabled: () => !editor.can().chain().focus().toggleItalic().run(),
        isActive: () => editor.isActive('italic')
    },
    {
        name: 'strike',
        icon: 'fa-solid fa-strikethrough',
        group: 'group1',
        command: () => editor.chain().focus().toggleStrike().run(),
        disabled: () => !editor.can().chain().focus().toggleStrike().run(),
        isActive: () => editor.isActive('strike')
    },
    {
        name: 'code',
        icon: 'fa-solid fa-code',
        group: 'group1',
        command: () => editor.chain().focus().toggleCode().run(),
        disabled: () => !editor.can().chain().focus().toggleCode().run(),
        isActive: () => editor.isActive('code')
    },
    {
        name: 'clear marks',
        icon: 'fa-solid fa-eraser',
        group: 'group1',
        command: () => editor.chain().focus().unsetAllMarks().run()
    },
    {
        name: 'clear nodes',
        icon: 'fa-solid fa-ban',
        command: () => editor.chain().focus().clearNodes().run()
    },
    {
        name: 'paragraph',
        group: 'group2',
        icon: 'fa-solid fa-paragraph',
        command: () => editor.chain().focus().setParagraph().run(),
        isActive: () => editor.isActive('paragraph')
    },
    {
        name: 'H1',
        group: 'group2',
        icon: 'custom-icon',
        command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => editor.isActive('heading', { level: 1 })
    },
    {
        name: 'H2',
        group: 'group2',
        icon: 'custom-icon',
        command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => editor.isActive('heading', { level: 2 })
    },
    {
        name: 'H3',
        group: 'group2',
        icon: 'custom-icon',
        command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        isActive: () => editor.isActive('heading', { level: 3 })
    },
    {
        name: 'H4',
        icon: 'custom-icon',
        group: 'group2',
        command: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
        isActive: () => editor.isActive('heading', { level: 4 })
    },
    {
        name: 'H5',
        icon: 'custom-icon',
        group: 'group2',
        command: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
        isActive: () => editor.isActive('heading', { level: 5 })
    },
    {
        name: 'H6',
        icon: 'custom-icon',
        group: 'group2',
        command: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
        isActive: () => editor.isActive('heading', { level: 6 })
    },
    {
        name: 'bullet list',
        group: 'group3',
        icon: 'fa-solid fa-list-ul',
        command: () => editor.chain().focus().toggleBulletList().run(),
        isActive: () => editor.isActive('bulletList')
    },
    {
        name: 'ordered list',
        icon: 'fa-solid fa-list-ol',
        group: 'group3',
        command: () => editor.chain().focus().toggleOrderedList().run(),
        isActive: () => editor.isActive('orderedList')
    },
    {
        name: 'code block',
        icon: 'fa-solid fa-code',
        group: 'group4',
        command: () => editor.chain().focus().toggleCodeBlock().run(),
        isActive: () => editor.isActive('codeBlock')
    },
    {
        name: 'blockquote',
        icon: 'fa-solid fa-quote-right',
        group: 'group4',
        command: () => editor.chain().focus().toggleBlockquote().run(),
        isActive: () => editor.isActive('blockquote')
    },
    {
        name: 'horizontal rule',
        icon: 'fa-solid fa-minus',
        group: 'group4',
        command: () => editor.chain().focus().setHorizontalRule().run()
    },
    {
        name: 'hard break',
        icon: 'fa-solid fa-arrow-down',
        group: 'group4',
        command: () => editor.chain().focus().setHardBreak().run()
    },
    {
        name: 'undo',
        icon: 'fa-solid fa-undo',
        group: 'group5',
        command: () => editor.chain().focus().undo().run(),
        disabled: () => !editor.can().chain().focus().undo().run()
    },
    {
        name: 'redo',
        icon: 'fa-solid fa-redo',
        group: 'group5',
        command: () => editor.chain().focus().redo().run(),
        disabled: () => !editor.can().chain().focus().redo().run()
    },
    {
        name: 'set color',
        icon: 'fa-solid fa-palette',
        group: 'group4',
        command: () => editor.chain().focus().setColor('#958DF1').run(),
        isActive: () => editor.isActive('textStyle', { color: '#958DF1' })
    },
    {
        name: 'purple',
        icon: 'fa-solid fa-palette',
        group: 'group4',
        command: () => editor.commands.setHighlight(),
        isActive: () => editor.isActive('textStyle', { color: '#958DF1' })
    }
];
