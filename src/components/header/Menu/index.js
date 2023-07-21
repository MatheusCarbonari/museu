import ListaMenu from "./Lista";

const Menu = ({styles}) => {

    const listaMenu = [
        "home",
        "exposicoes",
        "pesquisar",
        "acervo",
        "videos",
        "fotos",
        "contato"
    ]

    return (
        <div className={styles.header__menu}>
            <ul>
                {listaMenu.map(item => {
                    return <ListaMenu key={item} item={item} styles={styles}/>
                })}
            </ul>
        </div>
    )
}

export default Menu;