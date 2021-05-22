<script>
    import { mix_classes, mix_styles } from '../scripts/utils.js';

    export let noheader = false;
    export let flat = true;
    export let width = '500px';

    $: classes = mix_classes([
        'box',
        flat ? '' : 'box-3D',
    ]);

    $: styles = mix_styles([
        width === '' ? '' : `width: ${width}`,
    ]);
</script>

<div
    class={classes}
    style={styles}
>
    {#if !noheader}
        <div class="lb__box-header">
            <slot name="header" />
        </div>
    {/if}
    <div class="lb__box-body">
        <slot name="body" />
    </div>
</div>

<style lang="scss">
    @import '../styles/main.scss';

    .lb__box {
        $box-inner-padding: 15px;
        $box-margin-bottom: 10px;

        border-radius: $border-radius-large;
        @include border-normal($border1);

        background-color: $white;

        .lb__box-header {
            @include title1;
            padding: $box-inner-padding;

            @include border-bottom-normal($border1);
        }

        .lb__box-body {
            padding: $box-inner-padding;
        }

        margin-bottom: $box-margin-bottom;
    }

    .lb__box-3D {
        @include border-bottom-huge($border1);
    }
</style>