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
