//CODIGO PARA EL RELOG
const poneFecha = document.getElementById("fecha");
const poneHora = document.getElementById("hora");
const regresiva = document.getElementById("cuenta");

function obtenerFecha() {
    const cargarFecha = new Date();
    conversion = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }
    poneFecha.innerHTML = cargarFecha.toLocaleDateString('es', conversion);
}

function obtenerHora() {
    const currenDate = new Date();
    let horas = currenDate.getHours();
    let minutos = currenDate.getMinutes();
    let segundos = currenDate.getSeconds();
    poneHora.innerHTML = `${horas} : ${minutos} : ${segundos}`;

}


setInterval(obtenerHora, 1000);
obtenerFecha();



//OTRO CODIGO PARA JAVASCRIPT PARA CUENTA REGRESIVA

const obtenerDato = dato =>{

    let datoActual = new Date(),
        tiempo = (new Date(dato) - datoActual) / 1000,
        segundos = Math.floor(tiempo % 60),
        minutos = Math.floor(tiempo / 60 % 60),
        horas = Math.floor(tiempo / 3600 % 24),
        dias = Math.floor(tiempo / (3600 * 24));

    return {
        segundos,
        minutos,
        horas,
        dias,

    }

};


function mostrar(){
const obj = obtenerDato('Dec 31 2023 20:28:07 GMT-0400');
regresiva.innerHTML=`${obj.dias} dias : ${obj.horas} hrs : ${obj.minutos} min: ${obj.segundos} seg`;
}




