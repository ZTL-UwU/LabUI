<script>
    import { mix_classes } from '../scripts/utils.js';
    import { LInput } from '../main';

    export let value = 0;
    export let min = -Infinity;
    export let max = Infinity;
    export let step = 1;
    export let flat = true;
    export let button_position = 'both';
    export let type = 'normal';
    export let disabled = false;

    export let rating_array = [];
    if (rating_array.length === 0 && parseInt(max) !== Infinity) {
        for (let i = 1; i <= parseInt(max); i += 1) {
            rating_array.push(i);
        }
    }

    export let handle_minus = (value, min, max, step) => {
        const val = value;
        return val <= min ? val : val - step;
    };

    export let handle_add = (value, min, max, step) => {
        const val = value;
        return val >= max ? val : val + step;
    };

    $: minus_button_disabled = handle_min_check(value, min);
    $: add_button_disabled = handle_max_check(value, max);

    $: classes = mix_classes([
        'number-picker',
        disabled ? 'number-picker-disabled' : '',
        button_position === 'right' ? 'number-picker-position-right' : '',
        button_position === 'left' ? 'number-picker-position-left' : '',
        flat ? '' : 'number-picker-3D',
    ]);

    $: rating_classes = mix_classes([
        disabled ? 'number-picker-disabled' : '',
    ]);

    $: minus_button_classes = mix_classes([
        'number-picker-button',
        'number-picker-button-left',
        minus_button_disabled ? 'number-picker-button-disabled' : '',
        disabled ? 'number-picker-disabled' : '',
    ]);

    $: add_button_classes = mix_classes([
        'number-picker-button',
        'number-picker-button-right',
        add_button_disabled ? 'number-picker-button-disabled' : '',
        disabled ? 'number-picker-disabled' : '',
    ]);

    $: stacked_button_classes = mix_classes([
        'number-picker-stacked-button',
        button_position === 'right' ? 'number-picker-button-right' : 'number-picker-button-left',
    ]);

    $: stacked_button_add_classes = mix_classes([
        'number-picker-stacked_button_add',
        add_button_disabled ? 'number-picker-button-disabled' : '',
        disabled ? 'number-picker-disabled' : '',
    ]);

    $: stacked_button_minus_classes = mix_classes([
        'number-picker-stacked_button_minus',
        minus_button_disabled ? 'number-picker-button-disabled' : '',
        disabled ? 'number-picker-disabled' : '',
    ]);

    $: handleRatingClasses = (index) => {
        return mix_classes([
            'number-picker-rating-indicator',
            disabled ? 'number-picker-disabled' : '',
            index > value ? 'number-picker-rating-indicator-off' : '',
        ]);
    };

    const handle_input = (event, is_limited, limit, value) => {
        let res = null;
        if (!is_limited || event.target.value.length <= limit) {
            if (parseFloat(event.target.value) == event.target.value || event.target.value === '') {
                res = parseFloat(event.target.value);
            }
        }

        return res;
    };

    const handle_min_check = (value, min) => {
        return parseFloat(value) <= parseFloat(min);
    };

    const handle_max_check = (value, max) => {
        return parseFloat(value) >= parseFloat(max);
    };

    const handleMinus = () => {
        if (!disabled) {
            value = handle_minus(parseFloat(value), parseFloat(min), parseFloat(max), parseFloat(step));
        }
    };
    const handleAdd = () => {
        if (!disabled) {
            value = handle_add(parseFloat(value), parseFloat(min), parseFloat(max), parseFloat(step));
        }
    };

    const handleRatingClick = (index) => {
        if (!disabled) {
            value = index;
        }
    };
</script>

