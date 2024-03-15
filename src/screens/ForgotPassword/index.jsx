import { useState } from "react"
import { useNavigate, useLocation} from "react-router-dom";

import Field from '@components/Field'
import Button from '@components/Button'
import Container from '@components/Container'
import Logo from '@components/Logo'
import { resetPassword } from '@api/index.api'

import { ValidationsMap } from '@validations'
import { errorHandler, getErrorTextFromBE } from '@helpers'



const ForgotPassword = () => {
  const [validate, setValidate] = useState(false)
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])
  const [succesScenario, setSuccesScenario] = useState(false)

  const navigate = useNavigate()

  const validator = (key, value, passValidate = false) => {
    if ((validate || passValidate) && ValidationsMap[key]?.isError(value)) {
      return ValidationsMap[key]?.helperText;
    }
    return '';
  };

  const handleClick= async () => {
    setValidate(true)
    if(!validator('email', email, true)) {

      try {
        const { CSRF } = await resetPassword({email}, succesScenario)
        navigate(`/reset-password/${CSRF}`)
      } catch(errors) {
        const err = errorHandler(errors)
        if(err) {
          setErrors(err)
        }
      } finally {
        setValidate(false)
      }
      
    }
  }

  const handeSuccesScenarion = ({ target: { checked } }) => {
    setSuccesScenario(checked)
  }

  return ( 
    <Container>
      <label className="sc">
      Enable successful scenario
      <input type="checkbox" onChange={handeSuccesScenarion} />
      </label>
    <Logo/>
    <h1>Forgot Password?</h1>
    <div className='form'>
    <Field error={validator('email', email) || getErrorTextFromBE('email', errors)} className="form__item" value={email} handleChange={setEmail} placeholder="Enter your email"/>
    <Button text="Send" fullWidth className="form__btn" handleClick={handleClick}/>
    <Button text="Cancel" fullWidth className="form__btn" handleClick={() => navigate(-1)} secondary/>
    </div>
  </Container>
  );
}
export default ForgotPassword;