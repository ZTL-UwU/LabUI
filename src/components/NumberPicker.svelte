<script>
    import { mix_classes } from '../scripts/utils.js';
    import { LInput } from '../main';

    export let value = 0;
    export let min = -Infinity;
    export let max = Infinity;

    export let handle_minus = (value, min, max) => {
        const val = value;
        return val === min ? val : val - 1;
    };
    export let handle_add = (value, min, max) => {
        const val = value;
        return val === max ? val : val + 1;
    };

    const handleMinus = () => {
        value = handle_minus(parseInt(value), parseInt(min), parseInt(max));
    }
    const handleAdd = () => {
        value = handle_add(parseInt(value), parseInt(min), parseInt(max));
    }

    $: minus_button_disabled = parseInt(value) === parseInt(min);
    $: add_button_disabled = parseInt(value) === parseInt(max);

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
            if (parseInt(event.target.value) == event.target.value || event.target.value === '') {
                res = parseInt(event.target.value);
            }
        }

        return res;
    };
</script>

<span class="lb__number-picker">
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
        padding-bottom: 1px;

        .lb__number-picker-button {
            @include v-center;

            cursor: pointer;
            z-index: $z-index1;
            border-radius: $border-radius-normal;
            user-select: none;
            margin-top: 1px;
            &.lb__number-picker-button-minus { margin-left: 1px; }
            &.lb__number-picker-button-add { margin-right: 1px; }

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
    }
</style>
