const Video = () => {
    return (
        <div>
            <h3>Vídeo: Conheça o Museu</h3>
            <iframe 
                width="310" 
                height="170" 
                src="https://www.youtube.com/embed/RGUYb-hivrc" 
                title="video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            >
            </iframe>
        </div>
    )
}

export default Video;