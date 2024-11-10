// Array para almacenar los gastos
const gastos = [];

// Función para agregar un gasto
function agregarGasto() {
    const tipo = document.getElementById("tipo").value;
    const monto = parseFloat(document.getElementById("monto").value);

    if (!monto || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    // Crear un objeto de gasto y añadirlo al array
    const gasto = { tipo, monto };
    gastos.push(gasto);

    // Limpiar el campo de monto
    document.getElementById("monto").value = "";

    // Actualizar la lista de gastos en el HTML
    mostrarGastos();
}

// Función para mostrar los gastos en la lista
function mostrarGastos() {
    const listaGastos = document.getElementById("listaGastos");
    listaGastos.innerHTML = ""; // Limpiar la lista antes de mostrarla

    // Filtrar y mostrar solo los gastos relevantes (alcohol, videojuegos, tabaco)
    const tiposPermitidos = ["alcohol", "videojuegos", "tabaco"];
    const gastosFiltrados = gastos.filter(gasto => tiposPermitidos.includes(gasto.tipo));

    // Mostrar cada gasto en la lista
    gastosFiltrados.forEach(gasto => {
        const li = document.createElement("li");
        li.textContent = `Tipo: ${gasto.tipo}, Monto: $${gasto.monto.toFixed(2)}`;
        listaGastos.appendChild(li);
    });
}
