"use strict";

class movie{
    
    static count =0;

    constructor( titolo,impedibile ,categ,vis,scadenza=null){
        this.titolo=titolo;
        this.imperdibile=impedibile;
        this.categorie=categ;
        this.visibility=vis;
        if(scadenza){
            this.deadline=scadenza;
    }
        this.id=movie.count++;
    }
}