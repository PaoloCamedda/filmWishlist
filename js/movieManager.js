"ause strict";
class MovieManager{

    constructor(){
        this.movies=[];

        this.createWishList();
    }

    /*questo metodo dovrebbe prendere da un database i film associat
    i ad un utente specifico per crearne la whislist
    */
    createWishList(){
        this.addMovie("Il mio vicino Totoro",true,"Animazione","public","2025-10-08");
        this.addMovie("Dead Pool",true,"Azione","private","2024-12-15");
        this.addMovie("Saw X",false,"Horror","public","2026-05-21");

    }

    addMovie(titolo , imperdibile,categoria,visibilita,scadenza){
        this.movies.push(new movie(titolo,imperdibile,categoria,visibilita,scadenza));
    }

}