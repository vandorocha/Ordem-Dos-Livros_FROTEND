<script lang="ts">
    export let autor: any = null;
</script>

{#if autor}
<div>
    <span>{autor.nome}</span>
</div>
{/if}