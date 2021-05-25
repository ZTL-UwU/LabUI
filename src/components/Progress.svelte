<script>
    import {  mix_styles, mix_classes } from '../scripts/utils.js';
    import * as colors from '../scripts/color.js';

    export let percent = 50;
    export let show_num = true;
    export let color = colors.blue;
    export let vertical = false;
    export let length = vertical ? '200px' : '300px';
    export let size = 'normal';

    $: percent = Math.max(Math.min(percent, 100), 0);
    $: progress_color = typeof(color) === 'function' ? color(percent) : color;

    const thickness = ({
        small: '5px',
        normal: '15px',
        large: '20px',
    })[size];

    const font_size = ({
        small: '0px',
        normal: '10px',
        large: '12px',
    })[size];

    $: backgroundStyle = mix_styles([
        vertical ? `height: ${length}` : `width: ${length}`,
        vertical ? `width: ${thickness}` : `height: ${thickness}`,
    ]);

    $: barStyle = mix_styles([
        vertical ? `height: ${percent}%` : `width: ${percent}%`,
        vertical ? `width: ${thickness}` : `height: ${thickness}`,
        `background-color: ${progress_color}`,
    ]);

    $: fontStyle = mix_styles([
        `font-size: ${font_size}`,
    ]);

    $: front_classes = mix_classes([
        'progress-front',
        vertical ? 'progress-front-vertical' : '',
    ]);
</script>

<div class="lb__progress-background" style={ backgroundStyle }>
    <div class={ front_classes } style={ barStyle }>
        {#if show_num}
            <div class="lb__progress-num">
                <span style={ fontStyle }>{ percent }%</span>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    @import '../styles/main.scss';

    .lb__progress-background {
        border-radius: $border-radius-round;
        background-color: $c_grey1;

        margin-bottom: $gap-tiny;
        text-align: right;

        .lb__progress-front {
            line-height: 1;
            border-radius: $border-radius-round;
            background-color: $green;

            transition: $transition-long;
            animation: $transition-animation slide-in-horizontal;
            &.lb__progress-front-vertical {
                animation: $transition-animation slide-in-vertical;
            }

            .lb__progress-num {
                @include v-center;
                user-select: none;

                color: $white;
                font-weight: 500;

                margin-right: $gap-tiny;
            }
        }
    }
</style>