import * as Yup from 'yup';

export default Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter your email address')
    .nullable(false),
  password: Yup.string()
    // .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/,
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_])[A-Za-z\d!@#$%^&*()_]{8,20}$/,
      'Password must be between 8-20 characters, and must contain at least one uppercase and lower letter, one number, and one special character.'
    )
    .required('Please enter your password'),
  rememberMe: Yup.boolean().oneOf([true, false]).nullable(true)
});
