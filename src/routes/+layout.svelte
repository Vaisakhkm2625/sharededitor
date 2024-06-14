<script>
	// You can add any necessary scripts here
	import '@picocss/pico';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	let title = 'CoEdit';
</script>

<Navbar {title} />

<slot />

<Footer />
