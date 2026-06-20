window.alert("Ingresa las ventas de 2 semanas, 3 días por semana");

let ventas = [];
let totalGeneral = 0;
let semana = 1;

do {
  window.alert("Semana " + semana);

  for (let dia = 1; dia <= 3; dia++) {
    let venta;

    do {
      venta = parseFloat(prompt("Ingrese la venta del día " + dia + " de la semana " + semana + ":"));
    } while (isNaN(venta));

    ventas.push(venta);
    totalGeneral += venta;
  }

  semana++;
} while (semana <= 2);

let promedio = totalGeneral / 2;

let html = `<h2 class="h5 mb-3">Reporte de ventas</h2>`;

let indice = 0;
semana = 1;

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

html += `<hr>`;
html += `<p class="mb-1"><strong>Total de ventas de las 2 semanas:</strong> $${totalGeneral}</p>`;
html += `<p class="mb-0"><strong>Promedio de ventas de las 2 semanas:</strong> $${promedio.toFixed(2)}</p>`;

document.getElementById("resultado").innerHTML = html;