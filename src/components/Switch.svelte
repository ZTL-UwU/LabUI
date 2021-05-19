<script>
    import { mix_classes } from '../scripts/utils.js';
    export let value = false;

    $: background_classes = mix_classes([
        'switch-background',
        value ? 'switch-on' : 'switch-off',
    ]);

    $: indicator_classes = mix_classes([
        'switch-indicator',
        value ? 'switch-on' : 'switch-off',
    ]);

    const handleClick = () => {
        value = !value;
    }
</script>

<span
    class={ background_classes }
    on:click={ handleClick }
>
    <span class={ indicator_classes }></span>
</span>

<style lang="scss">
    @import '../styles/variables.scss';

    .lb__switch-background {
        cursor: pointer;
        transition: $transition-long;
        @include v-center;

        height: 20px;
        width: 40px;

        position: relative;
        border-radius: $border-radius-round;

        &.lb__switch-off {
            background-color: $c_grey1;
        }
        &.lb__switch-on {
            background-color: $blue;
        }

        .lb__switch-indicator {
            transition: $transition-long;
            position: absolute;
            left: 2px;
            &.lb__switch-on { margin-left: 20px; }

            height: 16px;
            width: 16px;

            background-color: $white;
            border-radius: $border-radius-round;
        }

        margin-right: 5px;
    }
</style>