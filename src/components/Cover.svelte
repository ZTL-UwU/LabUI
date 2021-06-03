<script>
    import { mix_styles } from '../scripts/utils';

    export let show = true;
    export let opacity = 0.5;

    $: cover_styles = mix_styles([
        `opacity: ${opacity}`,
    ]);
</script>

{#if show}
    <div class="lb__cover" style={ cover_styles }></div>
{/if}

<style lang="scss">
    @import '../styles/main.scss';

    .lb__cover {
        position: fixed;
        top: 0;
        left: 0;
        z-index: $z-index6;

        width: 100vw;
        height: 100vh;

        background-color: $grey8;
    }
</style>