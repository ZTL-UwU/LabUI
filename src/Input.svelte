<script>
    export let disabled = false;
    export let placeholder = '';
    export let value = '';
    export let type = 'text';
    export let limit = -1;
    
    $: is_limited = limit == -1 ? false : true;

    $: counter = limit == -1 ? '' : `${value.length} / ${limit}`;
    $: limited_class = is_limited ? 'lb__input-limited' : '';
    $: classes = `lb__input lb__input-${type} ${limited_class}`;

    const handleInput = (event) => {
        if (!is_limited || event.target.value.length <= limit) {
            value = event.target.value;
        }
    };
</script>

{#if type!=='textarea'}
    <div class="lb__input-holder">
        <input
            class={classes}
            {disabled}
            {placeholder}
            {type}
            {value}
            on:input={handleInput}
        />
        {#if is_limited}
            <span class="lb__input-counter">
                <span class="lb__input-counter-inner">{counter}</span>
            </span>
        {/if}
    </div>
{:else}
    <div class="lb__input-holder">
        <textarea
            class={classes}
            {disabled}
            {placeholder}
            {value}
            on:input={handleInput}
        />
        {#if is_limited}
            <span class="lb__input-counter lb__input-textarea-counter">
                <span class="lb__input-counter-inner">{counter}</span>
            </span>
        {/if}
    </div>
{/if}

<style lang="scss">
    @import './variables.scss';

    .lb__input-holder {
        position: relative;
        display: inline-block;
    }

    .lb__input-counter {
        position: absolute;

        &.lb__input-textarea-counter {
            height: 20px;
            bottom: 5px;
            right: 12px;
        }
        right: 10px;
        height: 100%;

        display: inline-flex;
        align-items: center;
        font-size: 10px;
    }

    .lb__input {
        font-size: 13px;

        border-radius: $border-radius-normal;
        @include border-small($border1);

        transition: border-color $transition-normal;
        outline: none;
        background-color: $white;

        &:disabled {
            @include border-small($border1);
            outline: none;
            background-color: $white3;
            @include disabled;
        }

        &:focus-visible,
        &:focus {
            border-color: $blue3;
        }
    }

    .lb__input-text, .lb__input-password, .lb__input-email {
        height: $height-normal;

        &.lb__input-limited {
            padding-right: 45px;
        }
        padding: 2px 10px 2px 10px;
    }

    .lb__input-textarea {
        padding: 8px 12px 8px 12px;

        min-height: 60px;
        min-width: 300px;
    }
</style>
