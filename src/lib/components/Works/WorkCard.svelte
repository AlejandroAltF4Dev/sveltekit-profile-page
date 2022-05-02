<script>
    import {Button} from "spaper";

    export let item;
</script>

<Button isLink href={item.properties.Url.url} target="_blank"
        class="flex flex-col md:flex-row md:space-x-8 bg-white p-4"
>
    <img
            src={item?.properties?.Image?.files[0]?.file?.url}
            alt={item?.properties?.Name?.title[0]?.plain_text}
            class="h-[230px] w-full object-cover rounded-lg md:w-[246px] md:h-[180px] ring-1 ring-gray-200 border-0"
    />
    <div class="flex flex-col">
        <div class="flex items-center justify-between">
            <h1 class="font-bold text-[24px] md:text-[30px] mt-4 md:mt-0">
                { item?.properties?.Name?.title[0]?.plain_text }
            </h1>
            <!--<a mat-icon-button [href]="item.url" target="_blank" matTooltip="Visit">
                <mat-icon>open_in_new</mat-icon>
            </a>-->
        </div>
        <!--<mat-chip-list aria-label="Categories">
            <mat-chip [selectable]="false" color="primary" selected>{{
                item.startDate | date: "yyyy"
            }}</mat-chip>

            <mat-chip [selectable]="false" *ngFor="let category of item.categories">{{
                category
            }}</mat-chip>
        </mat-chip-list>-->
        <p class="text-[16px] mt-2 line-clamp-5">{ item?.properties?.Description?.rich_text[0]?.plain_text }</p>
    </div>
</Button>
