const ImagemDaGaleria = ({foto, styles}) => {
    return (
        
        <>
            <div className={styles.teste}>
            <a className={styles.imagem__de__fundo} style={{background: `url(${foto.pathFundo})`}}>
                <img src={foto.path} alt={foto.titulo}/>
            </a>
            </div>
        </>
        
    )
}

export default ImagemDaGaleria