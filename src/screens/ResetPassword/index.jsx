import { useState } from "react"
import { useParams } from 'react-router-dom';


import Field from '@components/Field'
import Button from '@components/Button'
import Container from '@components/Container'
import Logo from '@components/Logo'

import { ValidationsMap } from '@validations'

import { errorHandler, getErrorTextFromBE } from '@helpers'
import { setPassword as setPasswordApi } from '@api/index.api'

const ResetPassword = () => {
  const [validate, setValidate] = useState(false)
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [confirmPassword, setConfirmPassword] = useState('')

  const { token: secret } = useParams()

  const validator = (key, value, passValidate = false) => {
    if ((validate || passValidate) && ValidationsMap[key]?.isError(value)) {
      return ValidationsMap[key]?.helperText;
    }
    return '';
  };

  const handleClick = async () => {
    setValidate(true)
    if (!validator('password', password, true) && !validator('confirmPassword', { pass1: password, pass2: confirmPassword }, true)) {
      try {
        await setPasswordApi({ password, 'password_confirm': confirmPassword, secret, token: 'token' })
      } catch (errors) {
        const err = errorHandler(errors)
        if (err) {
          setErrors(err)
        }
      } finally {
        setValidate(false)
      }
    }
  }

  return (
    <Container>
      <Logo />
      <h1>Create new Password?</h1>
      <div className='form'>
        <Field
          type="password"
          error={
            validator('password', password)
          || validator('confirmPassword', { pass1: password, pass2: confirmPassword })
          || getErrorTextFromBE('password', errors)}
          className="form__item"
          value={password}
          handleChange={setPassword}
          label="Password" />
        <Field 
          type="password" 
          error={validator('password', confirmPassword)
          || validator('confirmPassword', { pass1: password, pass2: confirmPassword })}
          className="form__item" value={confirmPassword} handleChange={setConfirmPassword} label="Confirm Password" />
        <Button text="Reset Password" fullWidth className="form__item" handleClick={handleClick} />
      </div>
    </Container>
  );
}

export default ResetPassword;