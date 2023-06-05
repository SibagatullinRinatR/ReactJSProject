import header__logo from '../../images/MIDEOVAKE.svg';
import header__login from '../../images/Vector.svg';
import style from './header.module.css';

function Header(props){
    return(
        <header className={style.app_header}>
          <img className='header__logo' alt='logo' src={header__logo}/>
          <img className='header__login' alt='login' src={header__login}/>
        </header>
    );
}
export default Header