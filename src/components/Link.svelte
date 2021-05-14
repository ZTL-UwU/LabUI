<script lang="typescript">
    import { mix_classes, mix_styles } from '../scripts/utils.ts';

    export let href = null;
    export let underline = 'hover';
    export let disabled = false;
    export let color = 'blue';
    if (disabled) { href = null; }

    $: classes = mix_classes([
        'link',
        underline === 'always' ? 'link-underline-always' : '',
        underline === 'never' ? 'link-underline-never' : '',
        disabled ? `link-disabled` : '',
        disabled ? '' : `link-${color}`,
    ]);
</script>

<a
    on:click
    {href}
    {disabled}
    class={classes}
>
    <slot />
</a>

<style lang="scss">
    @import '../styles/variables.scss';

    .lb__link {
        cursor: pointer;

        &.lb__link-blue { color: $blue6; }
        &.lb__link-green { color: $green6; }
        &.lb__link-yellow { color: $yellow5; }
        &.lb__link-red { color: $red6; }
        &.lb__link-grey { color: $grey5; }

        &.lb__link-disabled {
            @include disabled;
            color: $c_grey2;
        }

        transition: color $transition-normal;
        text-decoration: none;

        border-bottom: $border-tiny solid $transparent;
        &.lb__link-underline-never {
            border-bottom-color: $transparent !important;
        }
        &.lb__link-underline-always {
            &.lb__link-blue { border-color: $blue6; }
            &.lb__link-green { border-color: $green6; }
            &.lb__link-yellow { border-color: $yellow5; }
            &.lb__link-red { border-color: $red6; }
            &.lb__link-grey { border-color: $grey5; }
        }

        &:hover {
            &.lb__link-blue { border-color: $blue7; }
            &.lb__link-green { border-color: $green7; }
            &.lb__link-yellow { border-color: $yellow6; }
            &.lb__link-red { border-color: $red7; }
            &.lb__link-grey { border-color: $grey6; }

            &.lb__link-blue { color: $blue7; }
            &.lb__link-green { color: $green7; }
            &.lb__link-yellow { color: $yellow6; }
            &.lb__link-red { color: $red7; }
            &.lb__link-grey { color: $grey6; }
        }
        &:active {
            &.lb__link-blue { border-color: $blue8; }
            &.lb__link-green { border-color: $green8; }
            &.lb__link-yellow { border-color: $yellow7; }
            &.lb__link-red { border-color: $red8; }
            &.lb__link-grey { border-color: $grey7; }

            &.lb__link-blue { color: $blue8; }
            &.lb__link-green { color: $green8; }
            &.lb__link-yellow { color: $yellow7; }
            &.lb__link-red { color: $red8; }
            &.lb__link-grey { color: $grey7; }
        }
    }
</style>
