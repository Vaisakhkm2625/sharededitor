<script>
	//import 'bootstrap/dist/css/bootstrap.min.css';
	//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

	let title = 'CoEdit';

	let description = 'Lets document together!';

	let features = [
		{
			title: 'Write Together, Anytime, Anywhere.',
			body: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat '
		},
		{
			title: 'One Document, Many Minds.',
			body: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat '
		},
		{
			title: 'Ideas Meet and Merge Here',
			body: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat '
		}
	];

	let uuid = crypto.randomUUID();
</script>

<main class="container">
	<section class="hero">
		<h1 class="welcome">Welcome to {title}</h1>

		<p>{description}</p>
		<a href="/collab/{uuid}" role="button"> Start Editing</a>
	</section>

	<section id="features" class="features">
		{#each features as feature}
			<div class="feature">
				<h2>{feature.title}</h2>
			</div>
		{/each}
	</section>
</main>

<style>
	/* Add custom styles here */
	.hero {
		text-align: center;
		padding: 4rem 1rem;
	}

	.features {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.feature {
		flex: 1;
		min-width: 250px;
		padding: 1rem;
		border: 1px solid #ddd;
		border-radius: 0.5rem;
	}

	.welcome {
		color: #ff0000;
		background: #cf5fcf;
		background: linear-gradient(to right, #cf5fcf 0%, #212ccf 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
