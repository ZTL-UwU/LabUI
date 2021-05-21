<script>
    import { LButton } from '../main.js';
    import { createEventDispatcher } from 'svelte';
    import { error, warning, success, info, primary, white, other } from '../scripts/color.js';

    export let type = 'normal';
    export let show = true;

    const dispatcher = createEventDispatcher();

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
        <div class="lb__msg-bar-content">
            <slot name="icon" />
            <slot name="content" />
        </div>
        <div class="lb__msg-bar-close-button">
            <LButton color="grey" flat size="tiny" on:click={closeAlert}>X</LButton>
        </div>
    </div>
{/if}

<style lang="scss">
    @import '../styles/variables.scss';

    .lb__message-bar {
        $massage-bar-height: $height-normal;
        
        min-height: $massage-bar-height;
        padding: $buffer-tiny $gap-normal $buffer-tiny $gap-normal;
        border-radius: $border-radius-normal;
        margin-bottom: 10px;

        .lb__msg-bar-content {
            @include v-center;
            height: $massage-bar-height;
        }

        .lb__msg-bar-close-button {
            @include v-center;
            height: $massage-bar-height;

            float: right;
            margin-right: $buffer-normal;
        }
    }
</style>