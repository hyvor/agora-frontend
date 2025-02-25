<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Header from './@components/header/Header.svelte';
	import LeftNavGroup from './@components/leftnav/LeftNavGroup.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />

<div class="container">
	<nav>
		<LeftNavGroup />
	</nav>

	{@render children?.()}
</div>

<style>
	.container {
		width: var(--agora-width);
		margin: auto;
		display: flex;
		gap: 15px;
	}

	nav {
		width: 250px;
		border-radius: 20px;
		background-color: white;
		box-shadow: 0 0 30px #0000000d;
		height: calc(100vh - 100px);
		flex-shrink: 0;
	}
</style>
