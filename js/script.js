const inicio = document.getElementById('inicio');
const preguntasDiv = document.getElementById('preguntas');
const resultadoDiv = document.getElementById('resultado');
const personajeSpan = document.getElementById('personaje');
const imgSpan = document.getElementById('imgPersonaje');

let puntosTotales = 0;
let preguntaActual = 0;
const opciones = { A: 2, B: 4, C: 6};

document.getElementById('comenzar').addEventListener('click', () => {
    inicio.style.display = 'none';
    preguntasDiv.style.display = 'block';
    mostrarPregunta(preguntaActual);
});

function mostrarPregunta(indice) {
    const preguntas = document.querySelectorAll('.parentC');
    preguntas.forEach((pregunta, i) => {
        pregunta.style.display = i === indice ? 'block' : 'none';
    });
}

document.querySelectorAll('.opcion').forEach(boton => {
    boton.addEventListener('click', (evento) => {
        const respuesta = evento.target.dataset.respuesta;
        puntosTotales += opciones[respuesta];

        preguntaActual++;
        const preguntas = document. querySelectorAll('.parentC');

        if(preguntaActual < preguntas.length) {
            mostrarPregunta(preguntaActual);
        } else {
            mostrarResultado();
        }
    });
});

function mostrarResultado() {
    preguntasDiv.style.display = 'none';
    resultadoDiv.style.display = 'block';

    let personaje;
    let imagen;

    if (puntosTotales < 30) {
        personaje = "Donna";
        imagen = "https://i.postimg.cc/FzjZ2dN9/Donna.jpg";
    } else if (puntosTotales < 50) {
        personaje = "Tanya";
        imagen = "https://i.postimg.cc/qBnjtYn9/Tanya.jpg";
    } else {
        personaje = "Rosie";
        imagen = "https://i.postimg.cc/4NQPP9WP/Rosie.jpg";
    }
    personajeSpan.textContent = personaje;
    if (imgSpan) {
        imgSpan.src = imagen;
    }
}