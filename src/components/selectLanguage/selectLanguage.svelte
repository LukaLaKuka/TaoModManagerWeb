<script lang="ts">
    import { onMount } from "svelte";

    export let langsObject: { [key: string]: string };
    export let selected: string;
    let langs: [string, string][] = [];

    const redirect = (e: Event) => {
        const target = e.target as HTMLSelectElement;
        let newLang = target.value;
        let previousUrl = window.location.href;
        let newUrl = undefined;
        langs.forEach(([lang]) => {
            if (previousUrl.includes(lang))
                newUrl = previousUrl.replace(lang, newLang);
        });

        if (newUrl) window.location.href = newUrl;
    };

    onMount(() => {
        langs = Object.entries(langsObject);
    });
</script>

<select
    class="bg-dark p-2 m-2 border-light rounded-button text-light border"
    on:change={redirect}
>
    {#each langs as [key, value]}
        <option selected={key === selected} value={key}>{value}</option>
    {/each}
</select>
