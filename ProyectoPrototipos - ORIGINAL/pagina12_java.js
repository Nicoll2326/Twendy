const table = document.getElementById('inventory-table');
const addRowBtn = document.getElementById('add-row-btn');
const deleteRowBtn = document.getElementById('delete-row-btn');

addRowBtn.addEventListener('click', () => {
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `
        
        <td><input type="text"></td>
        <td><input type="number"></td>
        <td><input type="number"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>  
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><i class="fa-solid fa-trash-can"></i></td> 
    `;
});

// Seleccionar todos los iconos de eliminar//
const eliminarIconos = document.querySelectorAll('.eliminar_celda');

// Agregar evento de clic a cada icono //
eliminarIconos.forEach(icono => {
  icono.addEventListener('click', (e) => {
    // Seleccionar la fila que contiene el icono//
    const fila = e.target.parentNode.parentNode;
    // Eliminar la fila //
    fila.remove();
  });
});