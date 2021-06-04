<script>
    import { mix_classes, mix_styles } from '../scripts/utils.js';

    export let disabled = false;
    export let plain = false;
    export let flat = false;
    export let round = false;
    export let color = disabled ? '' : 'green';
    export let size = 'normal';
    export let height = '';
    export let width = '';
    export let no_margin = false;

    $: classes = mix_classes([
        'button',
        `button-${size}`,
        plain ? 'button-plain' : '',
        disabled ? '' : `button-${color}`,
        flat ? `button-flat` : '',
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
            min-height: $height-small;
            min-width: 80px;
        } @else if $size == "normal" {
            min-height: $height-normal;
            min-width: 100px;
        } @else if $size == "large" {
            min-height: $height-large;
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

        border: none;
        outline: none;
        color: $white;
        cursor: pointer;
        transition: $transition-short;

        &.lb__button-plain {
            color: $grey6;
            background-color: $transparent !important;

            &:disabled { @include border-normal($grey2); }
            @each $name, $val in $basic-color-map {
                &.lb__button-#{$name} {
                    @include border-normal(map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name}) - 4}));
                }
            }
        }

        &.lb__button-flat {
            box-shadow: none !important;
            transform: none !important;
        }

        @each $name, $val in $basic-color-map {
            &.lb__button-#{$name} {
                background-color: $val;
            }
        }

        $shadow-height: ("tiny": 4px, "small": 6px, "normal": 8px, "large": 10px);
        $plain-shadow-height-shift: ("tiny": 0px, "small": -2px, "normal": -2px, "large": -2px);

        @each $size in (tiny, small, normal, large) {
            &.lb__button-#{$size} {
                @include inner-style($size);
                &.lb__button-plain {
                    @each $name, $val in $basic-color-map {
                        &.lb__button-#{$name} {
                            @include height-shadow(
                                map-get($shadow-height, $size) + map-get($plain-shadow-height-shift, $size),
                                map-get($color-map, #{$name}#{map-get($basic-base-id, $name) - 3})
                            );
                        }
                    }
                }

                @each $name, $val in $basic-color-map {
                    &.lb__button-#{$name} {
                        @include height-shadow(
                            map-get($shadow-height, $size),
                            map-get($color-map, #{$name}#{map-get($basic-base-id, $name) + 1})
                        );
                    }
                }
            }
        }

        &:hover {
            border: none;

            &.lb__button-plain {
                &:disabled { @include border-normal($grey2); }
                @each $name, $val in $basic-color-map {
                    &.lb__button-#{$name} {
                        @include border-normal(map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name}) - 3}));
                    }
                }
            }

            &.lb__button-flat {
                @each $name, $val in $basic-color-map {
                    &.lb__button-#{$name} {
                        background-color: map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name}) - 1});
                    }
                }
            }

            @each $name, $val in $basic-color-map {
                &.lb__button-#{$name} {
                    background-color: map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name}) + 1});
                }
            }

            @each $size in (tiny, small, normal, large) {
                &.lb__button-#{$size} {
                    @include inner-style($size);
                    &.lb__button-plain {
                        @each $name, $val in $basic-color-map {
                            &.lb__button-#{$name} {
                                @include height-shadow(
                                    map-get($shadow-height, $size) + map-get($plain-shadow-height-shift, $size),
                                    map-get($color-map, #{$name}#{map-get($basic-base-id, $name) - 2})
                                );
                            }
                        }
                    }

                    @each $name, $val in $basic-color-map {
                        &.lb__button-#{$name} {
                            @include height-shadow(
                                map-get($shadow-height, $size),
                                map-get($color-map, #{$name}#{map-get($basic-base-id, $name) + 2})
                            );
                        }
                    }
                }
            }
        }

        &:active {
            transform: translateY(2px);

            &.lb__button-flat {
                @each $name, $val in $basic-color-map {
                    &.lb__button-#{$name} {
                        background-color: $val;
                    }
                }

                &.lb__button-plain {
                    @each $name, $val in $basic-color-map {
                        &.lb__button-#{$name} {
                            @include border-normal(map-get($color-map, #{$name}#{map-get($basic-base-id, #{$name}) - 2}));
                        }
                    }
                }
            }

            @each $size in (tiny, small, normal, large) {
                &.lb__button-#{$size} {
                    @include inner-style($size);
                    &.lb__button-plain {
                        @each $name, $val in $basic-color-map {
                            &.lb__button-#{$name} {
                                @include height-shadow(
                                    map-get($shadow-height, $size) + map-get($plain-shadow-height-shift, $size) - 2px,
                                    map-get($color-map, #{$name}#{map-get($basic-base-id, $name) - 2})
                                );
                            }
                        }
                    }

                    @each $name, $val in $basic-color-map {
                        &.lb__button-#{$name} {
                            @include height-shadow(
                                map-get($shadow-height, $size) - 2px,
                                map-get($color-map, #{$name}#{map-get($basic-base-id, $name) + 2})
                            );
                        }
                    }
                }
            }
        }

        &:disabled {
            background-color: $grey2;

            &.lb__button-plain {
                border-color: $grey2;
                @include height-shadow(6px, $grey3);
                &:hover { border-color: $grey2; }
            }
            &.lb__button-flat {
                box-shadow: none !important;
                transform: none !important;
            }

            &.lb__button-tiny { @include height-shadow(4px, $grey3); }
            &.lb__button-small { @include height-shadow(6px, $grey3); }
            &.lb__button-normal { @include height-shadow(8px, $grey3); }
            &.lb__button-large { @include height-shadow(10px, $grey3); }

            @include disabled;

            &:active { transform: none; }
        }
    }
</style>
