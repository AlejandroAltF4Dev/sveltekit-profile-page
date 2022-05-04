<script>
    import {Button} from "spaper";
    import TiDownloadOutline from 'svelte-icons/ti/TiDownloadOutline.svelte'
    export let hero;
</script>
<div class="container max-w-6xl h-screen w-full mx-auto flex items-center justify-center paper border border-2">
    <div class="grid gap-4 place-content-center p-6">
        <div class="m-auto">
            <img src={hero.properties.Image.files[0].file.url} alt="Alejandro Alvarez"
                 class="hero-image rounded-full w-[174px] h-[180px] md:w-[243px] md:h-[243px]">
        </div>
        <div class="flex flex-col">
            <h1 class="hero-text font-bold text-center text-[32px]  md:text-[44px]">Hello, my name is <span
                    class="font-bold text-primary">Alejandro</span></h1>
            <p class="hero-text text-center text-[20px] mt-4">{hero.properties.Description.title[1].plain_text}</p>
            <Button size="large" isLink type="primary" href={hero.properties.CV.files[0].file.url}
                    class="self-center text-[20px] font-medium mt-4 flex items-center">
                <div class="w-8 h-8 mr-2">
                    <TiDownloadOutline/>
                </div>
                Download Resume
            </Button>
        </div>
    </div>
</div>
