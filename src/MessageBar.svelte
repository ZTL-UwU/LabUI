<script lang="typescript">
    import { LButton } from './main.ts';
    import { createEventDispatcher } from 'svelte';
    import { error, warning, success, info, primary, white } from './color.ts';

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
    })[type];

    function closeAlert() {
        show = false;
        dispatcher("close");
    }
</script>

{#if show}
    <div
        style={`background-color: ${color}; color: ${white} `}
        class="message-bar"
    >
        <slot name="icon" />
        <slot name="content" />
        <div class="close">
            <LButton color="grey" ghost size="tiny" on:click={closeAlert}>X</LButton>
        </div>
    </div>
{/if}

<style lang="scss">
    @import './variables.scss';

    .close {
        cursor: pointer;
        float: right;
        margin-right: 5px;
    }

    .message-bar {
        min-height: 30px;
        padding: 2px 20px 2px 20px;
        border-radius: $border-radius-normal;

        margin-bottom: 10px;
    }
</style>