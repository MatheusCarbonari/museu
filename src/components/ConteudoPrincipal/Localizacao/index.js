const Mapa = () => {
    return (
        <div>
            <h3>Mapa: encontre o Museu</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.206446893
                7083!2d-43.23101357403156!3d-22.905754995637604!2m3!1f0!2f0!3f0!3m2!1i1024!2i7
                68!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11e9a933d38ce3!2sMuseu%20Nacional%20-%20U
                FRJ!5e0!3m2!1spt-BR!2sbr!4v1655922133574!5m2!1spt-BR!2sbr" 
                style={{width:"310", height:"170", border:0, allowfullscreen:""}}
                loading="lazy" 
            ></iframe>
        </div>
    )
}

export default Mapa;