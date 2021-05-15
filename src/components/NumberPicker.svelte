<script>
    import { mix_classes } from '../scripts/utils.js';
    import { LInput } from '../main';

    export let value = 0;
    export let min = -Infinity;
    export let max = Infinity;
    export let step = 1;
    export let flat = true;

    export let handle_minus = (value, min, max, step) => {
        const val = value;
        return val <= min ? val : val - step;
    };
    export let handle_add = (value, min, max, step) => {
        const val = value;
        return val >= max ? val : val + step;
    };

    const handle_min_check = (value, min) => {
        return parseFloat(value) <= parseFloat(min);
    };
    const handle_max_check = (value, max) => {
        return parseFloat(value) >= parseFloat(max);
    };

    const handleMinus = () => {
        value = handle_minus(parseFloat(value), parseFloat(min), parseFloat(max), parseFloat(step));
    };
    const handleAdd = () => {
        value = handle_add(parseFloat(value), parseFloat(min), parseFloat(max), parseFloat(step));
    };

    $: minus_button_disabled = handle_min_check(value, min);
    $: add_button_disabled = handle_max_check(value, max);

    $: classes = mix_classes([
        'number-picker',
        flat ? '' : 'number-picker-3D',
    ]);
    $: minus_button_classes = mix_classes([
        'number-picker-button',
        'number-picker-button-minus',
        minus_button_disabled ? 'number-picker-button-disabled' : '',
    ]);
    $: add_button_classes = mix_classes([
        'number-picker-button',
        'number-picker-button-add',
        add_button_disabled ? 'number-picker-button-disabled' : '',
    ]);

    const handle_input = (event, is_limited, limit, value) => {
        let res = null;
        if (!is_limited || event.target.value.length <= limit) {
            if (parseFloat(event.target.value) == event.target.value || event.target.value === '') {
                res = parseFloat(event.target.value);
            }
        }

        return res;
    };
</script>

<span class={ classes }>
    <span class={ minus_button_classes } on:click={ handleMinus }>
        <span class="lb__number-picker-button-inner">-</span>
    </span>
    <span class="lb__number-picker-input">
        <LInput
            bind:value={ value }
            center
            width="80px"
            height="30px"
            handle_input={ handle_input }
        />
    </span>
    <span class={ add_button_classes } on:click={ handleAdd }>
        <span class="lb__number-picker-button-inner">+</span>
    </span>
</span>

<style lang="scss">
    @import '../styles/variables.scss';

    .lb__number-picker {
        display: inline-block;
        position: relative;
        background-color: $white3;
        border: 1px solid $border1;
        border-radius: $border-radius-normal;
        padding-bottom: 2px;

        .lb__number-picker-button {
            @include v-center;

            cursor: pointer;
            z-index: $z-index1;
            border-radius: $border-radius-normal;
            user-select: none;
            margin-top: 3px;
            margin-bottom: 1px;

            &.lb__number-picker-button-minus { margin-left: 3px; }
            &.lb__number-picker-button-add { margin-right: 3px; }

            height: 38px;
            width: 38px;

            text-align: center;

            .lb__number-picker-button-inner {
                margin-left: auto;
                margin-right: auto;
            }

            &.lb__number-picker-button-disabled {
                @include disabled;
                background-color: $c_grey1;
            }
        }

        &.lb__number-picker-3D {
            padding-bottom: $border-huge;
            border-bottom-width: $border-large;
        }
    }
</style>
