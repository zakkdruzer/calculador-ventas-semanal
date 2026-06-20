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

// Promedio de ventas por semana
let promedio = totalGeneral / 2;

// Mostrar resultados
document.write("<h2>Reporte de Ventas</h2>");

let indice = 0;
semana = 1;

do {
  let totalSemana = 0;
  document.write("<p><strong>Semana " + semana + ":</strong><br>");

  for (let dia = 1; dia <= 3; dia++) {
    document.write("Día " + dia + ": $" + ventas[indice] + "<br>");
    totalSemana += ventas[indice];
    indice++;
  }

  document.write("Total de la semana " + semana + ": $" + totalSemana + "</p>");
  semana++;
} while (semana <= 2);

document.write("<hr>");
document.write("<p><strong>Total de ventas de las 2 semanas:</strong> $" + totalGeneral + "</p>");
document.write("<p><strong>Promedio de ventas de las 2 semanas:</strong> $" + promedio.toFixed(2) + "</p>");