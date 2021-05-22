<script>
    import { mix_styles } from '../scripts/utils';
    import { LButton } from '../main.js';
    import { createEventDispatcher } from 'svelte';
    import * as colors from '../scripts/color.js';

    export let type = 'normal';
    export let color = 'blue';
    export let show = true;

    const dispatcher = createEventDispatcher();

    function closeAlert() {
        show = false;
        dispatcher("close");
    }

    $: bg_color = ({
        dark: {
            blue: colors.blue,
            green: colors.green,
            yellow: colors.yellow,
            red: colors.red,
            grey: colors.c_grey20,
        }, normal: {
            blue: colors.blue40,
            green: colors.green40,
            yellow: colors.yellow30,
            red: colors.red40,
            grey: colors.c_grey20,
        }, light: {
            blue: colors.white,
            green: colors.white,
            yellow: colors.white,
            red: colors.white,
            grey: colors.white,
        },
    })[type][color];

    $: border_color = ({
        blue: colors.blue,
        green: colors.green,
        yellow: colors.yellow,
        red: colors.red,
        grey: colors.c_grey20,
    })[color];

    $: font_color = ({
        blue: colors.blue80,
        green: colors.green80,
        yellow: colors.yellow70,
        red: colors.red80,
        grey: colors.c_grey40,
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