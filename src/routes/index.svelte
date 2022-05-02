<script>
    import CompanySection from "$lib/components/Company/CompanySection.svelte";
    import WorksSection from "$lib/components/Works/WorksSection.svelte";
    import HeroSection from "$lib/components/Hero/HeroSection.svelte";
    import TechSection from "$lib/components/Techs/TechSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";

    export let data;
    const {works, companies, hero, techs} = data;
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<HeroSection hero={hero[0]}/>
<TechSection techs={techs}/>
<CompanySection companies={companies}/>
<WorksSection works={works}/>
<ContactSection/>
