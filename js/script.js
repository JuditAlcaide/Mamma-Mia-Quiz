const inicio = document.getElementById('inicio');
const preguntasDiv = document.getElementById('preguntas');
const resultadoDiv = document.getElementById('resultado');
const personajeSpan = document.getElementById('personaje');
const imgSpan = document.getElementById('imgPersonaje');
const descripcionPersonaje = document.getElementById('descripcionPersonaje');

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
    let descripcion;

    if (puntosTotales < 30) {
        personaje = "Donna";
        imagen = "https://i.postimg.cc/FzjZ2dN9/Donna.jpg";
        descripcion = "Eres como Donna Sheridan, una persona independiente, apasionada y con un gran corazón. Te enfrentas a la vida con valentía y no temes tomar decisiones difíciles por el bien de las personas que amas. Tu energía y autenticidad inspiran a quienes te rodean, y aunque a veces cargas mucho sobre tus hombros, nunca pierdes esa chispa que te hace única.";
    } else if (puntosTotales < 50) {
        personaje = "Tanya";
        imagen = "https://i.postimg.cc/qBnjtYn9/Tanya.jpg";
        descripcion = "Eres como Tanya Chesham-Leigh, sofisticada, segura de ti misma y con un gran sentido del humor. Disfrutas de los placeres de la vida y no te tomas las cosas demasiado en serio. Sabes lo que quieres y cómo conseguirlo, y aunque puedes parecer despreocupada, siempre estás ahí para tus amigas cuando te necesitan.";
    } else {
        personaje = "Rosie";
        imagen = "https://i.postimg.cc/4NQPP9WP/Rosie.jpg";
        descripcion = "Eres como Rosie Mulligan, una persona divertida, amable y llena de creatividad. Siempre sabes cómo alegrar el día de los demás con tu humor y tus ocurrencias. Te encanta vivir el momento y no necesitas seguir las expectativas de los demás para ser feliz. Tu lealtad y espontaneidad te convierten en un pilar en tu grupo de amigas.";
    }
    personajeSpan.textContent = personaje;
    if (imgSpan) {
        imgSpan.src = imagen;
    }
    descripcionPersonaje.textContent = descripcion;
}