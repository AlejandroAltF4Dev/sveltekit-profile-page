<script>
    import {Button} from "spaper";

    export let item;
</script>

<Button block isLink href={item.properties.Url.url} target="_blank" class="block no-underline transparent flex items-center justify-center">
    <div class="p-4">
        <img src={item.properties.Image.files[0].file.url} alt="" class="max-h-24 border-0">
    </div>
</Button>
