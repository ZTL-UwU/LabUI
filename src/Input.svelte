<script>
    export let disabled = false;
    export let placeholder = '';
    export let value = '';

    $: classes = `lb__text-input`
</script>

<input
    class={classes}
    {disabled}
    {placeholder}
    bind:value
/>

<style lang="scss">
    @import './variables.scss';

    .lb__text-input {
        height: $height-normal;
        border-radius: $border-radius-normal;
        @include border-small($border1);
        padding: 2px 10px 2px 10px;

        transition: $transition-normal;
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
</style>
