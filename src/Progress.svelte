<script>
    import * as colors from './color.ts';
    export let percent = 50;
    export let inner = true;
    export let outer = false;
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

<div class="progress-background" style={backgroundStyle}>
    <div class="progress-front" style={barStyle}>
        {#if inner}
            <span class="inner-display" style={fontStyle}>{ percent }%</span>
        {/if}
    </div>

    {#if outer}
        <span class="outer-display" style={fontStyle}>{ percent }%</span>
    {/if}
</div>

<style lang="scss">
    @import './variables.scss';

    .progress-background {
        z-index: $z-index2;

        border-radius: $border-radius-round;
        background-color: $grey1;

        margin-bottom: 10px;
    }
    
    .progress-front {
        z-index: $z-index3;
        border-radius: $border-radius-round;
        background-color: $green;

        transition: .5s;
        float: left;
    }

    .inner-display {
        z-index: $z-index4;

        color: $white;
        font-weight: 500;

        margin-right: 10px;
        float: right;
    }

    .outer-display {
        z-index: $z-index4;

        color: $grey8;
        font-weight: 500;

        margin-left: 5px;
        float: right;
        position: absolute;
    }
</style>