<script>
	export let title = 'Navbar';

	import { random_name, random_color } from '$lib/globalnamestore';
</script>

<header class="container">
	<nav>
		<ul>
			<li><strong>{title}</strong></li>
		</ul>
		<ul>
			<li>{$random_name}</li>
			<div class="rounded" style="background: {$random_color};"></div>
		</ul>
	</nav>
</header>

<style>
	.rounded {
		border-radius: 50%;
		width: 20px;
		height: 20px;
	}
</style>
