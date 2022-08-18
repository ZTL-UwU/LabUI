<script>
    import { mix_classes } from '../scripts/utils';

    export let color = 'white3';
    export let href = null;

    $: classes = mix_classes([
        'tag-container',
        `tag-${color}`,
        href ? 'clickable' : '',
    ]);
</script>

<a href={href}>
    <span class={classes}>
        <slot name="icon" />
        <slot name="text" />
    </span>
</a>
    
<style lang="scss">
    @import '../styles/main.scss';

    .lb__tag-container {
        display: inline-block;
        padding: 7px 13px 7px 13px;
        height: 17px;
        border-radius: $border-radius-large;
        font-weight: 500;
        font-size: 14px;
        margin: 2px;
    }

    .lb__tag-clickable {
        @include span-button;
    }

    @each $name, $val in $color-map {
        .lb__tag-#{$name} {
            background: $val;
        }
    }

    @each $name, $val in $font-color-map {
        .lb__tag-#{$name} {
            color: $val;
        }
    }
</style>