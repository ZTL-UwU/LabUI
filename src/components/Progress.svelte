<script>
    import { mix_styles, mix_classes } from '../scripts/utils.js';

    export let type = 'normal';
    export let percent = 50;
    export let show_num = true;
    export let color = 'blue';
    export let vertical = false;
    export let length = vertical ? '200px' : '300px';
    export let size = 'normal';
    export let close_on_finish = true;

    $: percent = Math.max(Math.min(percent, 100), 0);
    $: progress_color = typeof(color) === 'function' ? color(percent) : color;

    const thickness = ({
        tiny: '2px',
        small: '5px',
        normal: '15px',
        large: '20px',
    })[size];

    const font_size = ({
        tiny: '0px',
        small: '0px',
        normal: '10px',
        large: '12px',
    })[size];

    $: background_style = mix_styles([
        vertical ? `height: ${length}` : `width: ${length}`,
        vertical ? `width: ${thickness}` : `height: ${thickness}`,
        (close_on_finish && type === 'loader' && percent == 100) ? 'display: none' : '',
        type === 'loader' ? 'background: transparent' : '',
    ]);

    $: background_classes = mix_classes([
        'progress-background',
        type === 'loader' ? 'progress-loader' : '',
    ]);

    $: bar_style = mix_styles([
        vertical ? `height: ${percent}%` : `width: ${percent}%`,
        vertical ? `width: ${thickness}` : `height: ${thickness}`,
        vertical ? `top: ${100 - percent}%` : '',
    ]);

    $: font_style = mix_styles([
        `font-size: ${font_size}`,
    ]);

    $: front_classes = mix_classes([
        'progress-front',
        vertical ? 'progress-front-vertical' : '',
        `progress-color-${progress_color}`
    ]);
</script>

<span class={ background_classes } style={ background_style }>
    <div class={ front_classes } style={ bar_style }>
        {#if show_num && type !== 'loader'}
            <div class="lb__progress-num">
                <span style={ font_style }>{ percent }{#if !vertical}%{/if}</span>
            </div>
        {/if}
    </div>
</span>

<style lang="scss">
    @import '../styles/main.scss';

    .lb__progress-background {
        display: inline-block;
        overflow: hidden;
        border-radius: $border-radius-round;
        background-color: $c_grey1;

        text-align: right;
        transition: $transition-long;

        .lb__progress-front {
            display: flex;
            line-height: 1;
            border-radius: $border-radius-round;

            transition: $transition-long;
            animation: $transition-animation slide-in-horizontal;

            @each $name, $val in $color-map {
                &.lb__progress-color-#{$name} {
                    background-color: $val;
                }
            }

            .lb__progress-num {
                @include v-center;
                user-select: none;
                margin-left: calc(100% - 1.9em);

                color: $white;
                font-weight: 500;
            }

            &.lb__progress-front-vertical {
                display: block;
                text-align: center;
                animation: none;
                position: relative;
                .lb__progress-num { margin: 0 !important; }
            }
        }
    }

    .lb__progress-loader {
        width: 100vw !important;

        position: fixed;
        top: 0;
        left: 0;

        z-index: $z-index7;
        transition: $transition-animation;
    }
</style>