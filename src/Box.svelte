<script lang="typescript">
    export let noheader = false;
</script>

<div class="box">
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

        width: 500px;
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
</style>