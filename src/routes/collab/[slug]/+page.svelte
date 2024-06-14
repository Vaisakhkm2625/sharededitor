<script>
	import '@fortawesome/fontawesome-free/css/all.min.css';

	export let data;

	import { Editor } from '@tiptap/core';
	import { StarterKit } from '@tiptap/starter-kit';
	import Collaboration from '@tiptap/extension-collaboration';
	import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
	import Highlight from '@tiptap/extension-highlight';
	import * as Y from 'yjs';
	import { HocuspocusProvider } from '@hocuspocus/provider';
	import { onMount } from 'svelte';

	import { getRandomName, getRandomColor } from '$lib/randomName';
	import { createButtons } from '$lib/buttons';

	import jsPDF from 'jspdf';
	import html2canvas from 'html2canvas';

	let ydoc = new Y.Doc();
	let element;
	let editor;
	let buttons;

	let m = { x: 0, y: 0 };
	let awarenessState = [];

	let provider = new HocuspocusProvider({
		url: 'ws://127.0.0.1:1234',
		name: data.docid, //document name
		document: ydoc,
		onAwarenessUpdate: ({ states }) => {
			console.log(states);
			awarenessState = states;
		}
	});

	let random_name = getRandomName();
	let random_color = getRandomColor();

	let mouseX = 0;
	let mouseY = 0;

	function updateAwareness() {
		provider.setAwarenessField('user', {
			name: random_name,
			color: random_color,
			mouseX: m.x,
			mouseY: m.y
		});
	}

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit.configure({
					history: false
				}),
				Collaboration.configure({
					document: ydoc
				}),
				CollaborationCursor.configure({
					provider,
					user: { name: random_name, color: random_color }
				}),
				Highlight.configure({
					HTMLAttributes: {
						class: 'text-highlighted'
					}
				})
			],
			content: `
                <p>
                    Hello, world!
                </p>
            `,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});
		buttons = createButtons(editor);
	});

	function getEditorContent() {
		return editor.getHTML();
	}

	async function convertToPDF() {
		const doc = new jsPDF();
		const content = editor.getHTML();

		// Create a temporary container for the HTML content
		const tempContainer = document.createElement('div');
		tempContainer.innerHTML = content;
		document.body.appendChild(tempContainer);

		// Use html2canvas to render the HTML content to a canvas
		const canvas = await html2canvas(tempContainer);

		// Add the canvas image to the PDF
		const imgData = canvas.toDataURL('image/png');
		doc.addImage(imgData, 'PNG', 10, 10, 190, (canvas.height * 190) / canvas.width);

		// Clean up the temporary container
		document.body.removeChild(tempContainer);

		// Save the generated PDF
		doc.save('document.pdf');
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<main class="container">
	<div
		on:mousemove={(e) => {
			m = { x: e.pageX, y: e.pageY };
			console.log(e);
			updateAwareness();
		}}
	>
		<div>
			<div class="input-container">
				<input
					type="text"
					class="custom-input"
					bind:value={random_name}
					on:change={updateAwareness}
				/>
				<input
					type="color"
					class="custom-input"
					bind:value={random_color}
					on:change={updateAwareness}
				/>
			</div>
		</div>

		{#if editor}
			<div class="overflow-auto">
				<div class="button-group">
					{#each [1, 2, 3, 4, 5] as g}
						<div role="group">
							{#each buttons.filter((button) => button.group === 'group' + g) as button}
								<button title={button.name} on:click={button.command} class="menu-buttons">
									<i class={button.icon}
										>{#if button.icon.includes('custom-icon')}<span>{button.name}</span>{/if}</i
									>
								</button>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<div bind:this={element} />

		{#each awarenessState as item}
			<!-- content here -->
			<!-- {JSON.stringify(item.user.mouseX)} <br /> -->
			{#if item.user.name != random_name}
				<div
					class="mousepointer"
					style="--left: {item.user.mouseX}px;--top: {item.user.mouseY}px;--cursor-color: {item.user
						.color};"
				/>
			{/if}
		{/each}
		<!-- {JSON.stringify(awarenessState)} -->
	</div>

	{#if editor}
		<div>
			<div id="editor"></div>
			<button on:click={convertToPDF}>Download as PDF</button>
		</div>
	{/if}
</main>

<style>
	:global(.ProseMirror) {
		border: 1px solid #ddd;
		border-radius: 5px;
	}
	.mousepointer {
		position: absolute;
		background: var(--cursor-color);
		width: 20px;
		height: 20px;
		border-radius: 0% 50% 50% 50%;
		left: var(--left);
		top: var(--top);
	}

	.custom-input {
		width: auto;
		min-width: 50px;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		font-size: 1rem;
	}

	.input-container {
		display: flex;
		justify-content: right;
		align-items: center;
	}

	.menu-buttons {
		--pico-form-element-spacing-vertical: 0.75rem;
		--pico-form-element-spacing-horizontal: 1rem;
	}

	.button-group {
		display: flex;
		gap: 1rem;
	}

	.custom-icon {
		display: inline-block;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 5px;
		/*font-family: Arial, sans-serif;*/
		font-family: Roboto, sans-serif;
		font-style: normal;

		font-weight: bold;
		color: #fff;
		margin-right: 5px;
	}
</style>
