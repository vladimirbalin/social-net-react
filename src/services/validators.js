const requiredFields = (value) => value ? undefined : 'field is required';
const maxLengthValidate = (maxLength) => value => maxLength >= value.length ? undefined : 'max length is 10';

export {requiredFields, maxLengthValidate};