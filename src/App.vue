<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>

      <b-nav-item href="#" class="textP">PAINEL COVID - 19</b-nav-item>
      <b-nav-item href="#" class="textPsimples">Painel Geral</b-nav-item>

      <b-nav-item-dropdown text="Sobre" class="textPsimplesSobre" >
        <b-dropdown-item href="#">Nós</b-dropdown-item>
        <b-dropdown-item href="#">Sistema</b-dropdown-item>
        <b-dropdown-item href="#">Contato</b-dropdown-item>
      </b-nav-item-dropdown>

    </b-navbar-nav>
  </b-navbar>

   <div class="dadosMarg  container">

      <b-dropdown split text="Selecionar Região" class="m-6">
        <b-dropdown-item href="#">Centro-Oeste</b-dropdown-item>
        <b-dropdown-item href="#">Sul</b-dropdown-item>
        <b-dropdown-item href="#">Norte</b-dropdown-item>
      </b-dropdown>

  <table class="table table-dark" id="myTable"> 
  <thead>
    <tr>
      <th scope="col">Estados</th>
      <th scope="col">Casos</th>
      <th scope="col">Óbitos</th>
      <th scope="col">Atualizado</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="produtos of produtos" :key="produtos.combinedKey">
      <td>{{produtos.combinedKey}}</td>
      <td>{{produtos.confirmed}}</td>
      <td>{{produtos.deaths}}</td>
      <td>{{null}}</td>
    </tr> 
  </tbody>
</table>

    </div>

  <b-container fluid="md">
      <h1 class="h1 dadosMargTabela ">Casos confirmados e acumulados</h1>
        <div class="row">
          <line-chart class="col-sm-6" :data="chartData"></line-chart>
          <bar-chart class="col-sm-6" :data="chartData"></bar-chart>
        </div>

      <h1 class="h1 dadosMargTabela ">Novos casos no dia</h1>
        <div class="row">
          <line-chart class="col-sm-6" :data="chartData"></line-chart>
          <line-chart class="col-sm-6" :data="chartData"></line-chart>
        </div>

      <h1 class="h1 dadosMargTabela ">Óbitos acumulados</h1>
        <div class="row">
          <line-chart class="col-sm-6" :data="chartData"></line-chart>
          <line-chart class="col-sm-6" :data="chartData"></line-chart>
        </div>

      <h1 class="h1 dadosMargTabela ">Óbitos no dia</h1>
        <div class="row">
          <line-chart class="col-sm-6" :data="chartData"></line-chart>
          <line-chart class="col-sm-6" :data="chartData"></line-chart>
        </div>

  </b-container>

  <footer class="footer">
    <p class="textFotter">Desenvolvido por Lucas Mateus Silva</p>
  </footer>

</div>
</template>

<script>

import Produtos from './services/produtos'

export default {
    data() {
      return {
        produtos:[],
        chartData: {
          '2017-5-13': 2,
          '2017-5-15': 5,
          '2017-5-19': 9,
          '2017-5-20': 15,
          '2017-5-21': 20,
          '2017-5-22': 22,
        },
      }
    },
    mounted(){
      Produtos.listar().then(resposta => {
        console.log(resposta.data)
        this.produtos = resposta.data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1 {
  color: black;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
}
.dadosMarg {
  margin-top: 5px;
  margin-bottom: 5px;
}
.dadosMargTabela {
  margin-top: 11px;
  margin-bottom: 11px;
}
.footer {
  background-color: black;
  margin-top: 2%;
  text-align: center;
  padding-top: 1%;
  padding-bottom: 0.5%;
}
.textP {
  font-size: 24px;
  color: white;
}
.textPsimples {
  font-size: 23px;
  padding-left: 870px;
  color: white;
}
.textPsimplesSobre {
  font-size: 23px;
  color: white;
}
.textFotter {
  font-size: 24px;
  color: white;
}
</style>
