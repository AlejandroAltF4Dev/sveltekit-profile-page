<script>
    import WorkCard from "$lib/components/Works/WorkCard.svelte";

    export let works;
</script>

<div class="flex flex-col px-4 py-16 works scroll-mt-[40px] md:scroll-mt-[64px]" id="works">
    <div class="container max-w-6xl mx-auto paper border border-2">
        <h1 class="section-header font-bold text-3xl text-center">
            Featured works
        </h1>
        <div class="grid  gap-4 lg:grid-cols-2 mt-4">
            {#each works as work}
                <WorkCard item={work}/>
            {/each}
        </div>
    </div>
</div>
