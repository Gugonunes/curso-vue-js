new Vue({
  el: '#desafio',
  data: {
    nome: 'Gustavo Alexandre',
    idade: 23,
    linkImagem: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/03/07/759717358-pug.jpg'
  },
  methods: {
    multiplicadorDeIdade () {
      return this.idade * 3
    },
    gerarNumeroRandomico () {
      return Math.random()
    }
  }
})