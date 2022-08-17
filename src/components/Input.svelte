<script>
    import { mix_classes, mix_styles } from '../scripts/utils.js';

    export let disabled = false;
    export let placeholder = '';
    export let value = '';
    export let type = 'text';
    export let limit = -1;
    export let flat = true;
    export let center = false;
    export let readonly = false;
    export let clearable = false;
    export let width = type === 'textarea' ? '300px' : '180px';
    export let height = type === 'textarea' ? '60px' : '30px';

    export let handle_input = (event, is_limited, limit, value) => {
        let res = null;
        if (!is_limited || event.target.value.length <= limit) {
            res = event.target.value;
        }

        return res;
    };

    let show_pass_icon = type === 'password' ? true : false;
    let show_password_icon = 'ti ti-eye';

    $: is_limited = limit == -1 ? false : true;
    $: counter = limit == -1 ? '' : `${value.length} / ${limit}`;

    $: classes = mix_classes([
        'input',
        `input-${type}`,
        (show_pass_icon && type !== 'password') ? 'input-password' : '',
        readonly ? 'input-readonly' : '',
        is_limited ? 'input-limited' : '',
        flat ? '' : 'input-3D',
        center ? 'input-center' : '',
        clearable ? 'input-clearable' : '',
    ]);

    $: styles = mix_styles([
        `width: ${width}`,
        `height: ${height}`,
    ]);

    const handleInput = (event) => {
        const res = handle_input(event, is_limited, limit, value);
        if (res !== null) {
            value = res;
        }
    };

    const show_pass = () => {
        if (type === 'text') {
            type = 'password';
            show_password_icon = 'ti ti-eye';
        } else if (type === 'password') {
            type = 'text';
            show_password_icon = 'ti ti-eye-off';
        }
        show_pass_icon = true;
    }

    const clear_input = () => {
        value = '';
    }
</script>

{#if type !== 'textarea'}
    <div class="lb__input-holder">
        <input
            class={classes}
            style={styles}
            {readonly}
            {disabled}
            {placeholder}
            {type}
            {value}
            maxlength={limit}
            on:input={handleInput}
        />

        {#if is_limited || show_pass_icon || clearable}
            <span class="lb__input-suffix">
                <span class="lb__input-suffix-inner">
                    {#if is_limited} { counter } {/if}
                    {#if show_pass_icon}
                        <span on:click={show_pass} class="lb__input-suffix-inner-button">
                            <i class={show_password_icon} style="color: #4A4A4A; font-size: 15px;"></i>
                        </span>
                    {/if}
                    {#if clearable && value.length > 0}
                        <span on:click={clear_input} class="lb__input-suffix-inner-button">
                            <i class="ti ti-circle-x" style="color: #4A4A4A; font-size: 15px;"></i>
                        </span>
                    {/if}
                </span>
            </span>
        {/if}
    </div>
{:else}
    <div class="lb__input-holder">
        <textarea
            class={classes}
            style={styles}
            {readonly}
            {disabled}
            {placeholder}
            {value}
            maxlength={limit}
            on:input={handleInput}
        />
        {#if is_limited}
            <span class="lb__input-suffix lb__input-textarea-counter">
                <span class="lb__input-suffix-inner">{counter}</span>
            </span>
        {/if}
    </div>
{/if}

<style lang="scss">
    @import '../styles/main.scss';
    
    .lb__input-holder {
        position: relative;
        display: inline-block;
    }
    
    $input-suffix-size: 45px;
    .lb__input-suffix {
        position: absolute;
        $input-suffix-margin-right: 10px;
        height: 100%;

        &.lb__input-textarea-counter {
            height: 20px;
            bottom: 5px;
            right: $input-suffix-margin-right + $gutter-small;
        }
        right: $input-suffix-margin-right;

        @include v-center;
        font-size: $font-size-small;
        user-select: none;

        .lb__input-suffix-inner-button {
            @include span-button;
        }
    }

    .lb__input {
        font-size: $font-size-normal;
        &.lb__input-center {
            text-align: center;
        }

        border-radius: $border-radius-normal;
        &.lb__input-3D {
            @include border-bottom-large($border1);
        }
        &.lb__input-readonly {
            cursor: default;
        }
        @include border-small($border1);

        transition: border-color $transition-normal;
        outline: none;
        background-color: $white;

        &:disabled {
            @include border-small($border1);
            background-color: $white3;
            @include disabled;
        }

        &:focus-visible,
        &:focus {
            &.lb__input-readonly {
                border-color: $border1;
                cursor: default;
            }
            border-color: $blue3;
        }
    }

    .lb__input-text, .lb__input-password, .lb__input-email {
        height: $height-normal;

        &.lb__input-limited, &.lb__input-password, &.lb__input-clearable { padding-right: $input-suffix-size; }
        padding: $gutter-tiny $gap-tiny $gutter-tiny $gap-tiny;
    }

    .lb__input-textarea {
        padding: 8px 12px 8px 12px;

        min-height: 60px;
        min-width: 300px;
    }
</style>
