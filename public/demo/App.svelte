<script lang="typescript">
    import { LBox, LButton, LProgress, LMessageBar } from '../../src/main.ts';
    import * as colors from '../../src/color.ts';
</script>

<main>
    <div class="item-15">
        <h1>Buttons</h1>
        <LButton>Demo</LButton>
        <LButton disabled>Disabled</LButton>
        <LButton>
            <img src="https://avatars.githubusercontent.com/u/49156174?s=45&v=4" alt="avatar" />
        </LButton>
    </div>

    <div class="item-15">
        <h2>Sizes</h2>
        <LButton size="tiny">Tiny</LButton>
        <LButton size="small">Small</LButton>
        <LButton>Normal</LButton>
        <LButton size="large">Large</LButton>
        <LButton height="80px" width="200px">Custom Size</LButton>
    </div>

    <div class="item-15">
        <h2>Disabled</h2>
        <LButton disabled size="tiny">Tiny</LButton>
        <LButton disabled size="small">Small</LButton>
        <LButton disabled>Normal</LButton>
        <LButton disabled size="large">Large</LButton>
        <LButton disabled height="80px" width="200px">Custom Size</LButton>
    </div>

    <div class="item-15">
        <h2>Colors</h2>
        <LButton color="blue">Blue</LButton>
        <LButton color="green">Green</LButton>
        <LButton color="yellow">Yellow</LButton>
        <LButton color="red">Red</LButton>
        <LButton color="grey" size="large">Grey Large</LButton>
    </div>

    <div class="item-15">
        <h2>Plain</h2>
        <LButton plain color="blue">Plain</LButton>
        <LButton plain color="green" size="large">Plain large</LButton>
        <LButton plain color="grey" size="tiny">T</LButton>
        <LButton plain disabled>Plain Disabled</LButton>
    </div>

    <div class="item-20">
        <h2>Flat</h2>
        <LButton flat color="blue">Flat</LButton>
        <LButton flat plain color="yellow">Flat Plain</LButton>
        <LButton flat color="green" size="large">Flat large</LButton>
    </div>

    <div class="item-20">
        <h1>Progress Bars</h1>
        <LProgress size="small" color={colors.red} percent="10"></LProgress>
        <LProgress color={colors.green} percent="100" width="300px"></LProgress>
        <LProgress size="large"></LProgress>
    </div>

    <LBox width="800px">
        <strong slot="header">
            Message Bars
        </strong>
        <div slot="body">
            <LMessageBar type="success">
                <span slot="content">Success</span>
            </LMessageBar>
            <LMessageBar type="warning">
                <span slot="content">Warning</span>
            </LMessageBar>
            <LMessageBar type="error">
                <span slot="content">
                    Error
                    <LButton flat plain color="red">ERR</LButton>
                </span>
            </LMessageBar>
            <LMessageBar>
                <span slot="content">Message</span>
            </LMessageBar>
            <LMessageBar type="other">
                <span slot="content">Other</span>
            </LMessageBar>
            <LMessageBar type="primary">
                <span slot="content">Primary</span>
            </LMessageBar>
        </div>
    </LBox>

    <div class="item-20">
        <h2>Boxes</h2>
        <LBox>
            <span slot="header">Header</span>
            <div slot="body">
                <LMessageBar type="success">
                    <span slot="content">Message</span>
                </LMessageBar>
                Body
            </div>
        </LBox>
        <LBox noheader flat={false}>
            <div slot="body">3D Boxes</div>
        </LBox>
    </div>
</main>

<style lang="scss">
    main {
        background-color: #FAFAFE;
        padding: 50px 200px 50px 200px;
    }

    .item-20 {
        margin-bottom: 20px;
    }

    .item-15 {
        margin-bottom: 15px;
    }
</style>
