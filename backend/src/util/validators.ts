export const validatePassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>/?])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};

export const validateEmail = (email: string): boolean => {
  const passwordRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return passwordRegex.test(email);
};
