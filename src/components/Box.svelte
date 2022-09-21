<script>
    import { mix_classes, mix_styles } from '../scripts/utils.js';
	import { fade } from 'svelte/transition';

    export let no_header = false;
    export let has_suffix = false;
    export let show = true;
    export let width = '500px';
    export let folded = false;
    export let foldable = false;
    export let closable = false;
    export let handle_fold = (old_state) => { return !old_state; };
    export let handle_close = (old_state) => { return !old_state; };

    $: classes = mix_classes([
        'box',
    ]);

    $: styles = mix_styles([
        width === '' ? '' : `width: ${width}`,
    ]);

    $: header_classes = mix_classes([
        'box-header',
    ]);

    $: body_classes = mix_classes([
        'box-body',
        no_header ? '' : 'box-has-header',
    ]);

    const HandleFold = () => {
        folded = handle_fold(folded);
    };

    const HandleClose = () => {
        show = handle_close(show);
    };
</script>

{#if show }
<div
    class={ classes }
    style={ styles }
    transition:fade="{{ duration: 100 }}"
>
    {#if !no_header }
        <div class={ header_classes }>
            <slot name="header" />
            <span class="lb__box-header-suffix">
                <slot name="header-suffix" />
                {#if foldable }
                    <span on:click={ HandleFold } class="lb__box-header-suffix-fold-button">
                        {#if folded }
                            <i class="ti ti-chevron-down"></i>
                        {:else}
                            <i class="ti ti-chevron-up"></i>
                        {/if}
                    </span>
                {/if}

                {#if closable }
                    <span on:click={ HandleClose } class="lb__box-header-suffix-close-button">
                        <i class="ti ti-x"></i>
                    </span>
                {/if}
            </span>
        </div>
    {/if}

    {#if !folded }
        <div class={ body_classes } transition:fade="{{ duration: 100 }}">
            <slot name="body" />
        </div>

        {#if has_suffix}
            <div class="lb__box-suffix" transition:fade="{{ duration: 100 }}">
                <slot name="suffix" />
            </div>
        {/if}
    {/if}
</div>
{/if}

<style lang="scss">
    @import '../styles/main.scss';

    .lb__box {
        max-width: 100%;
        $box-inner-padding: 15px;
        $box-inner-padding-small: 10px;
        $box-margin-bottom: 10px;

        border-radius: $border-radius-large;
        @include border-normal($border1);

        background-color: $white;

        .lb__box-header {
            @include title1;
            color: $c_grey4;
            padding: $box-inner-padding;
            position: relative;

            .lb__box-header-suffix {
                position: absolute;
                right: $box-inner-padding;
                top: $box-inner-padding;

                .lb__box-header-suffix-fold-button,
                .lb__box-header-suffix-close-button {
                    @include span-button;
                }
            }
        }

        .lb__box-body {
            &.lb__box-has-header {
                border-top: $border-normal solid $border1;
            }
            padding: $box-inner-padding;
        }

        .lb__box-suffix {
            border-top: $border-small solid $border1;
            padding: $box-inner-padding-small $box-inner-padding $box-inner-padding-small $box-inner-padding;
        }

        margin-bottom: $box-margin-bottom;
    }
</style>