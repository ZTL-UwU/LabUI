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

    .lb__button {
        &.lb__button-no-margin {
            margin: 0;
        }
        margin-bottom: 10px;
        font-weight: 600;
        outline: none;

        &.lb__button-round {
            border-radius: $border-radius-round;
            min-height: 34px !important;
            min-width: 34px !important;
        }
        border-radius: $border-radius-normal;
        
        border: none;
        color: $white;
        cursor: pointer;
        transition: $transition-short;

        &.lb__button-plain {
            color: $grey6;

            background-color: $transparent !important;

            &:disabled { @include border-normal($grey2); }
            &.lb__button-blue { @include border-normal($blue2); }
            &.lb__button-green { @include border-normal($green2); }
            &.lb__button-yellow { @include border-normal($yellow1); }
            &.lb__button-grey { @include border-normal($grey1); }
            &.lb__button-red { @include border-normal($red2); }
        }

        &.lb__button-flat {
            box-shadow: none !important;
            transform: none !important;
        }

        &.lb__button-blue { background-color: $blue; }
        &.lb__button-green { background-color: $green; }
        &.lb__button-yellow { background-color: $yellow; }
        &.lb__button-grey { background-color: $grey; }
        &.lb__button-red { background-color: $red; }

        &.lb__button-tiny {
            padding: 4px;
            &.lb__button-plain {
                &.lb__button-blue { @include height-shadow(4px, $blue3); }
                &.lb__button-green { @include height-shadow(4px, $green3); }
                &.lb__button-yellow { @include height-shadow(4px, $yellow2); }
                &.lb__button-grey { @include height-shadow(4px, $grey2); }
                &.lb__button-red { @include height-shadow(4px, $red3); }
            }
            &.lb__button-blue { @include height-shadow(4px, $blue7); }
            &.lb__button-green { @include height-shadow(4px, $green7); }
            &.lb__button-yellow { @include height-shadow(4px, $yellow6); }
            &.lb__button-grey { @include height-shadow(4px, $grey6); }
            &.lb__button-red { @include height-shadow(4px, $red7); }
        }
        &.lb__button-small {
            min-height: $height-small;
            min-width: 80px;
            &.lb__button-plain {
                &.lb__button-blue { @include height-shadow(4px, $blue3); }
                &.lb__button-green { @include height-shadow(4px, $green3); }
                &.lb__button-yellow { @include height-shadow(4px, $yellow2); }
                &.lb__button-grey { @include height-shadow(4px, $grey2); }
                &.lb__button-red { @include height-shadow(4px, $red3); }
            }
            &.lb__button-blue { @include height-shadow(6px, $blue7); }
            &.lb__button-green { @include height-shadow(6px, $green7); }
            &.lb__button-yellow { @include height-shadow(6px, $yellow6); }
            &.lb__button-grey { @include height-shadow(6px, $grey6); }
            &.lb__button-red { @include height-shadow(6px, $red7); }
        }
        &.lb__button-normal {
            min-height: $height-normal;
            min-width: 100px;
            &.lb__button-plain {
                &.lb__button-blue { @include height-shadow(6px, $blue3); }
                &.lb__button-green { @include height-shadow(6px, $green3); }
                &.lb__button-yellow { @include height-shadow(6px, $yellow2); }
                &.lb__button-grey { @include height-shadow(6px, $grey2); }
                &.lb__button-red { @include height-shadow(6px, $red3); }
            }
            &.lb__button-green { @include height-shadow(8px, $green7); }
            &.lb__button-blue { @include height-shadow(8px, $blue7); }
            &.lb__button-yellow { @include height-shadow(8px, $yellow6); }
            &.lb__button-grey { @include height-shadow(8px, $grey6); }
            &.lb__button-red { @include height-shadow(8px, $red7); }
        }
        &.lb__button-large {
            min-height: $height-large;
            min-width: 120px;
            &.lb__button-plain {
                &.lb__button-blue { @include height-shadow(8px, $blue3); }
                &.lb__button-green { @include height-shadow(8px, $green3); }
                &.lb__button-yellow { @include height-shadow(8px, $yellow2); }
                &.lb__button-grey { @include height-shadow(8px, $grey2); }
                &.lb__button-red { @include height-shadow(8px, $red3); }
            }
            &.lb__button-blue { @include height-shadow(10px, $blue7); }
            &.lb__button-green { @include height-shadow(10px, $green7); }
            &.lb__button-yellow { @include height-shadow(10px, $yellow6); }
            &.lb__button-grey { @include height-shadow(10px, $grey6); }
            &.lb__button-red { @include height-shadow(10px, $red7); }
        }

        &:hover {
            border: none;

            &.lb__button-plain {
                &:disabled { @include border-normal($grey2); }
                &.lb__button-blue { @include border-normal($blue3); }
                &.lb__button-green { @include border-normal($green3); }
                &.lb__button-yellow { @include border-normal($yellow2); }
                &.lb__button-grey { @include border-normal($grey2); }
                &.lb__button-red { @include border-normal($red3); }
            }
            &.lb__button-flat {
                &.lb__button-blue { background-color: $blue5; }
                &.lb__button-green { background-color: $green5; }
                &.lb__button-yellow { background-color: $yellow4; }
                &.lb__button-grey { background-color: $grey4; }
                &.lb__button-red { background-color: $red5; }
            }
            &.lb__button-blue { background-color: $blue7; }
            &.lb__button-green { background-color: $green7; }
            &.lb__button-yellow { background-color: $yellow6; }
            &.lb__button-grey { background-color: $grey6; }
            &.lb__button-red { background-color: $red7; }

            &.lb__button-tiny {
                &.lb__button-plain {
                    &.lb__button-blue { @include height-shadow(4px, $blue4); }
                    &.lb__button-green { @include height-shadow(4px, $green4); }
                    &.lb__button-yellow { @include height-shadow(4px, $yellow3); }
                    &.lb__button-grey { @include height-shadow(4px, $grey3); }
                    &.lb__button-red { @include height-shadow(4px, $red4); }
                }
                &.lb__button-blue { @include height-shadow(4px, $blue8); }
                &.lb__button-green { @include height-shadow(4px, $green8); }
                &.lb__button-yellow { @include height-shadow(4px, $yellow7); }
                &.lb__button-grey { @include height-shadow(4px, $grey7); }
                &.lb__button-red { @include height-shadow(4px, $red8); }
            }
            &.lb__button-small {
                &.lb__button-plain {
                    &.lb__button-blue { @include height-shadow(4px, $blue4); }
                    &.lb__button-green { @include height-shadow(4px, $green4); }
                    &.lb__button-yellow { @include height-shadow(4px, $yellow3); }
                    &.lb__button-grey { @include height-shadow(4px, $grey3); }
                    &.lb__button-red { @include height-shadow(4px, $red4); }
                }
                &.lb__button-blue { @include height-shadow(6px, $blue8); }
                &.lb__button-green { @include height-shadow(6px, $green8); }
                &.lb__button-yellow { @include height-shadow(6px, $yellow7); }
                &.lb__button-grey { @include height-shadow(6px, $grey7); }
                &.lb__button-red { @include height-shadow(6px, $red8); }
            }
            &.lb__button-normal {
                &.lb__button-plain {
                    &.lb__button-blue { @include height-shadow(6px, $blue4); }
                    &.lb__button-green { @include height-shadow(6px, $green4); }
                    &.lb__button-yellow { @include height-shadow(6px, $yellow3); }
                    &.lb__button-grey { @include height-shadow(6px, $grey3); }
                    &.lb__button-red { @include height-shadow(6px, $red4); }
                }
                &.lb__button-blue { @include height-shadow(8px, $blue8); }
                &.lb__button-green { @include height-shadow(8px, $green8); }
                &.lb__button-yellow { @include height-shadow(8px, $yellow7); }
                &.lb__button-grey { @include height-shadow(8px, $grey7); }
                &.lb__button-red { @include height-shadow(8px, $red8); }
            }
            &.lb__button-large {
                &.lb__button-plain {
                    &.lb__button-blue { @include height-shadow(8px, $blue4); }
                    &.lb__button-green { @include height-shadow(8px, $green4); }
                    &.lb__button-yellow { @include height-shadow(8px, $yellow3); }
                    &.lb__button-grey { @include height-shadow(8px, $grey3); }
                    &.lb__button-red { @include height-shadow(8px, $red4); }
                }
                &.lb__button-blue { @include height-shadow(10px, $blue8); }
                &.lb__button-green { @include height-shadow(10px, $green8); }
                &.lb__button-yellow { @include height-shadow(10px, $yellow7); }
                &.lb__button-grey { @include height-shadow(10px, $grey7); }
                &.lb__button-red { @include height-shadow(10px, $red8); }
            }
        }

        &:active {
            transform: translateY(2px);

            &.lb__button-flat {
                &.lb__button-blue { background-color: $blue6; }
                &.lb__button-green { background-color: $green6; }
                &.lb__button-yellow { background-color: $yellow5; }
                &.lb__button-grey { background-color: $grey5; }
                &.lb__button-red { background-color: $red6; }
            }

            &.lb__button-tiny {
                &.lb__button-plain {
                    &.lb__button-blue { @include height-shadow(2px, $blue4); }
                    &.lb__button-green { @include height-shadow(2px, $green4); }
                    &.lb__button-yellow { @include height-shadow(2px, $yellow3); }
                    &.lb__button-grey { @include height-shadow(2px, $grey3); }
                    &.lb__button-red { @include height-shadow(2px, $red4); }
                }
                &.lb__button-blue { @include height-shadow(2px, $blue8); }
                &.lb__button-green { @include height-shadow(2px, $green8); }
                &.lb__button-yellow { @include height-shadow(2px, $yellow7); }
                &.lb__button-grey { @include height-shadow(2px, $grey7); }
                &.lb__button-red { @include height-shadow(2px, $red8); }
            }
            &.lb__button-small {
                &.lb__button-plain {
                    &.lb__button-blue { @include height-shadow(2px, $blue4); }
                    &.lb__button-green { @include height-shadow(2px, $green4); }
                    &.lb__button-yellow { @include height-shadow(2px, $yellow3); }
                    &.lb__button-grey { @include height-shadow(2px, $grey3); }
                    &.lb__button-red { @include height-shadow(2px, $red4); }
                }
                &.lb__button-blue { @include height-shadow(4px, $blue8); }
                &.lb__button-green { @include height-shadow(4px, $green8); }
                &.lb__button-yellow { @include height-shadow(4px, $yellow7); }
                &.lb__button-grey { @include height-shadow(4px, $grey7); }
                &.lb__button-red { @include height-shadow(4px, $red8); }
            }
            &.lb__button-normal {
                &.lb__button-plain {
                    &.lb__button-blue { @include height-shadow(4px, $blue4); }
                    &.lb__button-green { @include height-shadow(4px, $green4); }
                    &.lb__button-yellow { @include height-shadow(4px, $yellow3); }
                    &.lb__button-grey { @include height-shadow(4px, $grey3); }
                    &.lb__button-red { @include height-shadow(4px, $red4); }
                }
                &.lb__button-blue { @include height-shadow(6px, $blue8); }
                &.lb__button-green { @include height-shadow(6px, $green8); }
                &.lb__button-yellow { @include height-shadow(6px, $yellow7); }
                &.lb__button-grey { @include height-shadow(6px, $grey7); }
                &.lb__button-red { @include height-shadow(6px, $red8); }
            }
            &.lb__button-large {
                &.lb__button-plain {
                    &.lb__button-blue { @include height-shadow(6px, $blue4); }
                    &.lb__button-green { @include height-shadow(6px, $green4); }
                    &.lb__button-yellow { @include height-shadow(6px, $yellow3); }
                    &.lb__button-grey { @include height-shadow(6px, $grey3); }
                    &.lb__button-red { @include height-shadow(6px, $red4); }
                }
                &.lb__button-blue { @include height-shadow(8px, $blue8); }
                &.lb__button-green { @include height-shadow(8px, $green8); }
                &.lb__button-yellow { @include height-shadow(8px, $yellow7); }
                &.lb__button-grey { @include height-shadow(8px, $grey7); }
                &.lb__button-red { @include height-shadow(8px, $red8); }
            }
        }

        &:disabled {
            background-color: $grey2;

            &.lb__button-plain {
                border-color: $grey2;
                @include height-shadow(6px, $grey3 !important);
                &:hover { border-color: $grey2; }
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
