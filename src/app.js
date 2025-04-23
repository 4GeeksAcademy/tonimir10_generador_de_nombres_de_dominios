import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};*/
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  
  
  const generadorDeDominios = ()=>{
    //Solucion con for
   /*for(let i = 0; i < pronoun.length; i++){
    for(let z = 0; z < adj.length; z++){
      for(let j = 0; j < noun.length; j++){
        console.log(pronoun[i] + adj[z] +noun[j]);
      }
    }
   }*/

    //Solucion con foreach
    const pronounList = pronoun.forEach((elemento) =>{
      

      const adjList =  adj.forEach((elemeto2) =>{
        
        
        const nounList =  noun.forEach((elemento3) =>{
          console.log(elemento + elemeto2 + elemento3 + ".com");
        });

      }); 
      
    }); 
   
    
    
    }
  

  generadorDeDominios();