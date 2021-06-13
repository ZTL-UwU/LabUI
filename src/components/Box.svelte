<script>
    import { mix_classes, mix_styles } from '../scripts/utils.js';
	import { fade } from 'svelte/transition';

    export let noheader = false;
    export let flat = true;
    export let width = '500px';
    export let folded = false;
    export let foldable = false;
    export let handle_fold = (old_state) => { return !old_state; };

    $: classes = mix_classes([
        'box',
        flat ? '' : 'box-3D',
    ]);

    $: styles = mix_styles([
        width === '' ? '' : `width: ${width}`,
    ]);

    $: header_classes = mix_classes([
        'box-header',
    ]);

    $: body_classes = mix_classes([
        'box-body',
        noheader ? '' : 'box-has-header',
    ]);

    const HandleFold = () => {
        folded = handle_fold(folded);
    };
</script>

<div
    class={ classes }
    style={ styles }
>
    {#if !noheader }
        <div class={ header_classes }>
            <slot name="header" />
            <span class="lb__box-header-suffix">
                <slot name="header-suffix" />
                {#if foldable }
                    <span on:click={ HandleFold }>
                        {#if folded }
                            <i class="ti ti-chevron-down"></i>
                        {:else}
                            <i class="ti ti-chevron-up"></i>
                        {/if}
                    </span>
                {/if}
            </span>
        </div>
    {/if}

    {#if !folded }
        <div class={ body_classes } transition:fade="{{ duration: 100 }}">
            <slot name="body" />
        </div>
    {/if}
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

            .lb__box-header-suffix {
                float: right;
            }
        }

        .lb__box-body {
            &.lb__box-has-header {
                border-top: $border-normal solid $border1;
            }
            padding: $box-inner-padding;
        }

        margin-bottom: $box-margin-bottom;
    }

    .lb__box-3D {
        @include border-bottom-huge($border1);
    }
</style>