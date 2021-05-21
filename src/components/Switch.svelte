<script>
    import { mix_classes } from '../scripts/utils.js';

    export let value = false;
    export let inactive_value = false;
    export let active_value = true;

    $: on = check_on(value, inactive_value, active_value);

    $: background_classes = mix_classes([
        'switch-background',
        on ? 'switch-on' : 'switch-off',
    ]);

    $: indicator_classes = mix_classes([
        'switch-indicator',
        on ? 'switch-on' : 'switch-off',
    ]);

    export let check_on = (value, inactive_value, active_value) => {
        return value == active_value;
    }

    export let handle_click = (value, inactive_value, active_value, on) => {
        if (!on) { return active_value; }
        if (on) { return inactive_value; }
        return active_value;
    }

    const handleClick = () => {
        value = handle_click(value, inactive_value, active_value, on);
    }
</script>

<span
    class={ background_classes }
    on:click={ handleClick }
>
    <span class={ indicator_classes }></span>
</span>

<style lang="scss">
    @import '../styles/variables.scss';

    .lb__switch-background {
        $switch-height: 20px;
        $switch-width: 40px;

        cursor: pointer;
        transition: $transition-long;
        @include v-center;

        height: $switch-height;
        width: $switch-width;

        position: relative;
        border-radius: $border-radius-round;

        &.lb__switch-off {
            background-color: $c_grey1;
        }
        &.lb__switch-on {
            background-color: $blue;
        }

        .lb__switch-indicator {
            $switch-indicator-margin: 2px;
            $switch-indicator-size: $switch-height - $switch-indicator-margin * 2;

            transition: $transition-long;
            position: absolute;

            left: $switch-indicator-margin;
            &.lb__switch-on {
                margin-left: $switch-width - 2 * $switch-indicator-margin - $switch-indicator-size;
            }

            height: $switch-indicator-size;
            width: $switch-indicator-size;

            background-color: $white;
            border-radius: $border-radius-round;
        }

        margin-right: 5px;
    }
</style>
