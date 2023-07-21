import Exposicao from './Exposicao';
import Historia from './Historia';
import Mapa from './Localizacao';
import Video from './VideoC';
import style from './conteudoPrincipal.module.scss';
import museu from './img/museu.png'

const ConteudoPrincipal = () => {
    return (
        <section className={style.conteudo__container}>
            <img src={museu} alt='Foto do interior do museu'/>
            <div className={style.video__mapa}>
                <Video/>
                <Mapa/>
            </div>
            <div className={style.exposicoes__historia}>
                <Exposicao/>
                <Historia style={style}/>
            </div>
        </section>
    )
}

export default ConteudoPrincipal;