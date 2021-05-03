<script lang="typescript">
    export let disabled = false;
    export let color = disabled ? '' : 'green';
    export let size = 'normal';
    export let height = '';
    export let width = '';

    $: classes = `button button-${size} button-${color}`;
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

        border: none;
        border-radius: $border-radius-normal;

        color: $white;
        &.button-blue { background-color: $blue; }
        &.button-green { background-color: $green; }
        &.button-yellow { background-color: $yellow; }
        &.button-grey { background-color: $grey; }
        &.button-red { background-color: $red; }

        &.button-small {
            min-height: 24px;
            min-width: 80px;
            &.button-blue { @include button-shadow(6px, $blue7); }
            &.button-green { @include button-shadow(6px, $green7); }
            &.button-yellow { @include button-shadow(6px, $yellow6); }
            &.button-grey { @include button-shadow(6px, $grey6); }
            &.button-red { @include button-shadow(6px, $red7); }
        }
        &.button-normal {
            min-height: 30px;
            min-width: 100px;
            &.button-green { @include button-shadow(8px, $green7); }
            &.button-blue { @include button-shadow(8px, $blue7); }
            &.button-yellow { @include button-shadow(8px, $yellow6); }
            &.button-grey { @include button-shadow(8px, $grey6); }
            &.button-red { @include button-shadow(8px, $red7); }
        }
        &.button-large {
            min-height: 40px;
            min-width: 120px;
            &.button-blue { @include button-shadow(10px, $blue7); }
            &.button-green { @include button-shadow(10px, $green7); }
            &.button-yellow { @include button-shadow(10px, $yellow6); }
            &.button-grey { @include button-shadow(10px, $grey6); }
            &.button-red { @include button-shadow(10px, $red7); }
        }

        cursor: pointer;

        &:hover {
            &.button-blue { background-color: $blue7; }
            &.button-green { background-color: $green7; }
            &.button-yellow { background-color: $yellow6; }
            &.button-grey { background-color: $grey6; }
            &.button-red { background-color: $red7; }

            &.button-small {
                &.button-blue { @include button-shadow(6px, $blue8); }
                &.button-green { @include button-shadow(6px, $green8); }
                &.button-yellow { @include button-shadow(6px, $yellow7); }
                &.button-grey { @include button-shadow(6px, $grey7); }
                &.button-red { @include button-shadow(6px, $red8); }
            }
            &.button-normal {
                &.button-blue { @include button-shadow(8px, $blue8); }
                &.button-green { @include button-shadow(8px, $green8); }
                &.button-yellow { @include button-shadow(8px, $yellow7); }
                &.button-grey { @include button-shadow(8px, $grey7); }
                &.button-red { @include button-shadow(8px, $red8); }
            }
            &.button-large {
                &.button-blue { @include button-shadow(10px, $blue8); }
                &.button-green { @include button-shadow(10px, $green8); }
                &.button-yellow { @include button-shadow(10px, $yellow7); }
                &.button-grey { @include button-shadow(10px, $grey7); }
                &.button-red { @include button-shadow(10px, $red8); }
            }
        }

        &:active {
            transform: translateY(2px);
            &.button-small { 
                &.button-blue { @include button-shadow(4px, $blue8); }
                &.button-green { @include button-shadow(4px, $green8); }
                &.button-yellow { @include button-shadow(4px, $yellow7); }
                &.button-grey { @include button-shadow(4px, $grey7); }
                &.button-red { @include button-shadow(4px, $red8); }
            }
            &.button-normal {
                &.button-blue { @include button-shadow(6px, $blue8); }
                &.button-green { @include button-shadow(6px, $green8); }
                &.button-yellow { @include button-shadow(6px, $yellow7); }
                &.button-grey { @include button-shadow(6px, $grey7); }
                &.button-red { @include button-shadow(6px, $red8); }
            }
            &.button-large {
                &.button-blue { @include button-shadow(8px, $blue8); }
                &.button-green { @include button-shadow(8px, $green8); }
                &.button-yellow { @include button-shadow(8px, $yellow7); }
                &.button-grey { @include button-shadow(8px, $grey7); }
                &.button-red { @include button-shadow(8px, $red8); }
            }
        }

        &:disabled {
            background-color: $grey2;

            &.button-small { @include button-shadow(6px, $grey3); }
            &.button-normal { @include button-shadow(8px, $grey3); }
            &.button-large { @include button-shadow(10px, $grey3); }

            cursor: not-allowed;

            &:active { transform: none; }
        }
    }
</style>
