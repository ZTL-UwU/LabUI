<script>
    import { mix_classes } from '../scripts/utils';
    
    export let content = '';
    export let color = 'red';
    export let dot = false;

    $: indicator_classes = mix_classes([
        'notification-indicator',
        `notification-indicator-${color}`,
        dot ? 'notification-indicator-dot' : '',
    ]);
</script>

<div class="lb__notification">
    <span class={ indicator_classes }>
        {#if !dot}
            { content }
        {/if}
    </span>
    <slot />
</div>

<style lang="scss">
    @import '../styles/main.scss';

    .lb__notification {
        position: relative;
        display: inline-block;

        $notification-indicator-size: 16px;
        $notification-indicator-dot-size: 12px;
        .lb__notification-indicator {
            display: inline-block;

            position: absolute;
            top: 0;
            right: 0;
            transform: translateY(-50%) translateX(50%);
            z-index: $z-index5;

            padding: 0 6px;

            height: $notification-indicator-size;
            line-height: $notification-indicator-size;
            border-radius: $border-radius-round;

            &.lb__notification-indicator-dot {
                height: $notification-indicator-dot-size;
                line-height: $notification-indicator-dot-size;
            }

            font-size: 12px;
            color: $white;

            @each $name, $val in $basic-color-map {
                &.lb__notification-indicator-#{$name} {
                    background-color: $val;
                }
            }
        }

        margin-right: 14px;
    }
</style>
