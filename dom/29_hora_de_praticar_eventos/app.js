new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            return alert('Estou alertando!')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})