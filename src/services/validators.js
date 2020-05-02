const requiredFields = (value= '') => value.trim() ? undefined : 'field\u00A0is\u00A0required';
const maxLengthValidate = (maxLength) => (value) => maxLength >= value.length ? undefined : `max length is ${maxLength}`;

export {requiredFields, maxLengthValidate};