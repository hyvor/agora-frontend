<script lang="ts">
	import type { Navigation } from '$lib/types';
	import NavLink from './NavLink.svelte';

	const navigation: Navigation = [
		{
			title: 'Community',
			links: [
				{
					title: 'Announcements',
					url: '/tag/announcements'
				},
				{
					title: 'General Discussion',
					url: '/tag/general-discussion'
				},
				{
					title: 'Introductions',
					url: '/tag/introductions'
				},
				{
					title: 'Feedback',
					url: '/tag/feedback'
				}
			]
		},
		{
			title: 'Products',
			links: [
				{
					title: 'Hyvor Talk',
					url: 'https://talk.hyvor.com'
				},
				{
					title: 'Hyvor Blogs',
					url: 'https://blogs.hyvor.com'
				},
				{
					title: 'Hyvor Agora',
					url: 'https://agora.hyvor.com'
				}
			]
		}
	];
</script>

<nav>
	{#each navigation as { title, links }}
		<div class="group">
			{#if title}
				<div class="title">{title}</div>
			{/if}
			{#each links as link}
				<NavLink {link} />
			{/each}
		</div>
	{/each}
</nav>

<style>
	nav {
		width: 250px;
		border-radius: 20px;
		background-color: white;
		box-shadow: 0 0 30px #0000000d;
		height: calc(100vh - 100px);
		flex-shrink: 0;
		padding: 15px 0;
	}

	.group {
		padding: 10px 10px;
	}

	.title {
		font-weight: 600;
		font-size: 18px;
		padding: 4px 14px 8px 14px;
	}
</style>
