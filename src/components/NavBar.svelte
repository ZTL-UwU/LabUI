<script>
    import { mix_styles, mix_classes } from '../scripts/utils.js';

    export let size = 'normal';
    export let position = 'sticky';
    export let color = 'white';

    const height = ({
        tiny: '45px',
        small: '55px',
        normal: '65px',
        large: '80px',
    })[size];

    $: container_style = mix_styles([
        `height: ${height}`,
        `position: ${position}`,
    ]);

    $: container_class = mix_classes([
        'nav-container',
        `nav-${color}`,
        `nav-${size}`,
    ]);
</script>

<div class={container_class} style={container_style}>

</div>

<style lang="scss">
    @import '../styles/main.scss';

    .lb__nav-container {
        z-index: $z-index7;
        width: 100vw;
        top: 0;
        left: 0;
    }

    $shadow-height: ("tiny": 5px, "small": 7px, "normal": 8px, "large": 10px);
    @each $size in (tiny, small, normal, large) {
        .lb__nav-#{$size} {
            @each $name, $val in $basic-color-map {
                &.lb__nav-#{$name} {
                    background: $val;
                    @include height-shadow(
                        map-get($shadow-height, $size),
                        map-get($color-map, #{$name}#{map-get($basic-base-id, $name) + 1})
                    );
                }
            }
        }
    }

    .lb__nav-white {
        @include border-bottom-normal($border1);
        background: $white3;
    }
</style>