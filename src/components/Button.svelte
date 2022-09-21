<script>
    import { mix_classes, mix_styles } from '../scripts/utils.js';

    export let disabled = false;
    export let noborder = false;
    export let round = false;
    export let color = disabled ? '' : 'green';
    export let size = 'normal';
    export let height = '';
    export let width = '';
    export let no_margin = false;

    $: classes = mix_classes([
        'button',
        `button-${size}`,
        disabled ? '' : `button-${color}`,
        noborder ? `button-noborder` : '',
        round ? `button-round` : '',
        no_margin ? 'button-no-margin' : '',
    ]);

    $: styles = mix_styles([
        height === '' ? '' : `height: ${height}`,
        width === '' ? '' : `width: ${width}`,
    ]);
</script>

<button
    on:click
    {disabled}
    class={classes}
    style={styles}
>
    <slot />
</button>

<style lang="scss">
    @import '../styles/main.scss';

    @mixin inner-style($size) {
        @if $size == "tiny" {
            padding: 4px;
        } @else if $size == "small" {
            padding: 4px;
            min-height: 28px;
            min-width: 80px;
        } @else if $size == "normal" {
            padding: 6px 10px 6px 10px;
            min-height: 35px;
            min-width: 100px;
        } @else if $size == "large" {
            padding: 8px 14px 8px 14px;
            min-height: 45px;
            min-width: 120px;
        }
    }

    .lb__button {
        &.lb__button-no-margin {
            margin: 0;
        }
        margin-bottom: 10px;

        font-weight: 500;

        &.lb__button-round {
            border-radius: $border-radius-round;
            min-height: 34px !important;
            min-width: 34px !important;
        }
        border-radius: $border-radius-normal;

        outline: none;
        color: $white;
        cursor: pointer;
        transition: $transition-short;

        &.lb__button-noborder {
            border: none !important;
        }

        @each $name, $val in $basic-color-map {
            &.lb__button-#{$name} {
                background-color: $val;
            }
        }

        @each $size in (tiny, small, normal, large) {
            &.lb__button-#{$size} {
                @include inner-style($size);
            }
        }

        @each $name, $val in $basic-color-map {
            &.lb__button-#{$name} {
                border: $border-normal solid map-get($color-map, #{$name}#{map-get($basic-base-id, $name) - 1});
            }
        }

        &:hover {
            &.lb__button-noborder {
                @each $name, $val in $basic-color-map {
                    &.lb__button-#{$name} {
                        background-color: map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name}) - 1});
                    }
                }
            }

            @each $name, $val in $basic-color-map {
                &.lb__button-#{$name} {
                    background-color: map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name}) - 1});
                    border-color: map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name}) - 2});
                }
            }
        }

        &:active {
            &.lb__button-noborder {
                @each $name, $val in $basic-color-map {
                    &.lb__button-#{$name} {
                        background-color: $val;
                    }
                }
            }

            @each $name, $val in $basic-color-map {
                &.lb__button-#{$name} {
                    background-color: map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name})});
                    border-color: map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name}) - 1});
                }
            }
        }

        &:disabled {
            background-color: $grey2;

            &.lb__button-noborder {
                border: none !important;
            }

            @include disabled;
            border: $border-normal solid $grey1;
        }
    }
</style>
