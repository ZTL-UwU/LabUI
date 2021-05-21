# LabUI
A Svelte frontend UI library.

![Code Size](https://img.shields.io/github/languages/code-size/zhangtianli2006/LabUI?color=%2323a536&label=Code%20Size&logo=github&style=flat-square)
![License](https://img.shields.io/github/license/zhangtianli2006/LabUI?color=%235bb2ec&label=License&style=flat-square)
![Version](https://img.shields.io/github/package-json/v/zhangtianli2006/LabUI?color=%23f9b705&label=Version&style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/zhangtianli2006/LabUI?color=%2357B558&label=Last%20Commit&style=flat-square)
![WakaTime](https://wakatime.com/badge/github/zhangtianli2006/LabUI.svg)

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

3. Import LabUI

    ```html
    <script>
        import {
            LButton,
            LBox,
            //...
        } from '@zhangtianli2006/lab-ui/main';
    </script>
    ```
