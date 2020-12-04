<template>
    <MainTable v-bind:items="items" ></MainTable>
</template>

<script>
import MainTable from '../../components/tables/MainTable'
export default {
    name : 'PacientesView',
    components:{
      MainTable
    },
    data(){
      return{
        items: []
      }
    },
    mounted(){
      if(this.$store.state.pacientes.pacientes.length == 0){
        this.$store.dispatch('pacientes/getPacientes')
          .then( data => {
            this.items = data
          })
      }
      else{
        this.items = this.$store.state.pacientes.pacientes
      }
    }
}
</script>