<script>
    import Cabecalho from "./Cabecalho.svelte";
import Logo from "./Logo.svelte";

</script>
<div class="flex flex-col min-h-screen bg-black text-white">

    <Cabecalho />
    <main>
        <slot>

        </slot>
    </main>
</div>