{#if type === 'normal'}
    <span class={ classes }>
        {#if button_position === 'both'}
            <span class={ minus_button_classes } on:click={ handleMinus }>
                <span class="lb__number-picker-button-inner">-</span>
            </span>
        {:else if button_position === 'left'}
            <span class={ stacked_button_classes }>
                <div class={ stacked_button_add_classes } on:click={ handleAdd }>+</div>
                <div class={ stacked_button_minus_classes } on:click={ handleMinus }>-</div>
            </span>
        {/if}
        <span class="lb__number-picker-input">
            <LInput
                bind:value={ value }
                center
                width="80px"
                height="30px"
                { handle_input }
                { disabled }
            />
        </span>
        {#if button_position === 'both'}
            <span class={ add_button_classes } on:click={ handleAdd }>
                <span class="lb__number-picker-button-inner">+</span>
            </span>
        {:else if button_position === 'right'}
            <span class={ stacked_button_classes }>
                <div class={ stacked_button_add_classes } on:click={ handleAdd }>+</div>
                <div class={ stacked_button_minus_classes } on:click={ handleMinus }>-</div>
            </span>
        {/if}
    </span>
{:else if type === 'rating'}
    <span class={ rating_classes }>
        {#each rating_array as index}
            <span
                class={ handleRatingClasses(index) }
                on:click={ handleRatingClick(index) }
            />
        {/each}
    </span>
{/if}

<style lang="scss">
    @import '../styles/main.scss';

    $number-picker-gutter: $gutter-small;

    .lb__number-picker {
        display: inline-block;
        position: relative;
        background-color: $white3;
        border: 1px solid $border1;
        border-radius: $border-radius-normal;
        padding-bottom: $number-picker-gutter;

        &.lb__number-picker-position-right {
            padding: $number-picker-gutter;
            margin-right: 40px;
            border-radius: $border-radius-normal 0 0 $border-radius-normal;
        }
        &.lb__number-picker-position-left {
            padding: $number-picker-gutter;
            margin-left: 40px;
            border-radius: 0 $border-radius-normal $border-radius-normal 0;
        }

        .lb__number-picker-button {
            @include v-center;
            @include span-button;
            
            transition: $transition-normal;
            z-index: $z-index1;
            border-radius: $border-radius-normal;

            margin-top: $number-picker-gutter;
            margin-bottom: 1px;

            height: 38px;
            width: 38px;

            &.lb__number-picker-button-left { margin-left: $number-picker-gutter; }
            &.lb__number-picker-button-right { margin-right: $number-picker-gutter; }

            .lb__number-picker-button-inner {
                @include auto-h-center;
            }
        }

        &.lb__number-picker-3D {
            padding-bottom: $border-huge;
            border-bottom-width: $border-large;
        }
    }

    .lb__number-picker-stacked-button {
        position: absolute;
        height: 44px;
        width: 38px;
        background-color: $white3;
        border: 1px solid $border1;
        &.lb__number-picker-button-left {
            border-top-left-radius: $border-radius-normal;
            border-bottom-left-radius: $border-radius-normal;
            margin: -4px 0 0 0px;
            left: -40px;
        }
        &.lb__number-picker-button-right {
            border-top-right-radius: $border-radius-normal;
            border-bottom-right-radius: $border-radius-normal;
            margin: -4px 0 0 3px;
        }

        .lb__number-picker-stacked_button_add,
        .lb__number-picker-stacked_button_minus {
            @include span-button;

            transition: $transition-normal;
            width: 100%;
            height: 50%;
            &.lb__number-picker-stacked_button_add {
                border-bottom: 1px solid $border1;
            }
        }
    }

    .lb__number-picker-button-disabled {
        cursor: not-allowed !important;
        background-color: $c_grey1;
    }
    .lb__number-picker-disabled {
        cursor: not-allowed !important;
    }

    .lb__number-picker-rating-indicator {
        @include border-tiny($transparent);
        $rating-indicator-size: $height-small;
        @include span-button;

        display: inline-block;
        height: $rating-indicator-size;
        width: $rating-indicator-size;

        margin-right: $gutter-normal;
        border-radius: $border-radius-round;
        transition: $transition-normal;

        &:hover {
            &.lb__number-picker-disabled {
                border-color: $transparent;
            }
            border-color: $yellow3;
        }

        background-color: $yellow3;
        &.lb__number-picker-rating-indicator-off {
            background-color: $c_grey1;
        }
    }
</style>
