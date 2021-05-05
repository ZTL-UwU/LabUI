<script lang="typescript">
    export let noheader = false;
    export let flat = true;
    export let width = '500px';

    $: box_3D = flat ? '' : 'lb__box-3D';
    $: classes = `lb__box ${box_3D}`;
    let width_style: string = width === '' ? '' : `width: ${width};`;
    $: styles = width_style;
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
    @import './variables.scss';

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