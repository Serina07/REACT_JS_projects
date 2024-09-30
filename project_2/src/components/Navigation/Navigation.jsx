import style from "./Navigation.module.css"
import classNames from 'classnames'

function Navigation() {
  return (
    <nav className= {classNames(style.navigation, style.container)}>
        <div className={style.logo}>
            <img src="/images/CafeLogo.png" alt="logo" />
        </div>
        <div className={style.navBar}>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Career</li>
            </ul>
        </div>
        <div className={style.button}>
            <button className={style.login}>
                Login
            </button>
            <button className={style.signup}>
                Sign Up
            </button>
        </div>
    </nav>
  )
}

export default Navigation