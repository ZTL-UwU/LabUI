<script>
    import { mix_classes } from '../scripts/utils.js';
    import LIcon from './Icon.svelte';

    export let value = 0;
    export let disabled = false;
    export let max = Infinity;
    export let read_only = false;

    export let rating_array = [];
    if (rating_array.length === 0 && parseInt(read_only ? value : max) !== Infinity) {
        for (let i = 1; i <= parseInt(read_only ? value : max); i += 1) {
            rating_array.push(read_only ? '@' : i);
        }

        if (read_only && value - rating_array.length != 0) {
            rating_array.push('#');
        }
    }

    export let handle_comp = (index, value, rating_array) => {
        return rating_array.indexOf(index) <= rating_array.indexOf(value);
    };

    const handleRatingClick = (index) => {
        if (!disabled) {
            value = index;
        }
    };

    $: rating_classes = mix_classes([
        disabled ? 'number-picker-disabled' : '',
    ]);

    $: handleRatingClasses = (index) => {
        return mix_classes([
            'number-picker-rating-indicator',
            disabled ? 'number-picker-disabled' : '',
            handle_comp(index, value, rating_array) ? 'number-picker-rating-indicator-on' : 'number-picker-rating-indicator-off',
        ]);
    };
</script>

{#if read_only}
    <span>
        {#each rating_array as index}
            {#if index === '@'}
                <LIcon name="star" />
            {:else}
                <LIcon name="star-half" />
            {/if}
        {/each}
    </span>
{:else}
    <span class={ rating_classes }>
        {#each rating_array as index}
            <span
                class={ handleRatingClasses(index) }
                on:click={ handleRatingClick(index) }
            />
        {/each}
    </span>
{/if}

<style lang="scss">
    @import '../styles/main.scss';

    .lb__number-picker-rating-indicator {
        @include border-small($transparent);
        $rating-indicator-size: $height-tiny - 2px;
        @include span-button;

        display: inline-block;
        height: $rating-indicator-size;
        width: $rating-indicator-size;

        margin-right: $gutter-normal;
        border-radius: $border-radius-round;
        transition: $transition-normal;

        &.lb__number-picker-disabled {
            @include disabled;
        }

        &:hover {
            &.lb__number-picker-disabled {
                border-color: $transparent;
            }
            border-color: $yellow3;
            &.lb__number-picker-rating-indicator-on {
                border-color: $c_grey2;
            }
        }

        background-color: $yellow3;
        &.lb__number-picker-rating-indicator-off {
            background-color: $c_grey1;
        }
    }
</style>