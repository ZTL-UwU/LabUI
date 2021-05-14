<script lang="typescript">
    import { mix_classes } from '../scripts/utils.ts';

    export let value = null;
    export let label = null;

    export let handle_click = (event) => {
        value = label;
    };

    $: on = value !== null && label !== null && value === label;

    $: radio_circle_classes = mix_classes([
        'radio-circle',
        on ? 'radio-circle-on' : '',
    ]);

    $: radio_name_classes = mix_classes([
        'radio-name',
        on ? 'radio-name-on': '',
    ]);
</script>

<span
    class="lb__radio"
    on:click={handle_click}
>
    <span class={radio_circle_classes}>
        {#if on}
            <span class="lb__radio-circle-inner" />
        {:else}
            <span class="lb__radio-circle-inner-holder" />
        {/if}
    </span>
    <span class={radio_name_classes}>
        <slot />
    </span>
</span>

<style lang="scss">
    @import '../styles/variables.scss';

    .lb__radio {
        @include v-center;
        cursor: pointer;
        margin-right: 20px;

        transition: $transition-normal;
    }

    .lb__radio-circle {
        transition: $transition-normal;

        margin-right: 5px;
        height: 15px;
        width: 15px;

        border-radius: 100%;
        background-color: $white;
        @include border-tiny($border1);

        &.lb__radio-circle-on {
            border-color: $transparent;
            background-color: $blue;
        }

        &:hover {
            border-color: $blue;
        }

        .lb__radio-circle-inner {
            @include zoom-in-transform;

            display: inline-block;

            width: 5px;
            height: 5px;
            background-color: $white;
            border-radius: 100%;

            margin-bottom: 5px;
            margin-left: 5px;
        }

        .lb__radio-circle-inner-holder {
            display: inline-block;
            width: 5px;
            height: 5px;
            margin-bottom: 5px;
            margin-left: 5px;
        }
    }

    .lb__radio-name {
        transition: $transition-normal;

        &:hover {
            color: $blue;
        }

        &.lb__radio-name-on {
            color: $blue7;
        }
    }
</style>
