// Obtener elementos del DOM
var cancelar = document.getElementById('Cancelar');
var btnOpenModal = document.getElementById('opencancelarBtn');
var btnCloseModal = document.getElementById('closecancelarBtn');
var spanClose = document.getElementsByClassName('close')[0];

// Abrir el modal cuando se haga clic en el botón
btnOpencancelar.onclick = function() {
    cancelar.style.display = 'block';
}

// Cerrar el modal cuando se haga clic en el botón de cerrar o fuera del modal
btnClosecancelar.onclick = function() {
    cancelar.style.display = 'none';
}

spanClose.onclick = function() {
    cancelar.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == cancelar) {
        cancelar.style.display = 'none';
    }
}
