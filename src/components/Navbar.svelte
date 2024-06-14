<script>
	export let title = 'Navbar';

	import { random_name, random_color } from '$lib/globalnamestore';
</script>

<header class="container">
	<nav>
		<ul>
			<a href="/" class="logo-link">
				<li><strong>{title}</strong></li>
			</a>
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

	.logo-link {
		text-decoration: none;
		color: inherit; /* Ensures text color remains the same */
	}

	/* Prevent color change on click */
	.logo-link:visited {
		color: inherit; /* Ensures visited link color remains the same */
	}
</style>
