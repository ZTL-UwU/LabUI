<script>
    import * as colors from '../scripts/color.ts';

    export let percent = 50;
    export let show_num = true;
    export let color = colors.blue;
    export let width = '300px';
    export let size = 'normal';

    $: percent = Math.max(Math.min(percent, 100), 0);
    $: progress_color = typeof(color) === 'function' ? color(percent) : color;
    $: height = ({
        small: '5px',
        normal: '15px',
        large: '20px',
    })[size];
    $: font_size = ({
        small: '0px',
        normal: '10px',
        large: '12px',
    })[size];

    $: backgroundStyle = `width: ${width}; height: ${height};`;
    $: barStyle = `width: calc(${width} * ${percent} / 100); height: ${height}; background-color: ${progress_color};`;
    $: fontStyle = `font-size: ${font_size};`;
</script>

<div class="lb__progress-background" style={backgroundStyle}>
    <div class="lb__progress-front" style={barStyle}>
        {#if show_num}
            <div class="lb__progress-num">
                <span style={fontStyle}>{ percent }%</span>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    @import '../styles/variables.scss';

    .lb__progress-background {
        border-radius: $border-radius-round;
        background-color: $c_grey1;

        margin-bottom: 10px;
        text-align: right;
    }

    .lb__progress-front {
        line-height: 1;
        border-radius: $border-radius-round;
        background-color: $green;

        transition: .5s;
    }

    .lb__progress-num {
        @include v-center;

        color: $white;
        font-weight: 500;

        margin-right: 10px;
    }
</style>