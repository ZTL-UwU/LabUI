# LabUI

A Svelte frontend UI library. [Demo](https://zhangtianli2006.github.io/LabUI/)

![Build](https://img.shields.io/github/workflow/status/zhangtianli2006/LabUI/Build%20and%20Deploy?style=flat-square)
![Code Size](https://img.shields.io/github/languages/code-size/zhangtianli2006/LabUI?color=%2323a536&label=Code%20Size&logo=github&style=flat-square)
![License](https://img.shields.io/github/license/zhangtianli2006/LabUI?color=%235bb2ec&label=License&style=flat-square)
![Version](https://img.shields.io/npm/v/@zhangtianli2006/lab-ui?color=%23f9b705&label=Version&style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/zhangtianli2006/LabUI?color=%2357B558&label=Last%20Commit&style=flat-square)
![WakaTime](https://wakatime.com/badge/github/zhangtianli2006/LabUI.svg?style=flat-square)

![NPM](https://nodei.co/npm/@zhangtianli2006/lab-ui.png?mini=true)](https://npmjs.org/package/@zhangtianli2006/lab-ui)

## Installation

1. Install SCSS

    Install Components

    ```bash
    npm install svelte-preprocess node-sass
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
    npm i @zhangtianli2006/lab-ui
    ```

3. Move icon font to your public folder

    **This step is needed because LabUI is still in development and there is no easy solution**  
    **It will be fixed later**

    [⚠️ Issue Page](https://github.com/zhangtianli2006/LabUI/issues/166)

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
    } from '@zhangtianli2006/lab-ui/main';
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
- [x] Tab
- [ ] Table
- [ ] Tag

**Fixes**
- [ ] Icon Font Problem

**Other**
- [ ] Logo
- [ ] Design Guide
- [ ] Docs / New Demo
- [ ] Themes

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/zhangtianli2006/LabUI)

### Start Demo Server

```bash
git clone https://github.com/zhangtianli2006/LabUI
cd LabUI
cp -r ./src/styles/fonts ./public/build/
npm install
npm run dev
```
