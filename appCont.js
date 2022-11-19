// Seleccionamos los ID del HTML
const palabrasIngresadas = document.getElementById("palabras-ingresadas");
const btnCalcular = document.getElementById("calcular");
const btnCalcularPalabras = document.getElementById("calcularPalabras");

// Ponemos a escuchar a los botones
btnCalcular.addEventListener("click", calcular);
btnCalcularPalabras.addEventListener("click", calcularPalabras);

// Fncion de calcular caracteres
function calcular(e){
    e.preventDefault();
    const cantidad = palabrasIngresadas.value;
    let contarPalabras = cantidad.length;
    caracteres.innerHTML = `${contarPalabras}`
}  

// Fncion de calcular palabras
function calcularPalabras(e){
    e.preventDefault();
    const cantidadReal = palabrasIngresadas.value;
    let cantidadRealPalabras = cantidadReal.split(" ");
    let contarPalabrasReal = cantidadRealPalabras.length;
    palabras.innerHTML = `${contarPalabrasReal}`
}  