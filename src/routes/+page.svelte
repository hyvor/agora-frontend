<script lang="ts">
	const posts = [
		'Discussion of Freight Forwarding is Prohibited',
		'I am a new user, how do I get started?',
		'How do I get a refund?',
		'What is the best way to ship a package?'
	];
</script>

<main>
	{#each posts as post}
		<article>
			<a href="/post">{post}</a>
		</article>
	{/each}
</main>

<style>
	main {
		flex: 1;
	}

	article {
		margin-bottom: 10px;
		padding: 15px 20px;
		border-radius: 20px;
		background-color: white;
		box-shadow: 0 0 30px #0000000d;
	}

	article a {
		text-decoration: none;
		color: black;
		font-size: 18px;
	}
</style>
