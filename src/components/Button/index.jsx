import './styles.css'

const Button = ({text, fullWidth, className = "", handleClick, secondary}) => {
  return ( <button type="button" className={`btn ${fullWidth && 'btn_full-width'} ${secondary && 'btn_secondary'} ${className}`} onClick={handleClick}>
    {text}
  </button> );
}
 
export default Button;