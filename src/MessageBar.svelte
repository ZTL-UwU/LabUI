<script lang="typescript">
    import { LButton } from './main.ts';
    import { createEventDispatcher } from 'svelte';
    import { error, warning, success, info, primary, white, other } from './color.ts';

    export let type = 'normal';
    export let show = true;

    const dispatcher = createEventDispatcher();
    const light = '#FFF';
    const dark = '#000';

    $: color = ({
        normal: info,
        info: info,
        primary: primary,
        warning: warning,
        error: error,
        success: success,
        other: other,
    })[type];

    function closeAlert() {
        show = false;
        dispatcher("close");
    }
</script>

{#if show}
    <div
        style={`background-color: ${color}; color: ${white} `}
        class="lb__message-bar"
    >
        <slot name="icon" />
        <slot name="content" />
        <div class="lb__msg-bar-close-button">
            <LButton color="grey" flat size="tiny" on:click={closeAlert}>X</LButton>
        </div>
    </div>
{/if}

<style lang="scss">
    @import './variables.scss';

    .lb__msg-bar-close-button {
        cursor: pointer;
        float: right;
        margin-right: 5px;
    }

    .lb__message-bar {
        min-height: 30px;
        padding: 2px 20px 2px 20px;
        border-radius: $border-radius-normal;

        margin-bottom: 10px;
    }
</style>