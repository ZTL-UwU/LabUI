<script lang="typescript">
    import { mix_classes, mix_styles } from '../scripts/utils.ts';

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
    @import '../styles/variables.scss';

    .lb__box {
        border-radius: $border-radius-large;
        @include border-normal($border1);

        background-color: $white;

        .lb__box-header {
            padding: 15px;

            border-bottom: $border-normal solid $border1;
        }

        .lb__box-body {
            padding: 15px;
        }

        margin-bottom: 10px;
    }

    .lb__box-3D {
        border-bottom: 5px solid $border1;
    }
</style>