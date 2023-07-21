import Botao from "./BotaoData"
import Campos from "./Campos"

const DisponibilidadeDeVisitas = ({styles}) => {
    return (
        <div className={styles.datas__container}>
            <h4>Faça uma Visita</h4>
            <form>
                <Campos styles={styles}/>
                <Botao styles={styles}/>
            </form>
        </div>
    )
}

export default DisponibilidadeDeVisitas