/*
Necesitamos objeto player:
 - Responsabilidades:
   - tener control sobre la pelicula
   - ir a buscarla (a donde?)
   - visualmente debo ver controles
   - Visualmente debo ver la pelicula
*/

export default class Player {
    constructor() {
        this.pelicula = "Sin Pelicula" // Puede ser otra clase..
        this.state = "Stopped";// Podriamos otros String, playing... paused..
        this.showControls = true;
    }

    play() {
        let myVideo = document.getElementsByTagName("video");
        myVideo[0].play()
    }

    stop() {

    }

    forward() {

    }

    rewind() {

    }

    pause() {

    }

    loadMovie() {

    }

    render() {
        // Buscara el elemento con ID "player"
        // Pintara la pelicula
        // y SI tiene que mostrar controles... los mostrara..
        //<!--iframe width="560" height="315" src="https://www.youtube.com/embed/6mKJqFr9pdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe-->

        let myPlayerDiv = document.getElementById("player"); // Nos devuelve ese Div

        myPlayerDiv.innerHTML = '<video width="100%" > \
                                    <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"> \
                                    <source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg">  \
                                    Your browser does not support the video tag. \
                                </video>'

                                '<div style="backgroundolor: 00000045>'
                                
        if (this.showControls) {
            this.renderControls()
        }
    }

    renderControls() {

    }
}
