import { useState } from "react"

import { Link } from "react-router-dom"

import { toast } from 'react-toastify';

import Field from '@components/Field'
import Button from '@components/Button'
import Container from '@components/Container'
import Logo from '@components/Logo'
import { login } from '@api/index.api'

import googleUrl from '@assets/google.svg'
import githubUrl from '@assets/github.svg'

import { ValidationsMap } from '@validations'
import { errorHandler, getErrorTextFromBE } from '@helpers'

import "./styles.css"

const LoginScreen = () => {
  const [validate, setValidate] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const validator = (key, value, passValidate = false) => {
    if ((validate || passValidate) && ValidationsMap[key]?.isError(value)) {
      return ValidationsMap[key]?.helperText;
    }
    return '';
  };

  const handleClick = async () => {
    setValidate(true)
    if(!validator('email', email, true)
    && !validator('password', password, true)) {

      try {
        await login({email, password})
      } catch(errors) {
        if(errorHandler(errors)) {
          setErrors(errors)
        }
      } finally {
        setValidate(false)
      }
      
    }
  }

  const handleSocialClick = (e) => {
    e.preventDefault()
    toast.warn("Not implemented yet!")
  }

  return ( 
  <Container>
    <Logo/>
    <h1>Log in to your account</h1>
    <div className='form'>
      <div className="form__row">
        <button className="form__social" onClick={handleSocialClick}>
          <img src={googleUrl} alt="google icon" />
          <span>Google</span>
        </button>
        <button className="form__social" onClick={handleSocialClick}>
          <img src={githubUrl} alt="github icon" />
          <span>Github</span>
        </button>
      </div>
      <div className="form__devider">
        OR
      </div>
    <Field error={validator('email', email) || getErrorTextFromBE('email', errors)} className="form__item" value={email} handleChange={setEmail}/>
    <Field type="password" error={validator('password', password) || getErrorTextFromBE('password', errors)} className="form__item" value={password} handleChange={setPassword} />
    <div className="form__link-wrapper">
      <Link to="/forgot-password">Forgot your password?</Link>
    </div>
    <Button text="Log in to Qencode" fullWidth className="form__item" handleClick={handleClick}/>
    <div className="form__footer">
    Is your company new to Qencode? <a href="#" onClick={handleSocialClick}>Sign up</a>
    </div>
    </div>
  </Container> );
}
export default LoginScreen;