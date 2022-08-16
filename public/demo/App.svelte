<script>
    import {
        LBox,
        LButton,
        LIcon,
        LInput,
        LLink,
        LMask,
        LMDContainer,
        LMessageBar,
        LNavBar,
        LNotification,
        LNumberPicker,
        LProgress,
        LRadio,
        LRating,
        LSwitch,
        LTabs,
    } from "../../src/main.js";
    import * as code_demo from "./code_demo.js";
    import "../../src/styles/tabler-icons.min.css";

    let progress_demo_value = 10;

    let input_demo_value = "Input Demo";
    let input_handle_demo_value = "";
    let input_disabled_demo_value = "Disabled Input Demo";
    let textarea_demo_value = "Text Area Demo";
    let input_limited_demo_value = "";

    let radio_demo_value = "1";
    let radio_disabled_demo_value = "2";

    let number_picker_demo_value = 0;
    let number_picker_min_max_demo_value = 0;
    let number_picker_step_demo_value = 0.5;
    let number_picker_3D_demo_value = 0;
    let number_picker_position_right_demo_value = 0;

    let rating_demo_value = 2;
    let rating_array_demo_value = "bad";

    let switch_demo_value = true;
    let switch_false_demo_value = 0;

    let md_container_demo_value =
        "## MD Container Demo\n\n- **LabUI** is _awesome_ `!!!`";

    function on_click_demo() {
        alert("Clicked");
    }

    let progress_loader_demo_value = 0;
    let progress_loader_demo = () => {
        if (progress_loader_demo_value > 100) return;

        progress_loader_demo_value += 10;
        setTimeout(progress_loader_demo, Math.random() * 500);
    };
    progress_loader_demo();

    let show_cover = true;
    let show_cover_demo = () => {
        if (progress_loader_demo_value === 100) {
            show_cover = false;
            return;
        }

        setTimeout(show_cover_demo, 0);
    };
    show_cover_demo();
</script>

