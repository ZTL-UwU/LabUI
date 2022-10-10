<script>
    import { mix_classes } from '../scripts/utils.js';

    export let value = false;
    export let inactive_value = false;
    export let active_value = true;
    export let disabled = false;
    export let show_name = false;

    export let on_color = 'blue';
    export let off_color = 'c_grey1';

    $: on = check_on(value, inactive_value, active_value);

    $: background_classes = mix_classes([
        'switch-background',
        on ? 'switch-on' : 'switch-off',
        on ? `switch-color-${on_color}` : `switch-color-${off_color}`,
        disabled ? 'switch-disabled' : '',
    ]);

    $: indicator_classes = mix_classes([
        'switch-indicator',
        on ? 'switch-indicator-on' : 'switch-indicator-off',
    ]);

    $: inactive_name_classes = mix_classes([
        'switch-name',
        on ? 'inactive_name-off' : 'inactive_name-on',
    ]);

    $: active_name_classes = mix_classes([
        'switch-name',
        on ? 'active_name-on' : 'active_name-off',
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
        if (!disabled) {
            value = handle_click(value, inactive_value, active_value, on);
        }
    }
</script>

<span class="lb__switch" on:click={ handleClick }>
    {#if show_name}
        <span class={ inactive_name_classes }>
            <slot name="inactive_name" />
        </span>
    {/if}
    <span class={ background_classes } >
        <span class={ indicator_classes }></span>
    </span>
    {#if show_name}
        <span class={ active_name_classes }>
            <slot name="active_name" />
        </span>
    {/if}
</span>

<style lang="scss">
    @import '../styles/main.scss';

    .lb__switch {
        display: inline-flex;
        margin-right: $gutter-normal;

        .lb__switch-name {
            @include span-button;
            padding-left: 5px;
            padding-right: 5px;
            transition: $transition-normal;

            &:hover { color: $blue; }
        }

        .lb__inactive_name-on, .lb__active_name-on {
            color: $blue7;
        }

        .lb__switch-background {
            @include v-center;
            @include span-button;

            $switch-height: $height-tiny;
            $switch-width: 40px;

            transition: $transition-long;

            height: $switch-height;
            width: $switch-width;

            position: relative;
            border-radius: $border-radius-round;

            @each $name, $val in $color-map {
                &.lb__switch-color-#{$name} {
                    background-color: $val;
                }
            }

            &.lb__switch-disabled {
                @include disabled;
                background-color: $c_grey1;
            }

            .lb__switch-indicator {
                $switch-indicator-margin: $gutter-tiny;
                $switch-indicator-size: $switch-height - $switch-indicator-margin * 2;

                transition: $transition-long;
                position: absolute;

                left: $switch-indicator-margin;
                &.lb__switch-indicator-on {
                    margin-left: $switch-width - 2 * $switch-indicator-margin - $switch-indicator-size;
                }

                height: $switch-indicator-size;
                width: $switch-indicator-size;

                background-color: $white;
                border-radius: $border-radius-round;
            }
        }
    }
</style>
