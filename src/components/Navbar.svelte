<script>
	export let title = 'Navbar';
</script>

<header class="container">
	<nav>
		<ul>
			<li><strong>{title}</strong></li>
		</ul>
		<ul>
			<slot />
		</ul>
	</nav>
</header>
<slot />
