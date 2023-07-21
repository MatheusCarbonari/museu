import styles from './header.module.scss'
import Logo from './Logo';
import Menu from './Menu'

const Header = () => {
    return (
        <header className={styles.header__container}>
            <Logo styles={styles}/>
            <Menu styles={styles}/>
        </header>
    )
}

export default Header;