import validator from 'validator';

export const isValueEmpty = value => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'object') {
    for (const key in value) {
      if (!isValueEmpty(value[key])) {
        return false;
      }
    }
    return true;
  }
  const stringValue = String(value);
  return validator.isEmpty(stringValue, { ignore_whitespace: true });
};

export const isValidEmail = email => {
  return validator.isEmail(email);
};

export const isValidPhone = phone => {
  return validator.isMobilePhone(phone, 'vi-VN');
};

export const isValidPassword = password => {
  return validator.isStrongPassword(password, {
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0
  });
};
