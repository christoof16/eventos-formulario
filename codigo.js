let alumnos = [{
    nombre: "chris",
    email: "christoof16@gmail.com",
    materia: "fisica",

}
,
{
    nombre: "lalo landa",
    email: "landa@gmail.com",
    materia: "quimica",
    
},
{
    nombre: "juan",
    email: "john@gmail.com",
    materia: "biologia",
    
},
{
    nombre: "raul",
    email: "raoul@gmail.com",
    materia: "matematicas",
    
}];

let boton = document.querySelector(".boton-confirmar");
let contenedor = document.querySelector(".grid-container");

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class=" grid-item semana">
        <select class="semana-elegida">
            <option value="semana 1">semana 1</option>
            <option value="semana 2">semana 2</option>
        </select>
    </div>
    `;
     contenedor.innerHTML+=htmlCode;
}

// for(alumno in alumnos){
//     console.log(alumnos[alumno]);
// }

// for(alumno in alumnos){
//     for(datos in alumnos[alumno]){
//         console.log(alumnos[alumno][datos]);
//     }
// }

boton.addEventListener("click",()=>{
    let confirmar = confirm("realmente quieres confirmar? ");
    if(confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas =  document.querySelectorAll(".semana-elegida");
        for(elemento in  elementos){
            semana = elementos[elemento];
            semana.innerHTML= semanasElegidas[elemento].value;
        }
    }
   
})