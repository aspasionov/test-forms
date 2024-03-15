export const ValidationsMap = {
  
  email: {
    helperText: 'The email should be a valid email format.',
    isError: (value) => !value?.toLowerCase()?.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  },
  password: {
    helperText: 'The password fields should be at least 8 characters long.',
    isError: (value) =>  value?.length < 8,
  },
  confirmPassword: {
    helperText: 'The passwords do not match.',
    isError: ({ pass1, pass2 }) =>  pass1 !== pass2,
  },
};