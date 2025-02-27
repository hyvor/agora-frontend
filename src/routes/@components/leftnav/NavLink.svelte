<script lang="ts">
	import type { NavigationLink } from '$lib/types';

	interface Props {
		link: NavigationLink;
	}

	let { link }: Props = $props();
</script>

<a href={link.url}>{link.title}</a>

<style>
	a {
		display: block;
		padding: 10px 14px;
		text-decoration: none;
		color: black;
		border-radius: 10px;
	}

	a:hover {
		background-color: #fafafa;
	}
</style>
