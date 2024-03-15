import logoUrl from "@assets/logo.svg"
import './styles.css';

const Logo = () => {
  return ( <div className="logo">
    <img src={logoUrl} alt="logo" />
  </div>);
}
 
export default Logo;