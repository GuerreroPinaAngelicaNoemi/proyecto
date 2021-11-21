
const btnToggle = document.querySelector('.icono');

btnToggle.addEventListener('click', function () {
  console.log('click')
  document.getElementById('menulateral').classList.toggle('activacion');
  console.log(document.getElementById('menulateral'));
}); 



/* AddEventListener () es una función incorporada en 
JavaScript que toma el evento para escuchar y un segundo 
argumento para ser llamado cada vez que se activa el evento 
descrito. Se puede agregar cualquier número de controladores
de eventos a un solo elemento sin sobrescribir los 
controladores de eventos existentes */


/* El método querySelector () devuelve el primer elemento 
que coincide con un selector o selectores CSS especificados
en el documento.    */

/* Es un método que permite seleccionar un elemento del 
documento por medio del valor del atributo id que se le 
haya asignado */

/* toggle() solo te permite alternar entre 2 acciones 
mientras que . click() hace una acción concreta 
por cada click. */