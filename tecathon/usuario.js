document.addEventListener("DOMContentLoaded", function () {
    // Obtener los datos de localStorage
    const ingresoMensual = parseFloat(localStorage.getItem("ingresoMensual")) || 0;
    const cuentaTotal = parseFloat(localStorage.getItem("cuentaTotal")) || 0;

    // Mostrar saldo en la cuenta
    document.getElementById("saldo").textContent = `$${cuentaTotal.toLocaleString()}`;

    // Calcular porcentaje de gastos
    const gastos = [
        { descripcion: "Comida", monto: 2000 },
        { descripcion: "Bebidas Alcohólicas", monto: 3500 },
        { descripcion: "Videojuegos", monto: 1500 }
    ];

    let totalGastos = gastos.reduce((sum, gasto) => sum + gasto.monto, 0);
    let porcentajeGastos = ingresoMensual ? (totalGastos / ingresoMensual) * 100 : 0;
    document.getElementById("porcentajeGastos").textContent = `${Math.round(porcentajeGastos)}%`;

    // Mostrar historial de gastos
    const historialGastos = document.getElementById("historialGastos");
    historialGastos.innerHTML = gastos.map(gasto => `<li>${gasto.descripcion} - $${gasto.monto.toLocaleString()}</li>`).join("");

    // Agregar función para agregar una tarjeta
    window.agregarTarjeta = function () {
        const nuevaTarjeta = prompt("Ingrese el número de la nueva tarjeta:");
        if (nuevaTarjeta) {
            document.getElementById("tarjeta").textContent = nuevaTarjeta;
        }
    };
});
