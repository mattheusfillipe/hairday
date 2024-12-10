import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de date.
const selectedDate = document.getElementById("date")

export function schedulesDay() {
    const date = selectedDate.value
    // Renderiza horas disponiveis.
    hoursLoad({ date })
}