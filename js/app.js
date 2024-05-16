"use strict";

class App{
    
    constructor(leftSidebar,moviesConteiner,addButton){
        this.moviesConteiner=moviesConteiner;
        this.leftSidebar=leftSidebar;
        this.addButton=addButton;
        /*popolamento film 

    moviesConteiner.querySelectorAll("table tr")
    .forEach(tr_el => {
        tr_el.querySelectorAll("td")
        .forEach(td_el =>{
            td_el.innerText = "Ciao";
        });
        
    });
    */
   this.movieManager=new MovieManager();
   this.movies=this.movieManager.movies;

   this.movies.forEach(m => {
        let tr= document.createElement("tr");
        
        let th =document.createElement("th");
        const a = document.createAttribute("scope");
        a.value="row";
        th.setAttributeNode(a);
        th.innerText=m.id;

        tr.appendChild(th); 
        this.moviesConteiner.querySelector("tbody").appendChild(tr);

    
   
    });
   
    // aggiornare lista film e aggiornare eventi clic per ogni filtro 


    // gestione dell apertura e chiusura modale del form 
    
}

}

