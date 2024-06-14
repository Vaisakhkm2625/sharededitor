<script>
	import { onMount } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import jsPDF from 'jspdf';

	let editor;

	onMount(() => {
		editor = new Editor({
			element: document.querySelector('#editor'),
			extensions: [StarterKit],
			content: '<p>Hello, this is a Tiptap editor content!</p>'
		});
	});

	function getEditorContent() {
		return editor.getHTML();
	}

	function convertToPDF() {
		const doc = new jsPDF();
		doc.fromHTML(getEditorContent(), 15, 15, {
			width: 170
		});
		doc.save('document.pdf');
	}
</script>

<div>
	<div id="editor"></div>
	<button on:click={convertToPDF}>Download as PDF</button>
</div>

<style>
	#editor {
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 5px;
	}
	button {
		margin-top: 10px;
	}
</style>