<main>
    <div class="item-15">
        <h1>Buttons</h1>
        <LButton on:click={on_click_demo}>Demo</LButton>
        <LButton disabled>Disabled</LButton>
        <LButton>
            <strong>Strong</strong>
            <br />
            More to describe ...
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
        <LButton plain color="grey" size="tiny">Tiny</LButton>
        <LButton plain disabled>Plain Disabled</LButton>
    </div>

    <div class="item-20">
        <h2>Flat</h2>
        <LButton flat color="blue">Flat</LButton>
        <LButton flat plain color="yellow">Flat Plain</LButton>
        <LButton flat color="green" size="large">Flat large</LButton>
        <LButton flat disabled>Flat Disabled</LButton>
        <LButton flat plain disabled>Flat Plain Disabled</LButton>
    </div>

    <div class="item-20">
        <h2>Round</h2>
        <LButton round flat color="blue">R</LButton>
        <LButton round plain color="yellow">Plain Round</LButton>
        <LButton round flat plain color="blue">FPR</LButton>
        <LButton round plain disabled>Plain Round</LButton>
        <LButton round flat plain disabled>FPRD</LButton>
    </div>

    <div class="item-20">
        <h1>Progress Bars</h1>
        <div class="item-30">
            <LProgress
                bind:percent={progress_demo_value}
                color={(percent) => {
                    if (percent <= 10) {
                        return "grey";
                    }
                    if (percent <= 30) {
                        return "red";
                    }
                    if (percent <= 50) {
                        return "yellow";
                    }
                    if (percent <= 70) {
                        return "blue";
                    }
                    return "green";
                }}
            />
            <LNumberPicker
                bind:value={progress_demo_value}
                step="5"
                button_position="right"
                min="0"
                max="100"
            />
        </div>
        <LProgress size="small" color="red" percent="10" />
        <br />
        <LProgress color="green" percent="100" length="400px" />
        <br />
        <LProgress size="large" />
        <br />
        <LProgress color="grey" show_num={false} percent="80" />
        <br />
        <LProgress percent="80" vertical />
        <LProgress percent="20" color="grey" vertical />
        <LProgress size="small" percent="50" color="yellow" vertical />
        <LProgress
            size="tiny"
            type="loader"
            percent={progress_loader_demo_value}
            color="blue"
        />
    </div>

    <LBox width="800px" foldable>
        <span slot="header"> Message Bars </span>
        <div slot="body">
            <LMessageBar color="green">
                <LIcon name="message" slot="icon" />
                <span slot="title">Message</span>
                <span slot="content">
                    More to describe ...
                    <LProgress color="yellow" percent="30" length="720px" />
                </span>
            </LMessageBar>
            <LMessageBar
                type="light"
                color="red"
                handle_close={() => {
                    on_click_demo();
                    return false;
                }}
            >
                <LIcon name="circle-x" slot="icon" />
                <span slot="title">Error</span>
                <span slot="content">Custom close handling.</span>
            </LMessageBar>
            <LMessageBar color="yellow" uncloseable type="dark">
                <LIcon name="square-x" slot="icon" />
                <span slot="title">Warning</span>
                <span slot="content">This message is not closable</span>
            </LMessageBar>

            <LMessageBar color="yellow"
                ><span slot="title">Warning</span></LMessageBar
            >
            <LMessageBar color="red"
                ><span slot="title">Error</span></LMessageBar
            >
            <LMessageBar><span slot="title">Message</span></LMessageBar>
            <LMessageBar color="grey"
                ><span slot="title">Other</span></LMessageBar
            >

            <LMessageBar type="dark" color="green"
                ><span slot="title">Success</span></LMessageBar
            >
            <LMessageBar type="dark" color="yellow"
                ><span slot="title">Warning</span></LMessageBar
            >
            <LMessageBar type="dark" color="red"
                ><span slot="title">Error</span></LMessageBar
            >
            <LMessageBar type="dark"
                ><span slot="title">Message</span></LMessageBar
            >
            <LMessageBar type="dark" color="grey"
                ><span slot="title">Other</span></LMessageBar
            >

            <LMessageBar type="light" color="green">
                <span slot="title">Message</span>
                <span slot="content">
                    More to describe ...
                    <br />
                    <LButton>Yup</LButton>
                    <LButton color="red">Nope</LButton>
                </span>
            </LMessageBar>
            <LMessageBar type="light" color="yellow"
                ><span slot="title">Warning</span></LMessageBar
            >
            <LMessageBar type="light"
                ><span slot="title">Message</span></LMessageBar
            >
            <LMessageBar type="light" color="grey"
                ><span slot="title">Other</span></LMessageBar
            >
        </div>
    </LBox>

    <div class="item-20">
        <h2>Boxes</h2>
        <LBox foldable closable has_suffix>
            <span slot="header">Header</span>
            <LLink slot="header-suffix">Header Suffix</LLink>
            <div slot="body">
                <LMessageBar color="green"
                    ><span slot="title">Message</span></LMessageBar
                >
                Body
            </div>
            <div slot="suffix">
                <LProgress percent="27" length="100%" />
            </div>
        </LBox>
        <LBox no_header flat={false} width="600px">
            <div slot="body">3D Boxes</div>
        </LBox>
    </div>

    <div class="item-20">
        <h2>Tabs</h2>
        <LTabs tabs={["Tabs", "Tab 2", "Tab 3", "Tab 4", "Looooooong Tab"]} let:tab>
            {#if tab === "Tabs"}
                <h1>LTabs</h1>
            {:else}
                <p>
                    {tab}
                </p>
            {/if}
            {#if tab === "Tab 2"}
                <p>This displays in Tab 2</p>
            {/if}
        </LTabs>
    </div>

    <div class="item-10">
        <h2>Inputs</h2>
        <LInput bind:value={input_demo_value} />
        <code>{input_demo_value}</code>
        <LInput bind:value={input_demo_value} readonly />
    </div>
    <div class="item-10">
        <LInput placeholder="Place Holder" />
        <LInput
            bind:value={input_handle_demo_value}
            placeholder="Input Handler Demo"
            handle_input={(event, is_limited, limit) => {
                let res = null;
                if (!is_limited || event.target.value.length <= limit) {
                    res = event.target.value.split("").reverse().join("");
                }

                return res;
            }}
        />
        <code>{input_handle_demo_value}</code>
    </div>
    <div class="item-10">
        <LInput placeholder="3D Input" flat={false} />
        <LInput placeholder={input_disabled_demo_value} disabled />
        <LInput placeholder="Center Input" center width="100px" />
    </div>
    <div class="item-10">
        <LInput type="password" placeholder="Input Password" />
        <LInput type="email" placeholder="Input Email" />
        <LInput clearable placeholder="Clearable Input" />
    </div>
    <div class="item-10">
        <LInput
            bind:value={input_limited_demo_value}
            placeholder="Limited Input Demo"
            width="200px"
            limit="30"
        />
        <code>{input_limited_demo_value}</code>
    </div>
    <div class="item-20">
        <div class="item-10">
            <LInput
                type="textarea"
                bind:value={textarea_demo_value}
                placeholder="Text Area Demo"
            />
            <code>{textarea_demo_value}</code>
        </div>
        <LInput
            type="textarea"
            placeholder="Limited Text Area Demo"
            limit="100"
        />
        <LInput type="textarea" placeholder="3D Text Area" flat={false} />
        <LInput type="textarea" placeholder="Disabled Text Area" disabled />
    </div>

    <div class="item-20">
        <h2>Number Pickers</h2>
        <div class="item-10">
            <LNumberPicker bind:value={number_picker_demo_value} />
            <code>{number_picker_demo_value}</code>
        </div>
        <div class="item-10">
            <h3>Min & Max</h3>
            <LNumberPicker
                bind:value={number_picker_min_max_demo_value}
                min="-1"
                max="5"
            />
            <code>{number_picker_min_max_demo_value}</code>
        </div>
        <div class="item-10">
            <h3>Step</h3>
            <LNumberPicker
                bind:value={number_picker_step_demo_value}
                step="0.5"
            />
        </div>
        <div class="item-10">
            <h3>3D</h3>
            <LNumberPicker
                bind:value={number_picker_3D_demo_value}
                flat={false}
            />
        </div>
        <div class="item-10">
            <h3>Button Position</h3>
            <LNumberPicker
                button_position="right"
                bind:value={number_picker_position_right_demo_value}
                max="3"
            />
            <LNumberPicker
                button_position="left"
                bind:value={number_picker_position_right_demo_value}
                max="3"
            />
        </div>
        <div class="item-10">
            <h3>Disabled</h3>
            <LNumberPicker disabled />
            <LNumberPicker button_position="right" disabled />
        </div>
    </div>

    <div class="item-10">
        <h2>Rating</h2>
        <div>
            <LRating bind:value={rating_demo_value} max="5" />
            <code>{rating_demo_value}</code>
        </div>
        <LRating
            bind:value={rating_array_demo_value}
            rating_array={[
                "bad",
                "just so so",
                "great",
                "excellent",
                "the best",
            ]}
        />
        <code>{rating_array_demo_value}</code>
        <br />
        <LRating bind:value={rating_demo_value} max="5" color="blue" />
        <br />
        <LRating bind:value={rating_demo_value} max="5" disabled />
    </div>
    <div class="item-10">
        <h3>Read Only</h3>
        <LRating read_only value="2.5" />
        <br />
        <LRating
            read_only
            value="4.5"
            full_icon="circle"
            half_icon="circle-dashed"
        />
        <br />
        <LRating
            read_only
            value="3.5"
            full_icon="square"
            half_icon="square-toggle"
            color="yellow6"
        />
    </div>

    <LBox>
        <span slot="header">Links</span>
        <div slot="body">
            <div class="item-10">
                <LLink href="https://github.com/zhangtianli2006/LabUI"
                    ><LIcon name="link" /> Link to GitHub repo</LLink
                >
                <br />
                <LLink on:click={on_click_demo}>👇🏼 Catch on:click</LLink>
            </div>
            <div class="item-10">
                <LLink
                    href="https://github.com/zhangtianli2006/LabUI"
                    underline="hover"
                    color="grey">Underline on Hover</LLink
                >
                <LLink
                    href="https://github.com/zhangtianli2006/LabUI"
                    underline="always"
                    color="green">Underline Always</LLink
                >
                <LLink
                    href="https://github.com/zhangtianli2006/LabUI"
                    underline="never"
                    color="red">No Underline</LLink
                >
            </div>
            <LLink href="https://github.com/zhangtianli2006/LabUI" disabled
                >Disabled</LLink
            >
        </div>
    </LBox>

    <LBox width="550px">
        <span slot="header">Radio</span>
        <div slot="body">
            <div class="item-10">
                <LRadio bind:value={radio_demo_value} label="1">Option 1</LRadio
                >
                <LRadio bind:value={radio_demo_value} label="2">Option 2</LRadio
                >
                <LRadio bind:value={radio_demo_value} label="3">Option 3</LRadio
                >
                <LRadio
                    bind:value={radio_demo_value}
                    handle_click={() => {
                        return prompt("Input Value");
                    }}
                    handle_on={() => {
                        return true;
                    }}>Custom Handling</LRadio
                >
                <code>value: {radio_demo_value}</code>
            </div>
            <LRadio bind:value={radio_disabled_demo_value} label="1" disabled
                >Disabled</LRadio
            >
            <LRadio bind:value={radio_disabled_demo_value} label="2" disabled
                >Disabled</LRadio
            >
        </div>
    </LBox>

    <LBox>
        <span slot="header">Switches</span>
        <div slot="body">
            <LSwitch bind:value={switch_demo_value} />
            <LSwitch
                bind:value={switch_false_demo_value}
                inactive_value="0"
                active_value="10"
                handle_click={(value, inactive_value, active_value, on) => {
                    alert("Clicked");
                    if (!on) {
                        return active_value;
                    }
                    if (on) {
                        return inactive_value;
                    }
                    return active_value;
                }}
            />
            <code>{switch_false_demo_value}</code>
            <LSwitch on_color="green" off_color="red" />
            <LSwitch bind:value={switch_demo_value} disabled />
            <br />
            <LSwitch bind:value={switch_demo_value}>
                <span slot="inactive_name">Inactive</span>
                <span slot="active_name">Active</span>
            </LSwitch>
        </div>
    </LBox>

    <div class="item-20">
        <h2>Notification</h2>
        <LNotification content="1">
            <LButton flat color="blue">Button</LButton>
        </LNotification>
        <LNotification content="999" color="green">
            <LButton color="yellow">Button</LButton>
        </LNotification>
        <br />
        <LNotification content="new">
            <LBox no_header><span slot="body">Box</span></LBox>
        </LNotification>
        <br />
        <LNotification dot>
            <LButton flat>Button</LButton>
        </LNotification>
    </div>

    <LBox no_header>
        <div slot="body">
            <LMDContainer bind:content={md_container_demo_value} />
            <LInput type="textarea" bind:value={md_container_demo_value} />
        </div>
    </LBox>

    <LBox width="800px" foldable folded="true">
        <div slot="header">MD Container</div>
        <div slot="body">
            <LMDContainer content={code_demo.cpp} />
            <LMDContainer content={code_demo.css} />
            <LMDContainer content={code_demo.markdown} />
        </div>
    </LBox>

    <!-- <LMask show={ show_cover } on:click={ on_click_demo }></LMask> -->
</main>

<style lang="scss">
    main {
        padding: 50px 20px 50px 20px;
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
    }

    .item-30 {
        margin-bottom: 30px;
    }

    .item-20 {
        margin-bottom: 20px;
    }

    .item-15 {
        margin-bottom: 15px;
    }

    .item-10 {
        margin-bottom: 10px;
    }
</style>
