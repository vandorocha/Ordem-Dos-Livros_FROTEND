<script lang="ts">
	import '../app.css';
    import Pagina from '../components/template/Pagina.svelte';
	let { children } = $props();
</script>

<Pagina>
<!-- Renderiza páginas filho -->
{@render children()} 

</Pagina>