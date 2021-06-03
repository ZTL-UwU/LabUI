import * as colors from './color';

export function mix_classes(names) {
    let res = '';
    for (let name of names) {
        if (name !== '') {
            res += `lb__${name} `;
        }
    }

    return res.trim();
}

export function mix_styles(rules) {
    let res = '';
    for (let rule of rules) {
        if (rule !== '') {
            res += `${rule}; `;
        }
    }

    return res.trim();
}

export function color_mask(color) {
    switch (color) {
        case 'blue':
            return colors.blue;
        case 'green':
            return colors.green;
        case 'red':
            return colors.red;
        case 'yellow':
            return colors.yellow;
        case 'grey':
            return colors.grey;
        case 'white':
            return colors.white;
        case 'black':
            return colors.black;
        case 'primary':
            return colors.primary;
        case 'warning':
            return colors.warning;
        case 'error':
            return colors.error;
        case 'success':
            return colors.success;
        case 'other':
            return colors.other;
        case 'info':
            return colors.info;

        default:
            return color;
    }
}