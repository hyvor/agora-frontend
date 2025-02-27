<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;

		/**
		 * These are Forum API endpoints that are used to load data for the page.
		 */
		loaders: Promise<any>[];
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
