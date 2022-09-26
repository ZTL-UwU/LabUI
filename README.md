![banner-svelte](https://user-images.githubusercontent.com/49156174/186880741-483b026b-383f-4f4a-8d11-287a844562fc.png)


<p align="center">
    A Svelte frontend UI library.
    <br>
    <a href="https://ZTL-UwU.github.io/LabUI/">Demo</a>
</p>

<p align="center">
    <img src="https://img.shields.io/github/workflow/status/ZTL-UwU/LabUI/Build%20and%20Deploy?style=flat-square" />
    <img src="https://img.shields.io/github/languages/code-size/ZTL-UwU/LabUI?color=%2323a536&label=Code%20Size&logo=github&style=flat-square" />
    <img src="https://img.shields.io/github/license/ZTL-UwU/LabUI?color=%235bb2ec&label=License&style=flat-square" />
    <img src="https://img.shields.io/npm/v/@ztl-uwu/labui?color=%23f9b705&label=Version&style=flat-square" />
    <img src="https://img.shields.io/github/last-commit/ZTL-UwU/LabUI?color=%2357B558&label=Last%20Commit&style=flat-square" />
    <img src="https://wakatime.com/badge/github/ZTL-UwU/LabUI.svg?style=flat-square" />
    <br>
    <a href="https://www.npmjs.com/package/@ztl-uwu/labui">
        <img src="https://nodei.co/npm/@ztl-uwu/labui.png?mini=true" />
    </a>
</p>

## Installation

1. Install SCSS

    Install Components

    ```bash
    npm install --save svelte-preprocess node-sass
    ```

    open `rollup.config.js`

    ```javascript
    import preprocess from 'svelte-preprocess'; // Line to add
    /* ... */
    export default {
        /* ... */
        plugins: [
            svelte({
            /* ... */
                preprocess: preprocess(), // Line to add
            })
        }),
        /* ... */
    }
    ```

2. Install LabUI

    ```bash
    npm i --save @ztl-uwu/labui
    ```

3. Move icon font to your public folder

    **This step is needed because LabUI is still in development and there is no easy solution**  
    **It will be fixed later**

    [⚠️ Issue Page](https://github.com/ZTL-UwU/LabUI/issues/166)

    ```bash
    cp -r LabUI/src/styles/fonts {your-project}/public/build/
    ```

## Usage

```html
<script>
    import {
        LButton,
        LBox,
        //...
    } from '@ztl-uwu/labui/main';
</script>
```

## Development

### Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

### Progress

**Components**
- [ ] ⚒️Avatar
- [x] Box
- [x] Button
- [ ] Button Group
- [ ] Card
- [ ] Form
- [x] Icon
- [x] Input
- [ ] Layout
- [ ] Link
- [x] Mask
- [x] MDContainer
- [ ] Message
- [ ] ⚒️MessageBar
- [ ] ⚒️NavBar
- [x] Notification
- [x] NumberPicker
- [x] Progress
- [x] Radio
- [x] Rating
- [ ] Select
- [ ] Separator
- [x] Switch
- [x] Tabs
- [ ] Table
- [x] Tags

**Fixes**
- [ ] Icon Font Problem

**Other**
- [x] Logo
- [ ] Design Guide
- [ ] Docs / New Demo
- [ ] Themes

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ZTL-UwU/LabUI)

### Start Demo Server

```bash
git clone https://github.com/ZTL-UwU/LabUI
cd LabUI
cp -r ./src/styles/fonts ./public/build/
npm install
npm run dev
```

![together](https://user-images.githubusercontent.com/49156174/185579786-0006d1d7-f5b5-4a0d-97a6-d6ab1054d1c9.png)
