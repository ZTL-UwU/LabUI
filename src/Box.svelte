<script lang="typescript">
    export let noheader = false;
    export let flat = true;
    export let width = '500px';

    $: box_3D = flat ? '' : 'box-3D';
    $: classes = `box ${box_3D}`;
    let width_style: string = width === '' ? '' : `width: ${width};`;
    $: styles = width_style;
</script>

<div
    class={classes}
    style={styles}
>
    {#if !noheader}
        <div class="box-header">
            <slot name="header" />
        </div>
    {/if}
    <div class="box-body">
        <slot name="body" />
    </div>
</div>

<style lang="scss">
    @import './variables.scss';

    .box {
        border-radius: $border-radius-normal;
        @include border-normal($border1);

        background-color: $white;

        .box-header {
            padding: 15px;

            border-bottom: $border-normal solid $border1;
        }

        .box-body {
            padding: 15px;
        }

        margin-bottom: 10px;
    }

    .box-3D {
        border-bottom: 5px solid $border1;
    }
</style>