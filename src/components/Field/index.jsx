import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

import './styles.css'

const Field = ({ className = '' , error, handleChange, placeholder='', type = 'text' ,label}) => {
  const [showPass, setShowPass] = useState(type)
  const isPasswordField = type === "password"

  const handleShowPassword = () => {
    if(showPass === "password") {
      setShowPass("text")
      return
    }

    setShowPass("password")
  }

  return ( 
    <div className={`field ${className}`} >
      {label && <label>{label}</label>}
      <div className="field__input-wrapper">
      {isPasswordField && 
        <button type="button" className="field__btn" onClick={handleShowPassword}>
          {showPass === "password" ? <FaEye /> : <FaEyeSlash/> }
        </button>
      }
      <input className={`field__input ${error && 'error'}`} style={isPasswordField ? { paddingRight: 40 } : undefined} onChange={(e) => handleChange(e.target.value)} placeholder={placeholder} type={showPass} />
      </div>
      {error && <div className='field__error'>{error}</div>}
    </div>
    
  );
}

export default Field;