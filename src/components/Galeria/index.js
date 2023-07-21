import styles from './galeria.module.scss'
import fotos from './fotos.json'
import ImagemDaGaleria from './Fundo'

const Galeria = () => {

    return (
        <div className={styles.galeria__container}>
            {fotos.map(item => {
                return <ImagemDaGaleria key={item.id} foto={item} styles={styles}/> 
            })}
        </div>
    )
}

export default Galeria