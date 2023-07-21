import imagem from './depoimento.png'

const Depoimento = ({styles}) => {
    return(
        <div>
            <img className={styles.depoimento} src={imagem} alt="Depoimento sobre o Museu"/>
        </div>
    )
}

export default Depoimento