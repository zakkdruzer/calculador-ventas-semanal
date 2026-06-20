// Mensaje inicial para el usuario
window.alert("Ingresa las ventas de 2 semanas, 3 días por semana");

// Arreglo para guardar todas las ventas
let ventas = [];

// Suma total de todas las ventas
let totalGeneral = 0;

// Variable para recorrer las semanas
let semana = 1;

// Ingreso de datos: 2 semanas, 3 días por semana
do {
  window.alert("Semana " + semana);

  for (let dia = 1; dia <= 3; dia++) {
    let venta;

    // Validación para que el usuario ingrese un número válido
    do {
      venta = parseFloat(prompt("Ingrese la venta del día " + dia + " de la semana " + semana + ":"));
    } while (isNaN(venta));

    // Guardar la venta y acumular el total general
    ventas.push(venta);
    totalGeneral += venta;
  }

  semana++;
} while (semana <= 2);

// Promedio de ventas de las 2 semanas
let promedio = totalGeneral / 2;

// Variable donde construiremos el HTML del resultado
let html = `<h2 class="h5 mb-3">Reporte de ventas</h2>`;

// Índice para recorrer el arreglo ventas
let indice = 0;
semana = 1;

// Mostrar detalle de cada semana
do {
  let totalSemana = 0;

  html += `<div class="mb-3">`;
  html += `<p class="fw-bold mb-1">Semana ${semana}:</p>`;

  for (let dia = 1; dia <= 3; dia++) {
    html += `<div>Día ${dia}: $${ventas[indice]}</div>`;
    totalSemana += ventas[indice];
    indice++;
  }

  html += `<div class="mt-1">Total de la semana ${semana}: $${totalSemana}</div>`;
  html += `</div>`;

  semana++;
} while (semana <= 2);

// Resumen final
html += `<hr>`;
html += `<p class="mb-1"><strong>Total de ventas de las 2 semanas:</strong> $${totalGeneral}</p>`;
html += `<p class="mb-0"><strong>Promedio de ventas de las 2 semanas:</strong> $${promedio.toFixed(2)}</p>`;

// Insertar el contenido en el recuadro de Bootstrap
document.getElementById("resultado").innerHTML = html;