<script>
    export let href = "/"
    export let texto = ""
</script>

<li>
    <a {href} class="
    flex gap-2 items-center cursor-pointer text-zinc-300
    px-4 py-2 hover:underline hover:text-white hover:bg-white/10">
        <slot>
            
        </slot>
        <span>{texto}</span>
    </a>
</li>