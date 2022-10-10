<script>
    import { mix_classes } from '../scripts/utils.js';

    export let value = null;
    export let label = null;
    export let disabled = false;

    export let handle_click = (event, disabled, value, label) => {
        let res = null;
        if (!disabled && label !== null) {
            res = label;
        }

        return res;
    };

    export let handle_on = (label, value) => {
        return value !== null && label !== null && value === label;
    }

    const handleClick = (event) => {
        const res = handle_click(event, disabled, value, label);
        if (res !== null) {
            value = res;
        }
    };

    $: on = handle_on(label, value);
    $: radio_classes = mix_classes([
        'radio',
        disabled ? 'radio-disabled' : '',
    ]);
    $: radio_circle_classes = mix_classes([
        'radio-indicator',
        on ? 'radio-indicator-on' : '',
        disabled ? 'radio-disabled' : '',
    ]);
    $: radio_name_classes = mix_classes([
        'radio-name',
        on ? 'radio-name-on': '',
        disabled ? 'radio-disabled' : '',
    ]);
</script>

<span
    class={radio_classes}
    on:click={handleClick}
>
    <span class={radio_circle_classes}>
        {#if on}
            <span class="lb__radio-indicator-inner" />
        {:else}
            <span class="lb__radio-indicator-inner-holder" />
        {/if}
    </span>
    <span class={radio_name_classes}>
        <slot />
    </span>
</span>

<style lang="scss">
    @import '../styles/main.scss';

    $radio-gutter: $gutter-normal;
    .lb__radio {
        @include v-center;
        @include span-button;

        margin-right: $gap-normal;
        transition: $transition-normal;
    }

    $radio-inner-size: 15px;
    .lb__radio-indicator {
        transition: $transition-normal;

        margin-right: $radio-gutter;
        height: $radio-inner-size;
        width: $radio-inner-size;

        border-radius: $border-radius-round;
        background-color: $white;
        @include border-tiny($border1);

        &.lb__radio-indicator-on {
            border-color: $transparent;
            background-color: $blue;
        }

        &:hover {
            border-color: $blue;
        }

        &.lb__radio-disabled {
            background-color: $grey1;
            border-color: $transparent;
        }

        $radio-inner-indicator-size: 5px;
        .lb__radio-indicator-inner {
            @include zoom-in-transform;

            display: inline-block;

            width: $radio-inner-indicator-size;
            height: $radio-inner-indicator-size;
            background-color: $white;
            border-radius: $border-radius-round;

            margin-bottom: 5px;
        }

        .lb__radio-indicator-inner-holder {
            display: inline-block;
            width: $radio-inner-indicator-size;
            height: $radio-inner-indicator-size;
            margin-bottom: $radio-gutter;
            margin-left: $radio-gutter;
        }
    }

    .lb__radio-name {
        transition: $transition-normal;

        &:hover { color: $blue; }
        &.lb__radio-name-on { color: $blue7; }
        &.lb__radio-disabled { color: $c_grey2; }
    }

    .lb__radio-disabled {
        @include disabled;
    }
</style>
