<script>
    export let tabs;
    export let selected = tabs[0];
    export let width = '500px';
</script>

<div class="lb__tab-container" style={`width: ${width}`}>
    <div class="lb__tab-header">
        {#each tabs as tab, i}
            <span
                class="lb__tab-selector"
                class:lb__tab-selected={selected === tab}
                on:click={() => {
                    selected = tab;
                }}
            >
                {#if selected === tab}
                    <div class="lb__tab-selected-indicator" />
                    <div class="lb__tab-selected-indicator-border-hider" />
                {/if}
                <div class="lb__tab-selector-content">
                    {tab}
                </div>
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
        height: 100%;

        margin-left: -3px;
        margin-top: -3px;
        margin-bottom: -3px;

        @include border-normal($transparent);
        transition: all $transition-normal;
        @include span-button;
        position: relative;
    }

    .lb__tab-selector-content {
        padding: $gap-tiny;
        font-weight: 500;
    }

    .lb__tab-body {
        padding: $gap-tiny;
        border-radius: 0 0 $border-radius-large $border-radius-large;
    }

    .lb__tab-selected {
        @include border-normal($border1);
    }

    .lb__tab-selected-indicator {
        background-color: $blue;
        margin-top: -$border-normal;
        margin-left: -$border-normal;
        height: $border-normal;
        width: calc(100% + 6px);
    }

    .lb__tab-selected-indicator-border-hider {
        position: absolute;
        background-color: $white;
        bottom: -$border-normal;
        height: $border-normal;
        width: 100%;
    }
</style>
