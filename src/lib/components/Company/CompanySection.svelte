<script>
    import CompanyItem from "$lib/components/shared/Item.svelte";

    export let companies;
</script>

<div class="flex flex-col py-16 px-4 scroll-mt-[40px] md:scroll-mt-[64px]" id="companies">
    <div class="container max-w-6xl mx-auto paper border border-2">
        <h1 class="font-bold text-3xl text-center">
            Companies
        </h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 place-items-center">
            {#each companies as company}
                <CompanyItem item={company}/>
            {/each}
        </div>
    </div>
</div>
