<script lang="ts">
    import { onMount } from "svelte";
    import { ListIcon, CloseIcon } from "../../icons";

    export let langsObject: { [key: string]: string };
    export let selected: string;
    let langs: [string, string][] = [];
    let showOffCanva = false;

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

<button
    class="sm:hidden text-light"
    on:click={() => {
        showOffCanva = !showOffCanva;
    }}
>
    <ListIcon />
</button>

{#if showOffCanva}
    <div
        class="absolute top-0 right-0 h-screen bg-darker w-screen opacity-75 z-10"
    />
    <div class="absolute top-0 right-0 h-screen z-20 w-screen">
        <button
            class="absolute top-0 right-0 m-5 text-light opacity-100 z-20"
            on:click={() => {
                showOffCanva = false;
            }}
        >
            <CloseIcon />
        </button>
        <div class="flex justify-center w-full h-full">
            <select
                class="bg-dark p-2 m-2 border-light rounded-button text-light border absolute top-1/4"
                on:change={redirect}
            >
                {#each langs as [key, value]}
                    <option selected={key === selected} value={key}
                        >{value}</option
                    >
                {/each}
            </select>
        </div>
    </div>
{/if}

<select
    class="p-2 py-3 m-2 bg-primary hover:bg-primary-darker rounded-button text-light hidden sm:block font-abz transition-colors duration-300"
    on:change={redirect}
>
    {#each langs as [key, value]}
        <option selected={key === selected} value={key}>{value}</option>
    {/each}
</select>
