<header>
	<a class="logo" href="/">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Framework_Computer_logo.svg/1600px-Framework_Computer_logo.svg.png"
			alt="logo"
		/>
	</a>
	<nav>
		<a href="/">Home</a>
		<a href="/+page">Page</a>
	</nav>
</header>

<style>
	header {
		width: var(--agora-width);
		margin: auto;
		padding: 25px 0;
		display: flex;
		align-items: center;
		height: 70px;
	}
	img {
		width: 150px;
	}
	.logo {
		flex: 1;
	}
	nav {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		gap: 10px;
	}
	nav a {
		text-decoration: none;
		color: black;
		font-weight: 600;
		display: inline-block;
		padding: 0 10px;
	}
</style>
