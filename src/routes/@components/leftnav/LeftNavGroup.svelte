<script lang="ts">
	const sections = ['General', 'Shipping', 'Payments', 'Returns', 'Account'];
</script>

<div class="group">
	<div class="title">Categories</div>
	{#each sections as section}
		<div class="section">
			<a href="/forum/{section.toLowerCase()}">{section}</a>
		</div>
	{/each}
</div>

<style>
	.group {
		padding: 15px 25px;
	}

	.title {
		font-weight: 600;
		font-size: 18px;
		padding: 4px 0 8px;
	}

	a {
		text-decoration: none;
		color: black;
	}

	a:hover {
		text-decoration: underline;
	}

	.section {
		padding: 8px 0;
	}
</style>
