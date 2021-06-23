<script>
    import { mix_classes } from '../scripts/utils.js';

    export let value = 0;
    export let disabled = false;
    export let max = Infinity;

    export let rating_array = [];
    if (rating_array.length === 0 && parseInt(max) !== Infinity) {
        for (let i = 1; i <= parseInt(max); i += 1) {
            rating_array.push(i);
        }
    }

    export let handle_comp = (index, value, rating_array) => {
        console.log(rating_array.indexOf(index), value, rating_array.indexOf(value));
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

<span class={ rating_classes }>
    {#each rating_array as index}
        <span
            class={ handleRatingClasses(index) }
            on:click={ handleRatingClick(index) }
        />
    {/each}
</span>

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