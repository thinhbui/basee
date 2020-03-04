const validatePhone = phone => {
  const regEx = /^0[0-9]{9}$/;
  return regEx.test(phone);
};
const validateEmail = email => {
  var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLowerCase());
};

const validatePassword = password => {
  // const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  const re = /([(a-zA-Z)?(0-9)?]{6,})/;
  return re.test(password.trim());
};

const validateOrderDate = (compareDate, nowDate) =>
  compareDate.getTime() - nowDate.getTime();

export {validatePhone, validateEmail, validatePassword, validateOrderDate};
