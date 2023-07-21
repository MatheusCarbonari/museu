const ListaMenu = ({item, styles}) => {
    return (
        <li>
            <a key={item} href="/" className={styles.header__menu__link}>{item}</a>
        </li>
    )
}

export default ListaMenu;