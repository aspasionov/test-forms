import axios from 'axios';


axios.defaults.baseURL = "https://auth-qa.qencode.com/v1";

export const instance = axios.create();

export const login = async (body) => {
  try {
    const data = await axios.post('/auth/login', body)
    return data
  } catch(err) {
    throw err.response.data.detail
  }
}

export const resetPassword = async (body, isMockToken = false) => {
  if (isMockToken) return { CSRF: "CSRFCSRFCSRFCSRF---CSRFCSRFCSRF" }
  try {
    const data = await axios.post('/auth/password-reset', body)
    return data
  } catch(err) {
    throw err.response.data.detail
  }
}

export const setPassword = async (body) => {
  try {
    const data = await axios.post('/auth/password-set', body)
    return data
  } catch(err) {
    throw err.response.data.detail
  }
}
