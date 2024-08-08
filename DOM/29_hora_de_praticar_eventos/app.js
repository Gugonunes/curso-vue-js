new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
      exibirAlerta() {
        alert('Bom dia')
      },
      salvarValor(event) {
        this.valor = event.target.value
      }
    }
})