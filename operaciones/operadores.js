function Validar(simbolo){
    const numero1 = document.querySelector("#nro1").value;    
    const numero2 = document.querySelector("#nro2").value;
    const VerResultado = document.querySelector("#Resultado");    

    if(numero1 == "" || numero2 == "") {          
        VerResultado.textContent = "Uno de los numeros es NULL";
    } else{
        if (isNaN(numero1) || isNaN(numero2)) {
          VerResultado.textContent = "Datos  no validos";
        }
        else{
            switch(simbolo){
                case '+': VerResultado.textContent="Suma = " + (parseInt(numero1) + parseInt(numero2)) ;break;
                case '-': VerResultado.textContent="Suma = " + (parseInt(numero1) - parseInt(numero2)) ;break;
                case '*': VerResultado.textContent="Suma = " + (parseInt(numero1) * parseInt(numero2)) ;break;
                case '/': VerResultado.textContent="Suma = " + (parseInt(numero1) / parseInt(numero2)) ;break;

                default:VerResultado.textContent="error";break;
            }
        }
    }
}
btnSumar.addEventListener("click", ()=>{Validar('+')});
btnRestar.addEventListener("click", ()=>{Validar('-')});
btnMultiplicar.addEventListener("click", ()=>{Validar('*')});
btnDividir.addEventListener("click", ()=>{Validar('/')});
btnLimpiar.addEventListener("click",()=>{
    const numero1=(document.querySelector("#nro1").value="");
    const numero2=(document.querySelector("#nro2").value="");
    const VerResultado=(document.querySelector("#Resultado").textContent="");
})
