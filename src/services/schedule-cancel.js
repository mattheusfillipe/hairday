import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        })

        alert("Agendamento cancelado com sucesso!")
    } catch (e) {
       console.log(e)
        alert("Ocorreu um erro ao cancelar o agendamento. Tente novamente.") 
    }
}