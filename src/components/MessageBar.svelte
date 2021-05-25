<script>
    import { createEventDispatcher } from 'svelte';

    import { mix_styles } from '../scripts/utils';
    import * as colors from '../scripts/color.js';

    export let type = 'normal';
    export let color = 'blue';
    export let show = true;
    export let handle_close = () => {
        return false;
    }

    const dispatcher = createEventDispatcher();

    const closeAlert = () => {
        show = handle_close();
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
        <div class="lb__msg-bar-title-holder">
            <div>
                <slot name="icon" />
                <span class="lb__msg-bar-title"><slot name="title" /></span>
            </div>
        </div>
        <span class="lb__msg-bar-close-button" on:click={ closeAlert }>x</span>
        <br>
        <span class="lb__msg-bar-content"><slot name="content" /></span>
    </div>
{/if}

<style lang="scss">
    @import '../styles/main.scss';

    .lb__message-bar {
        $massage-bar-height: $height-small;
        
        min-height: $massage-bar-height;
        padding: $gutter-normal $gap-normal $gutter-normal $gap-normal;
        margin-bottom: 10px;

        @include border-small($transparent);
        border-radius: $border-radius-normal;

        .lb__msg-bar-title {
            @include title1;
        }
        .lb__msg-bar-content {
            font-size: $font-size-normal;
            line-height: 2;
        }

        .lb__msg-bar-title-holder {
            @include v-center;
            height: $massage-bar-height;
        }

        .lb__msg-bar-close-button {
            @include span-button;
            @include v-center;

            height: $massage-bar-height;

            float: right;
            margin-right: $gutter-normal;
        }
    }
</style>