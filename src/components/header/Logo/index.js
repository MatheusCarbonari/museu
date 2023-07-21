import logo from '../img/logo.png'

const Logo = (styles) => {
    return (
        <div className={styles.header_logo}>
            <img src={logo} alt='logo Museu Nacional'/>
        </div>
    )
}

export default Logo
