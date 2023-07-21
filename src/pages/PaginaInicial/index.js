import Aside from '../../components/Aside';
import ConteudoPrincipal from '../../components/ConteudoPrincipal';
import Header from '../../components/header'
import Rodape from '../../components/rodape';
import '../../styles/globalStyles.module.scss'
import './paginaInicial.scss'

function PaginaInicial(){
    return (
        <>
            <Header/>
            <section className='principal-container'>
                <ConteudoPrincipal/>
                <Aside/>
            </section>
            <Rodape/>
        </>
    )
}

export default PaginaInicial;