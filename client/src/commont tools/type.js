export const isNum = (a) => new RegExp('^[0-9]*$').test(a);

export const onlyAlphabet = (a) => new RegExp('^[a-zA-Z]*$').test(a);
