import Depoimento from './Depoimento';
import styles from './aside.module.scss'
import DisponibilidadeDeVisitas from './Datas';
import Galeria from '../Galeria';

const Aside = () => {
    return (
        <section className={styles.aside__container}>
            <Depoimento styles={styles}/>
            <DisponibilidadeDeVisitas styles={styles}/>
            <Galeria/>
        </section>
    )
}

export default Aside;