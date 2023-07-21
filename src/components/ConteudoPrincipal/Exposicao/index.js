
const Exposicao = () => {

    const listaExposicoes = [
        "Os Assustadores Insetos",
        "O Crânio de Luzia, a Mulher Mais Antiga do Brasil",
        "Preguiça Gigante e Tigre-Dentes-De-Sabre",
        "Plantas do Brasil Central",
        "Teresa Cristina: A Imperatriz Arqueóloga",
        "Arte com Dinossauros - Paleoarte",
        "Veja Todos(65)"
    ]

    return(
        <div>
            <h3>Exposições</h3>
            <ul>
                {listaExposicoes.map(item => {
                    return (
                        <li key={item}>
                            <a href="" >{item}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Exposicao