<script>
    export let tabs;
    export let selected = tabs[0];
</script>

<div class="lb__tab-container">
    <div class="lb__tab-header">
        {#each tabs as tab, i}
            <span
                class="lb__tab-selector"
                class:lb__tab-selected={selected === tab}
                on:click={() => {
                    selected = tab;
                }}
            >
                {tab}
            </span>
        {/each}
    </div>

    <div class="lb__tab-body">
        {#each tabs as tab}
            {#if tab === selected}
                <slot {tab} />
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../styles/main.scss";

    .lb__tab-container {
        margin-bottom: 10px;
    }

    .lb__tab-body {
        @include border-normal($border1);
        border-top: none;
    }

    .lb__tab-header {
        padding-left: $gap-normal;
        @include border-normal($border1);
        border-radius: $border-radius-large $border-radius-large 0 0;
    }

    .lb__tab-selector {
        display: inline-block;
        padding: $gap-tiny;
        height: 100%;

        margin-left: -3px;
        margin-top: -3px;
        margin-bottom: -3px;

        @include border-normal($transparent);
        transition: all $transition-normal;
        @include span-button;
    }

    .lb__tab-body {
        padding: $gap-tiny;
        border-radius: 0 0 $border-radius-large $border-radius-large;
    }

    .lb__tab-selected {
        @include border-normal($border1);
        border-bottom-color: $white;
        border-top-color: $blue;
    }
</style>
