<script>
	import '../app.postcss';
</script>

<slot />

<style>
	:global(body) {
		@apply bg-secondary text-gray-100 px-4;
	}
</style>
