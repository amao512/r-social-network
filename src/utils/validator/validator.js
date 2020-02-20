export const required = value => {
    if(!value) return 'Field must be filled';
    return undefined;
}

export const MaxLenghtThunk = maxLenght => value => {
    if(value.length < maxLenght) return `Symbols must be more than ${maxLenght}`;
    return undefined;
}