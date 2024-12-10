import dayjs from 'dayjs'

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega a data atual e define a data mínima.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (e) => {
    e.preventDefault()

    console.log('Enviado')
}