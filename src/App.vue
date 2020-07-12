<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">PAINEL COVID - 19</b-nav-item>

      <b-nav-item href="#">Painel Geral</b-nav-item>

      <b-nav-item-dropdown text="Sobre" >
        <b-dropdown-item href="#">Nós</b-dropdown-item>
        <b-dropdown-item href="#">Sistema</b-dropdown-item>
        <b-dropdown-item href="#">Contato</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>

   <div class="tabelaDados">
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
      :table-variant="tableVariant"></b-table>
  </div>

  <div>
    <h1 class="h1">Casos confirmados acumulados</h1>
  </div>

  <div>
    <h1 class="h1">Novos casos no dia</h1>
  </div>

  <div>
    <h1 class="h1">Óbitos acumulados</h1>
  </div>

  <div>
    <h1 class="h1">Óbitos no dia</h1>
  </div>
   
</div>
</template>

<script>
export default {
    data() {
      return {
        fields: ['Estado', 'Casos', 'Óbitos', 'Atualização'],
        items: [
          { Estado: 'Brasilia', Casos: '144.804' , Óbitos: '2.897', Atualização: '11/07 19:00'},
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
        noCollapse: true
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
.tabelaDados {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
