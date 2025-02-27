<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Header from './@components/header/Header.svelte';
	import LeftNav from './@components/leftnav/LeftNav.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />

<div class="container">
	<LeftNav />

	{@render children?.()}
</div>

<style>
	.container {
		width: var(--agora-width);
		margin: auto;
		display: flex;
		gap: 15px;
	}
</style>
