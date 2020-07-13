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
    
      <b-table :striped="striped"
        :bordered="bordered"
        :borderless="borderless"
        :outlined="outlined"
        :small="small"
        :hover="hover"
        :dark="dark"
        :fixed="fixed"
        :foot-clone="footClone"
        :no-border-collapse="noCollapse"
        :items="items"
        :fields="fields"
        :head-variant="headVariant"
        :table-variant="tableVariant">
      </b-table>

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
export default {
    data() {
      return {
        fields: ['Estado', 'Casos', 'Óbitos', 'Atualização'],
        items: [
          { Estado: 'Centro-Oeste', Casos: '144.804' , Óbitos: '2.897', Atualização: '11/07 19:00'},
          { Estado: 'Sul', Casos: '121.543', Óbitos: '2.444', Atualização: '11/07 19:00' },
          { Estado: 'Norte', Casos: '318.807', Óbitos: '10.453', Atualização: '11/07 19:00' }
        ],
         tableVariants: [
          'dark'
        ],
        striped: true,
        bordered: true,
        borderless: false,
        outlined: false,
        small: false,
        hover: true,
        dark: true,
        fixed: true,
        footClone: false,
        headVariant: null,
        tableVariant: '',
        noCollapse: true,

        chartData: {
          '2017-5-13': 2,
          '2017-5-15': 5,
          '2017-5-19': 9,
          '2017-5-20': 15,
          '2017-5-21': 20,
          '2017-5-22': 22,
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
