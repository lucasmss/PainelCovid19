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

     

      <table class="table table-dark" id="myTable"> 
      <thead>
        <tr>
          <th scope="col">UF</th>
          <th scope="col">Casos</th>
          <th scope="col">Óbitos</th>
          <th scope="col">Atualizado em</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 
            <b-input-group class="mt-3 inptEstado" type="search" prepend="Buscar"  
              v-on:input="filtro = $event.target.value" placeholder="Buscar Estado">
              <b-form-input></b-form-input>
            </b-input-group>
          </td>
        </tr>
        <tr v-for="produtos of estadoFiltro" :key="produtos.combinedKey">
          <td>{{produtos.combinedKey}}</td>
          <td>{{produtos.confirmed}}</td>
          <td>{{produtos.deaths}}</td>
          <td>{{moment(produtos.lastUpdate).format('DD/MM/YYYY HH:mm')}}</td>
        </tr> 
      </tbody>
    </table>
  <b-pagination
     
    ></b-pagination>
  </div>

  <b-container fluid="md">
      <h1 class="h1 dadosMargTabela ">Casos confirmados e acumulados</h1>
        <div class="row">
          <line-chart class="col-sm-6" :data="chartData"></line-chart>
          <bar-chart class="col-sm-6"  :data="chartData"></bar-chart>
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
          <line-chart class="col-sm-6" :data="chartData" :title="title" ></line-chart>
          <bar-chart class="col-sm-6"  :data="chartDataObito" :title="title"></bar-chart>
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
        filtro: '',
        pageActual: 1,
        limitItems: 10,
        chartData: {
          '2020-07-7': 10100,
          '2020-07-14': 30100,
          '2020-07-20': 50100,
          '2020-07-24': 60100,
          '2020-07-26': 70010,
          '2020-07-30': 72800,
          },
          title: 'Óbitos de COVID-19 Mensal',
           chartDataObito: {
             '3': 10100,
             '4': 30100,
             '5': 50100,
             '6': 60100,
             '7': 72100,
           },   
      }
      },
      mounted(){
        Produtos.listar().then(resposta => {
          console.log(resposta.data)
          this.produtos = resposta.data
        })
      },
      computed: {

        estadoFiltro(){
        if (this.filtro) {
         let exp = new RegExp(this.filtro.trim(), 'i');
         return this.produtos.filter(produtos => exp.test(produtos.combinedKey));
        }
        else{
          return this.produtos;
        }
        }


      },
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
