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
    @import '../styles/variables.scss';

    .lb__radio {
        user-select: none;
        @include v-center;
        cursor: pointer;
        margin-right: $gap-normal;

        transition: $transition-normal;
    }

    .lb__radio-indicator {
        transition: $transition-normal;

        margin-right: 5px;
        height: 15px;
        width: 15px;

        border-radius: 100%;
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

        .lb__radio-indicator-inner {
            @include zoom-in-transform;

            display: inline-block;

            width: 5px;
            height: 5px;
            background-color: $white;
            border-radius: 100%;

            margin-bottom: 5px;
            margin-left: 5px;
        }

        .lb__radio-indicator-inner-holder {
            display: inline-block;
            width: 5px;
            height: 5px;
            margin-bottom: 5px;
            margin-left: 5px;
        }
    }

    .lb__radio-name {
        transition: $transition-normal;

        &:hover {
            color: $blue;
        }

        &.lb__radio-name-on {
            color: $blue7;
        }

        &.lb__radio-disabled {
            color: $c_grey2;
        }
    }

    .lb__radio-disabled {
        @include disabled;
    }
</style>
