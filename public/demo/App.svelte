<script lang="typescript">
    import { LButton, LProgress, LMessageBar } from '../../src/main.ts';
    import * as colors from '../../src/color.ts';
</script>

<main>
    <div class="item-15">
        <LButton>Demo</LButton>
        <LButton disabled>Disabled</LButton>
        <LButton>
            <img src="https://avatars.githubusercontent.com/u/49156174?s=45&v=4" />
        </LButton>
    </div>

    <div class="item-15">
        <LButton size="tiny">Tiny</LButton>
        <LButton size="small">Small</LButton>
        <LButton>Normal</LButton>
        <LButton size="large">Large</LButton>
        <LButton height="80px" width="200px">Custom Size</LButton>
    </div>

    <div class="item-15">
        <LButton disabled size="tiny">Tiny</LButton>
        <LButton disabled size="small">Small</LButton>
        <LButton disabled>Normal</LButton>
        <LButton disabled size="large">Large</LButton>
        <LButton disabled height="80px" width="200px">Custom Size</LButton>
    </div>

    <div class="item-15">
        <LButton color="blue">Blue</LButton>
        <LButton color="green">Green</LButton>
        <LButton color="yellow">Yellow</LButton>
        <LButton color="red">Red</LButton>
        <LButton color="grey" size="large">Grey Large</LButton>
    </div>

    <div class="item-15">
        <LButton plain color="blue">Plain</LButton>
        <LButton plain color="green" size="large">Plain large</LButton>
        <LButton plain color="grey" size="tiny">T</LButton>
        <LButton plain disabled>Plain Disabled</LButton>
    </div>

    <div class="item-20">
        <LButton flat color="blue">Flat</LButton>
        <LButton flat plain color="yellow">Flat Plain</LButton>
        <LButton flat color="green" size="large">Flat large</LButton>
    </div>

    <div class="item-20">
        <LProgress size="small" color={colors.red} percent="10"></LProgress>
        <LProgress color={colors.green} percent="100" width="300px"></LProgress>
        <LProgress size="large"></LProgress>
    </div>

    <div class="item-20">
        <LMessageBar>
            <span slot="content">Message</span>
        </LMessageBar>
        <LMessageBar type="warning">
            <span slot="content">Warning</span>
        </LMessageBar>
    </div>
</main>

<style lang="scss">
    .item-20 {
        margin-bottom: 20px;
    }

    .item-15 {
        margin-bottom: 15px;
    }
</style>
