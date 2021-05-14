<script lang="typescript">
    import { mix_classes, mix_styles } from '../scripts/utils.ts';

    export let disabled = false;
    export let placeholder = '';
    export let value = '';
    export let type = 'text';
    export let limit = -1;
    export let flat = true;
    export let center = false;
    export let width = type === 'textarea' ? '300px' : '180px';
    export let height = type === 'textarea' ? '60px' : '30px';

    export let handle_input = (event, is_limited: boolean, limit: number, value) => {
        let res: string = null;
        if (!is_limited || event.target.value.length <= limit) {
            res = event.target.value;
        }

        return res;
    };

    let show_pass_icon = type === 'password' ? true : false;
    let show_password_icon = 'Show';

    $: is_limited = limit == -1 ? false : true;
    $: counter = limit == -1 ? '' : `${value.length} / ${limit}`;

    $: classes = mix_classes([
        'input',
        `input-${type}`,
        (show_pass_icon && type !== 'password') ? 'input-password' : '',
        is_limited ? 'input-limited' : '',
        flat ? '' : 'input-3D',
        center ? 'input-center' : '',
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

    function show_pass() {
        if (type === 'text') {
            type = 'password';
            show_password_icon = 'Show';
        } else if (type === 'password') {
            type = 'text';
            show_password_icon = 'Hide';
        }
        show_pass_icon = true;
    }
</script>

{#if type !== 'textarea'}
    <div class="lb__input-holder">
        <input
            class={classes}
            style={styles}
            {disabled}
            {placeholder}
            {type}
            {value}
            maxlength={limit}
            on:input={handleInput}
        />

        {#if is_limited || show_pass_icon}
            <span class="lb__input-suffix">
                <span class="lb__input-suffix-inner">
                    {#if is_limited} {counter} {/if}
                    {#if show_pass_icon}
                        <span on:click={show_pass}>{show_password_icon}</span>
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
    @import '../styles/variables.scss';

    .lb__input-holder {
        position: relative;
        display: inline-block;
    }

    .lb__input-suffix {
        position: absolute;

        &.lb__input-textarea-counter {
            height: 20px;
            bottom: 5px;
            right: 12px;
        }
        right: 10px;

        @include v-center;
        font-size: 10px;
        user-select: none;
    }

    .lb__input {
        font-size: 13px;
        &.lb__input-center {
            text-align: center;
        }

        border-radius: $border-radius-normal;
        &.lb__input-3D {
            border-bottom: $border-large solid $border1;
        }
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

        &.lb__input-limited, &.lb__input-password { padding-right: 45px; }
        padding: 2px 10px 2px 10px;
    }

    .lb__input-textarea {
        padding: 8px 12px 8px 12px;

        min-height: 60px;
        min-width: 300px;
    }
</style>
