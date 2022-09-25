export const validate = (value, validation) => {
  value = value.trim();

  for (let i = 0; i < validation.length; i++) {
    const { type, errorMessage } = validation[i];
    let hasError = false;

    switch (type) {
      case 'REQUIRED': {
        hasError = value.length === 0;
        break;
      }
      case 'UPPERCASE_FIRST_LETTER': {
        hasError = value[0] !== value[0].toUpperCase();
        break;
      }
      case 'DATE_PICKER': {
        hasError = Date.now() < Date.parse(value);
        break;
      }
      case 'PHONE_FORMAT': {
        const { pattern } = validation[i];
        hasError = !pattern.test(value);
        break;
      }
      case 'INCLUDE_HTTPS': {
        hasError = !value.startsWith('https://');
        break;
      }
      case 'CHARACTER_LIMIT': {
        const { characterLimit } = validation[i];
        hasError = value.length > characterLimit;
        break;
      }
      default:
        throw new Error('Invalid validation type');
    }

    if (hasError) {
      return errorMessage;
    }
  }

  return undefined;
};
