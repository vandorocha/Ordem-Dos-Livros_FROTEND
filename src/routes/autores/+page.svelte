<script>
    import ItemAutor from "../../components/autor/ItemAutor.svelte";
    import autores from "../../constants/autores";

</script>
<h1 class="text-3xl font-bold">Autores</h1>

<ItemAutor autor={autores[0]} />
<ItemAutor autor={autores[1]} />
<ItemAutor autor={autores[2]} />