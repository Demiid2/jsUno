let logged = false;
let fakeCaptcha = Math.floor(Math.random() * 10000);
let answer;


class Evento {
    constructor(title, description, date) {
        this.title = title,
        this.description = description,
        this.date = date
    }
}
let calendar = [
    new Evento('Evento de jueves.', 'Para los que se quieran sumar los jueves estamos de 5pm a 8pm.', 'Jueves a las 17 horas.')
];

const ask = (x) => { answer = prompt(x); };
function addEvents() {
    ask('desea usted agregar más eventos? Responda con SI/NO');
    if (answer.toUpperCase() === 'SI') {
        ask('ingrese titulo del evento, descripcion y fecha separados por una / ')
        let uno = answer.split('/');
        calendar.push(new Evento(uno[0], uno[1], uno[2]));
        showCalendar(logged);
    }
    else {
        alert('ok, eso es todo lo que podemos ofrecerte hasta ahora.')
    }
}

function showCalendar(x) {
    if (x == true) {
        let string = '';
        calendar.forEach(elemento => {
            string += '\nTítulo: ' + elemento.title +
                '\nDescripcion: ' + elemento.description +
                '\nFecha a realizarse: ' + elemento.date
        })
        alert(string)
        addEvents();
    }
    else {
        alert('No te puedo mostrar los eventos ya que no te aprendiste la contraseña JA.')
    }
}

function login() {
    alert(`tu contraseña es: ${fakeCaptcha}, anotala en caso que la necesites.`);
    ask('Para iniciar sesion decime tu contraseña');
    for (let i = 3; i > 0; i--) {
        if (answer == fakeCaptcha) {
            alert('Puedes acceder');
            i = 0;
            logged = true;
        }
        else {
            ask(`Volvé a ingresar la contraseña dada al inicio te quedan ${i} intentos`);
        }
    }
    showCalendar(logged);
}

login();


