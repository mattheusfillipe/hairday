import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll('.period')


// Gera evento de click para cada lista (manha, tarde, noite)
periods.forEach(periods => {
    // Captura evento de click na lista.
    periods.addEventListener('click', async (event) => {
        if (event.target.classList.contains('cancel-icon')) {
            // Obtém a li pai do elemento clicado
            const item = event.target.closest('li')
            const { id } = item.dataset
            
            // Obtém o id do agendamento a partir do id do elemento.            
            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm) {
                    // Faz a requisição na API pra cancelar
                    await scheduleCancel({ id })
                    // Recarrega lista de agendamentos.
                    schedulesDay()
                }
            }

        }
    })
})