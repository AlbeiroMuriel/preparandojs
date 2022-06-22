const miBtn = document.querySelector("#btn");
const miBtn2 = document.querySelector("#btn2");


const milabel = document.querySelector("#resultado");

miBtn.addEventListener('click',function(){
    const mifoto = document.querySelector("#fotico");
    const miTitulo = document.querySelector("#titulo");
    const miDescripcion = document.querySelector(".descripcion");
mifoto.src = "./img/fondo03.jpg";
miTitulo.innerHTML ="Finca mia";
miDescripcion.textContent="esta es la descripcion"
})

miBtn2.addEventListener('click',function(){
    const min1 = document.querySelector("#n1").value;
    const min2 = document.querySelector("#n2").value;      
    const result = Number(min1) * Number(min2);    
    milabel.textContent=result;
})





// function foto(){
//     // alert("hola")
// const mifoto = document.querySelector("#fotico");
// const miTitulo = document.querySelector("#titulo"); 
// const miDescripcion = document.querySelector(".descripcion");

// mifoto.src = "./img/fondo03.jpg";
// miTitulo.innerHTML ="Finca mia";
// miDescripcion.textContent="esta es la descripcion"

// }