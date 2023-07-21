import Menu from "../header/Menu"
import styles from '../header/header.module.scss'
import './rodape.scss'
import risco from './fundo-rodape.png'

const Rodape = () => {
    return(
        <footer className="rodape__container">
            <div>
                <img src={risco} alt="Risco para separar o rodape"/>
            </div>
            <div className="div-rodape">
                <ul className="ul-rodape">
                    <Menu styles={styles}/>
                </ul>
            </div>
            <div className="creditos__rodape">
                <p>2019</p>
                <p>
                    <a>Museu Nacional</a> - &copy;Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Rodape