<script>
    import Item from "$lib/components/shared/Item.svelte";
    export let techs;
</script>

<div class="flex flex-col px-4 py-16 scroll-mt-[40px] md:scroll-mt-[64px]" id="techs">
    <div class="container max-w-6xl mx-auto paper border border-2">
        <h1 class="font-bold text-3xl text-center">
            Techs
        </h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 place-items-center">
            {#each techs as tech}
                <Item item={tech}/>
            {/each}
        </div>
    </div>
</div>
