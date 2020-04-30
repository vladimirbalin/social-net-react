const requiredFields = (value= '') => value.trim() ? undefined : 'field is required';
const maxLengthValidate = (maxLength) => value => maxLength >= value.length ? undefined : `max length is ${maxLength}`;

export {requiredFields, maxLengthValidate};