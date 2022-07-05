const relogio = document.querySelector('.relogio');

let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{ hour12:false, timeZone:'UTC'});

}
function iniciaRelogio(){
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}
function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{hour12:false});
}

let horaAtual = mostraHora();
const div = document.createElement('div');
div.innerHTML = horaAtual;
const hora = document.querySelector('.hora');
hora.appendChild(div);

document.addEventListener('click', function(event){
    const elemento = event.target;
    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if(elemento.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
    if(elemento.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = ('00:00:00');
        segundos = 0;
    }
}); 