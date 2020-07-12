<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">PAINEL COVID - 19</b-nav-item>

      <b-nav-item href="#">Painel Geral</b-nav-item>

      <b-nav-item-dropdown text="Sobre" >
        <b-dropdown-item href="#">Nos</b-dropdown-item>
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
   
</div>
</template>

<script>
export default {
    data() {
      return {
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald', status: 'awesome' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
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
        fixed: false,
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
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
