// Ejemplo 1
// export let p = new Promise((resolve,reject)=>{
//     return resolve("Hola soy la accion afirmativa resolve");
//     // return reject("Hola soy la accion negativa reject");
// });


// Ejemplo 2
const boca = p1=>{
    return new Promise((resolve,reject)=>{
        resolve(p1);
    })
}
export default boca;