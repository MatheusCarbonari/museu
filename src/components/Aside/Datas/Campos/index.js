const Campos = ({styles}) => {
    return (
        <fieldset className={styles}>
            <legend>Selecione uma Data</legend>
            <label>Data</label>
            <input className={styles.input__1} type="text" placeholder="dd/mm/aaaa"/>
            <label>Quant. de Pessoas</label>
            <input className={styles.input__2} type="text" placeholder="1"/>
        </fieldset>
    )
}

export default Campos