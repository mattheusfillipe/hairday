import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
    try {
        // Faz a requisição para enviar os dados do agendamento.
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: String(id), name, when }),
        })

        // Exibe mensagem de agendamento realizado.
        alert("Agendamento realizado com sucesso!")
    } catch (e) {
        console.log(e)
        alert("Não foi possível realizar o agendamento. Tente novamente mais tarde.")
    }
}