<script lang="typescript">
    import { LButton } from '../../src/main.ts';
</script>

<div class="item-20">
    <LButton>Demo</LButton>
    <LButton disabled>Disabled</LButton>
</div>

<div class="item-15">
    <LButton size="small">Small</LButton>
    <LButton>Normal</LButton>
    <LButton size="large">Large</LButton>
    <LButton height="80px" width="200px">Custom</LButton>
</div>

<div class="item-20">
    <LButton disabled size="small">Small</LButton>
    <LButton disabled>Normal</LButton>
    <LButton disabled size="large">Large</LButton>
    <LButton disabled height="80px" width="200px">Custom</LButton>
</div>

<div class="item-20">
    <LButton color="blue">Blue</LButton>
    <LButton color="green">Green</LButton>
    <LButton color="yellow">Yellow</LButton>
    <LButton color="red">Red</LButton>
    <LButton color="grey">Grey</LButton>
</div>

<style lang="scss">
    .item-20 {
        margin-bottom: 20px;
    }
    .item-15 {
        margin-bottom: 15px;
    }
</style>
