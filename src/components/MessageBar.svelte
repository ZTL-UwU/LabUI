<script>
    import { mix_styles } from '../scripts/utils';
    import { LButton } from '../main.js';
    import { createEventDispatcher } from 'svelte';
    import * as colors from '../scripts/color.js';

    export let type = 'normal';
    export let color = 'info';
    export let show = true;

    const dispatcher = createEventDispatcher();

    function closeAlert() {
        show = false;
        dispatcher("close");
    }

    $: bg_color = ({
        dark: {
            info: colors.blue,
            primary: colors.green,
            warning: colors.yellow,
            error: colors.red,
            success: colors.green50,
            other: colors.c_grey20,
        }, normal: {
            info: colors.blue40,
            primary: colors.green40,
            warning: colors.yellow30,
            error: colors.red40,
            success: colors.green30,
            other: colors.c_grey20,
        }, light: {
            info: colors.white,
            primary: colors.white,
            warning: colors.white,
            error: colors.white,
            success: colors.white,
            other: colors.white,
        },
    })[type][color];

    $: border_color = ({
        info: colors.blue,
        primary: colors.green,
        warning: colors.yellow,
        error: colors.red,
        success: colors.green50,
        other: colors.c_grey20,
    })[color];

    $: font_color = ({
        info: colors.blue80,
        primary: colors.green80,
        warning: colors.yellow70,
        error: colors.red80,
        success: colors.green70,
        other: colors.c_grey40,
    })[color];

    $: styles = mix_styles([
        type === 'light' ? `border-color: ${border_color}` : '',
        `background-color: ${bg_color}`,
        type === 'dark' ? 'color: #FFFFFF' : `color: ${font_color}`,
    ]);
</script>

{#if show}
    <div
        style={ styles }
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
    @import '../styles/main.scss';

    .lb__message-bar {
        $massage-bar-height: $height-normal;
        
        min-height: $massage-bar-height;
        padding: $gutter-tiny $gap-normal $gutter-tiny $gap-normal;
        margin-bottom: 10px;

        @include border-small($transparent);
        border-radius: $border-radius-normal;

        .lb__msg-bar-content {
            @include v-center;
            height: $massage-bar-height;
        }

        .lb__msg-bar-close-button {
            @include v-center;
            height: $massage-bar-height;

            float: right;
            margin-right: $gutter-normal;
        }
    }
</style>