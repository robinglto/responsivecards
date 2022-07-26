let fechaActual = new Date();


let diasemanal = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
console.log(diasemanal[fechaActual.getDay()])

let mesanio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octobre", "Noviembre", "Diciembre"];
console.log(mesanio[fechaActual.getMonth()])


let actualidad = `${diasemanal[fechaActual.getDay()]}, ${fechaActual.getDate()} de ${mesanio[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
console.log(actualidad);


let union = document.getElementById('fechaactual').innerHTML = actualidad;

let union2 = document.getElementById('fechaactual2').innerHTML = actualidad;


let union3 = document.getElementById('fechaactual3').innerHTML = actualidad;
