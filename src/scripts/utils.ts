export function mix_classes(names: string): string {
    let res = '';
    for (let name of names) {
        if (name !== '') {
            res += `lb__${name} `;
        }
    }

    return res.trim();
}

export function mix_styles(rules: string): string {
    let res = '';
    for (let rule of rules) {
        if (rule !== '') {
            res += `${rule}; `;
        }
    }

    return res.trim();
}
