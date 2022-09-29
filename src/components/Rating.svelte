<script>
    import { Star, StarHalf } from 'tabler-icons-svelte';
    import { mix_classes } from '../scripts/utils.js';

    export let value = 0;
    export let disabled = false;
    export let max = Infinity;
    export let read_only = false;
    export let color = read_only ? 'grey8' : 'yellow3';

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

    $: read_only_classes = mix_classes([
        `rating-read-only-${color}`,
    ]);

    $: rating_classes = mix_classes([
        disabled ? 'rating-disabled' : '',
    ]);

    $: handleRatingClasses = (index) => {
        return mix_classes([
            'rating-indicator',
            `rating-indicator-${color}`,
            disabled ? 'rating-disabled' : '',
            handle_comp(index, value, rating_array) ? 'rating-indicator-on' : 'rating-indicator-off',
        ]);
    };
</script>

{#if read_only}
    <span class={ read_only_classes }>
        {#each rating_array as index}
            {#if index === '@'}
                <Star />
            {:else}
                <StarHalf />
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

    .lb__rating-indicator {
        @include border-small($transparent);
        $rating-indicator-size: $height-tiny - 2px;
        @include span-button;

        display: inline-block;
        height: $rating-indicator-size;
        width: $rating-indicator-size;

        margin-right: $gutter-normal;
        border-radius: $border-radius-round;
        transition: $transition-normal;

        &.lb__rating-disabled {
            @include disabled;
        }

        &:hover {
            @each $name, $val in $color_map {
                &.lb__rating-indicator-#{$name} {
                    border-color: $val;
                }
            }

            &.lb__rating-indicator-on {
                border-color: $c_grey2;
            }

            &.lb__rating-disabled {
                border-color: $transparent;
            }
        }

        @each $name, $val in $color_map {
            &.lb__rating-indicator-#{$name} {
                background-color: $val;
            }
        }

        &.lb__rating-indicator-off {
            background-color: $c_grey1;
        }
    }

    @each $name, $val in $color_map {
        .lb__rating-read-only-#{$name} {
            color: $val;
        }
    }
</style>