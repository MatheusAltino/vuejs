new Vue({
    el: '#desafio',
    data: {
        nome: 'Harry Potter',
        idade: 15,
        imagem: "http://files.cod3r.com.br/curso-vue/vue.jpg"
    },
    methods: {
        multi() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
});