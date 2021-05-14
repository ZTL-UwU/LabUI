<script lang="typescript">
    import { mix_classes } from '../scripts/utils.ts';
    import { LInput } from '../main';

    export let value = 0;

    const handle_minus = () => {
        value -= 1;
    };

    const handle_add = () => {
        value += 1;
    };

    const handle_input = (event, is_limited, limit, value) => {
        let res = null;
        if (!is_limited || event.target.value.length <= limit) {
            if (parseInt(event.target.value) == event.target.value || event.target.value === '') {
                res = event.target.value;
            }
        }

        return res;
    };
</script>

<span class="lb__number-picker">
    <span class="lb__number-picker-button lb__number-picker-button-left" on:click={ handle_minus }>
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
    <span class="lb__number-picker-button lb__number-picker-button-right" on:click={ handle_add }>
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

            height: 38px;
            width: 38px;

            text-align: center;

            .lb__number-picker-button-inner {
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
</style>
