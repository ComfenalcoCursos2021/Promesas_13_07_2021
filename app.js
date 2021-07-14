// Ejemplo 1
// import {p} from './Promise/main.js';


// Ejemplo 2
import boca from './Promise/main.js';

addEventListener("DOMContentLoaded", function(e){
    // Ejemplo 1
    // p.then(res=>{
    //     console.log("Hola soy el then");
    //     console.log(res);
    // }).catch(res=>{
    //     console.log("Hola soy el catch");
    //     console.log(res);
    // })


    // Ejemplo 2
    boca({id: "Hola Mundo"}).then(res=>{
        console.log(res);
    }).catch(res=>{
        console.log(res);
    })
    
})




