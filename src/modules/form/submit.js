import dayjs from 'dayjs'

import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega a data atual e define a data mínima.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (e) => {
    e.preventDefault()

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim()
        if (!name) {
            return alert ("Informe o nome do cliente")
        }

        // recupera o horário selecionado

        const hourSelected = document.querySelector('.hour-selected')
        if (!hourSelected) {
            return alert ("Selecione um horário")
        }

        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(':')
        

        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        // Gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })

    } catch (e) {
        alert("Não foi possível realizar o agendamento.")
        console.log(e)
    }
}