<script>
</script>

<span class="lb__tag-container">
    <slot name="icon" />
    <slot name="text" />
</span>

<style lang="scss">
    @import '../styles/main.scss';

    .lb__tag-container {
        display: inline-block;
        background: $white3;
        padding: 7px 13px 7px 13px;
        height: 17px;
        border-radius: 10px;
        font-weight: 500;
        color: $grey;
        font-size: 14px;
    }
</style>