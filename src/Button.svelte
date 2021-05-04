<script lang="typescript">
    export let disabled = false;
    export let plain = false;
    export let ghost = false;
    export let color = disabled ? '' : 'green';
    export let size = 'normal';
    export let height = '';
    export let width = '';

    $: button_plain = plain ? 'button-plain' : '';
    $: button_ghost = ghost ? 'button-ghost' : '';
    $: button_color = disabled ? '' : `button-${color}`;

    $: classes = `button button-${size} ${button_color} ${button_plain} ${button_ghost}`;
    let height_style: string = height === '' ? '' : `height: ${height};`
    let width_style: string = width === '' ? '' : `width: ${width};`;
    $: styles = height_style + width_style;
</script>

<button
    {disabled}
    class={classes}
    style={styles}
>
    <slot />
</button>

<style lang="scss">
    @import './variables.scss';

    .button {
        font-weight: 800;

        border-radius: $border-radius-normal;
        
        border: none;
        color: $white;
        cursor: pointer;
        transition: 0.05s;

        &.button-plain {
            color: $grey6;
            background-color: $transparent !important;

            &:disabled { border: 3px solid $grey2; }
            &.button-blue { border: 3px solid $blue2; }
            &.button-green { border: 3px solid $green2; }
            &.button-yellow { border: 3px solid $yellow1; }
            &.button-grey { border: 3px solid $grey1; }
            &.button-red { border: 3px solid $red2; }
        }
        &.button-blue { background-color: $blue; }
        &.button-green { background-color: $green; }
        &.button-yellow { background-color: $yellow; }
        &.button-grey { background-color: $grey; }
        &.button-red { background-color: $red; }

        &.button-tiny {
            padding: 2px;
            &.button-plain {
                &.button-blue { @include button-shadow(4px, $blue3); }
                &.button-green { @include button-shadow(4px, $green3); }
                &.button-yellow { @include button-shadow(4px, $yellow2); }
                &.button-grey { @include button-shadow(4px, $grey2); }
                &.button-red { @include button-shadow(4px, $red3); }
            }
            &.button-ghost {
                color: $grey6;
                background-color: $transparent !important;
                border: 3px solid $transparent;
                box-shadow: none;
                &.button-green { box-shadow: none; };
                &.button-blue { box-shadow: none; };
                &.button-yellow { box-shadow: none; };
                &.button-grey { box-shadow: none; };
                &.button-red { box-shadow: none; };
            }
            &.button-blue { @include button-shadow(4px, $blue7); }
            &.button-green { @include button-shadow(4px, $green7); }
            &.button-yellow { @include button-shadow(4px, $yellow6); }
            &.button-grey { @include button-shadow(4px, $grey6); }
            &.button-red { @include button-shadow(4px, $red7); }
        }
        &.button-small {
            min-height: 24px;
            min-width: 80px;
            &.button-plain {
                &.button-blue { @include button-shadow(4px, $blue3); }
                &.button-green { @include button-shadow(4px, $green3); }
                &.button-yellow { @include button-shadow(4px, $yellow2); }
                &.button-grey { @include button-shadow(4px, $grey2); }
                &.button-red { @include button-shadow(4px, $red3); }
            }
            &.button-ghost {
                color: $grey6;
                background-color: $transparent !important;
                border: none;
                box-shadow: none;
                &.button-green { box-shadow: none; };
                &.button-blue { box-shadow: none; };
                &.button-yellow { box-shadow: none; };
                &.button-grey { box-shadow: none; };
                &.button-red { box-shadow: none; };
            }
            &.button-blue { @include button-shadow(6px, $blue7); }
            &.button-green { @include button-shadow(6px, $green7); }
            &.button-yellow { @include button-shadow(6px, $yellow6); }
            &.button-grey { @include button-shadow(6px, $grey6); }
            &.button-red { @include button-shadow(6px, $red7); }
        }
        &.button-normal {
            min-height: 30px;
            min-width: 100px;
            &.button-plain {
                &.button-blue { @include button-shadow(6px, $blue3); }
                &.button-green { @include button-shadow(6px, $green3); }
                &.button-yellow { @include button-shadow(6px, $yellow2); }
                &.button-grey { @include button-shadow(6px, $grey2); }
                &.button-red { @include button-shadow(6px, $red3); }
            }
            &.button-ghost {
                color: $grey6;
                background-color: $transparent !important;
                border: none;
                box-shadow: none;
                &.button-green { box-shadow: none; };
                &.button-blue { box-shadow: none; };
                &.button-yellow { box-shadow: none; };
                &.button-grey { box-shadow: none; };
                &.button-red { box-shadow: none; };
            }
            &.button-green { @include button-shadow(8px, $green7); }
            &.button-blue { @include button-shadow(8px, $blue7); }
            &.button-yellow { @include button-shadow(8px, $yellow6); }
            &.button-grey { @include button-shadow(8px, $grey6); }
            &.button-red { @include button-shadow(8px, $red7); }
        }
        &.button-large {
            min-height: 40px;
            min-width: 120px;
            &.button-plain {
                &.button-blue { @include button-shadow(8px, $blue3); }
                &.button-green { @include button-shadow(8px, $green3); }
                &.button-yellow { @include button-shadow(8px, $yellow2); }
                &.button-grey { @include button-shadow(8px, $grey2); }
                &.button-red { @include button-shadow(8px, $red3); }
            }
            &.button-ghost {
                color: $grey6;
                background-color: $transparent !important;
                border: none;
                box-shadow: none;
                &.button-green { box-shadow: none; };
                &.button-blue { box-shadow: none; };
                &.button-yellow { box-shadow: none; };
                &.button-grey { box-shadow: none; };
                &.button-red { box-shadow: none; };
            }
            &.button-blue { @include button-shadow(10px, $blue7); }
            &.button-green { @include button-shadow(10px, $green7); }
            &.button-yellow { @include button-shadow(10px, $yellow6); }
            &.button-grey { @include button-shadow(10px, $grey6); }
            &.button-red { @include button-shadow(10px, $red7); }
        }

        &:hover {
            border: none;

            &.button-plain, &.button-ghost {
                &:disabled { border: 3px solid $grey2; }
                &.button-blue { border: 3px solid $blue3; }
                &.button-green { border: 3px solid $green3; }
                &.button-yellow { border: 3px solid $yellow2; }
                &.button-grey { border: 3px solid $grey2; }
                &.button-red { border: 3px solid $red3; }
            }
            &.button-blue { background-color: $blue7; }
            &.button-green { background-color: $green7; }
            &.button-yellow { background-color: $yellow6; }
            &.button-grey { background-color: $grey6; }
            &.button-red { background-color: $red7; }

            &.button-tiny {
                &.button-plain, &.button-ghost {
                    &.button-blue { @include button-shadow(4px, $blue4); }
                    &.button-green { @include button-shadow(4px, $green4); }
                    &.button-yellow { @include button-shadow(4px, $yellow3); }
                    &.button-grey { @include button-shadow(4px, $grey3); }
                    &.button-red { @include button-shadow(4px, $red4); }
                }
                &.button-blue { @include button-shadow(4px, $blue8); }
                &.button-green { @include button-shadow(4px, $green8); }
                &.button-yellow { @include button-shadow(4px, $yellow7); }
                &.button-grey { @include button-shadow(4px, $grey7); }
                &.button-red { @include button-shadow(4px, $red8); }
            }
            &.button-small {
                &.button-plain, &.button-ghost {
                    &.button-blue { @include button-shadow(4px, $blue4); }
                    &.button-green { @include button-shadow(4px, $green4); }
                    &.button-yellow { @include button-shadow(4px, $yellow3); }
                    &.button-grey { @include button-shadow(4px, $grey3); }
                    &.button-red { @include button-shadow(4px, $red4); }
                }
                &.button-blue { @include button-shadow(6px, $blue8); }
                &.button-green { @include button-shadow(6px, $green8); }
                &.button-yellow { @include button-shadow(6px, $yellow7); }
                &.button-grey { @include button-shadow(6px, $grey7); }
                &.button-red { @include button-shadow(6px, $red8); }
            }
            &.button-normal {
                &.button-plain, &.button-ghost {
                    &.button-blue { @include button-shadow(6px, $blue4); }
                    &.button-green { @include button-shadow(6px, $green4); }
                    &.button-yellow { @include button-shadow(6px, $yellow3); }
                    &.button-grey { @include button-shadow(6px, $grey3); }
                    &.button-red { @include button-shadow(6px, $red4); }
                }
                &.button-blue { @include button-shadow(8px, $blue8); }
                &.button-green { @include button-shadow(8px, $green8); }
                &.button-yellow { @include button-shadow(8px, $yellow7); }
                &.button-grey { @include button-shadow(8px, $grey7); }
                &.button-red { @include button-shadow(8px, $red8); }
            }
            &.button-large {
                &.button-plain, &.button-ghost {
                    &.button-blue { @include button-shadow(8px, $blue4); }
                    &.button-green { @include button-shadow(8px, $green4); }
                    &.button-yellow { @include button-shadow(8px, $yellow3); }
                    &.button-grey { @include button-shadow(8px, $grey3); }
                    &.button-red { @include button-shadow(8px, $red4); }
                }
                &.button-blue { @include button-shadow(10px, $blue8); }
                &.button-green { @include button-shadow(10px, $green8); }
                &.button-yellow { @include button-shadow(10px, $yellow7); }
                &.button-grey { @include button-shadow(10px, $grey7); }
                &.button-red { @include button-shadow(10px, $red8); }
            }
        }

        &:active {
            transform: translateY(2px);

            &.button-tiny {
                &.button-plain, &.button-ghost {
                    &.button-blue { @include button-shadow(2px, $blue4); }
                    &.button-green { @include button-shadow(2px, $green4); }
                    &.button-yellow { @include button-shadow(2px, $yellow3); }
                    &.button-grey { @include button-shadow(2px, $grey3); }
                    &.button-red { @include button-shadow(2px, $red4); }
                }
                &.button-blue { @include button-shadow(2px, $blue8); }
                &.button-green { @include button-shadow(2px, $green8); }
                &.button-yellow { @include button-shadow(2px, $yellow7); }
                &.button-grey { @include button-shadow(2px, $grey7); }
                &.button-red { @include button-shadow(2px, $red8); }
            }
            &.button-small {
                &.button-plain, &.button-ghost {
                    &.button-blue { @include button-shadow(2px, $blue4); }
                    &.button-green { @include button-shadow(2px, $green4); }
                    &.button-yellow { @include button-shadow(2px, $yellow3); }
                    &.button-grey { @include button-shadow(2px, $grey3); }
                    &.button-red { @include button-shadow(2px, $red4); }
                }
                &.button-blue { @include button-shadow(4px, $blue8); }
                &.button-green { @include button-shadow(4px, $green8); }
                &.button-yellow { @include button-shadow(4px, $yellow7); }
                &.button-grey { @include button-shadow(4px, $grey7); }
                &.button-red { @include button-shadow(4px, $red8); }
            }
            &.button-normal {
                &.button-plain, &.button-ghost {
                    &.button-blue { @include button-shadow(4px, $blue4); }
                    &.button-green { @include button-shadow(4px, $green4); }
                    &.button-yellow { @include button-shadow(4px, $yellow3); }
                    &.button-grey { @include button-shadow(4px, $grey3); }
                    &.button-red { @include button-shadow(4px, $red4); }
                }
                &.button-blue { @include button-shadow(6px, $blue8); }
                &.button-green { @include button-shadow(6px, $green8); }
                &.button-yellow { @include button-shadow(6px, $yellow7); }
                &.button-grey { @include button-shadow(6px, $grey7); }
                &.button-red { @include button-shadow(6px, $red8); }
            }
            &.button-large {
                &.button-plain, &.button-ghost {
                    &.button-blue { @include button-shadow(6px, $blue4); }
                    &.button-green { @include button-shadow(6px, $green4); }
                    &.button-yellow { @include button-shadow(6px, $yellow3); }
                    &.button-grey { @include button-shadow(6px, $grey3); }
                    &.button-red { @include button-shadow(6px, $red4); }
                }
                &.button-blue { @include button-shadow(8px, $blue8); }
                &.button-green { @include button-shadow(8px, $green8); }
                &.button-yellow { @include button-shadow(8px, $yellow7); }
                &.button-grey { @include button-shadow(8px, $grey7); }
                &.button-red { @include button-shadow(8px, $red8); }
            }
        }

        &:disabled {
            background-color: $grey2;

            &.button-plain {
                border-color: $grey2;
                @include button-shadow(6px, $grey3 !important);
                &:hover { border-color: $grey2; }
            }
            &.button-tiny { @include button-shadow(4px, $grey3); }
            &.button-small { @include button-shadow(6px, $grey3); }
            &.button-normal { @include button-shadow(8px, $grey3); }
            &.button-large { @include button-shadow(10px, $grey3); }

            cursor: not-allowed;

            &:active { transform: none; }
        }
    }
</style>
