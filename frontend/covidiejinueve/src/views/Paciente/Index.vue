<template>
    <MainTable 
      v-bind:items="pacientes" 
      v-on:update="submitUpdate" 
      :closeUdateModal="cerrarModdalUpdate"
      @delete="askForDelete"
      :closeModalDelete="closeModalDelete"
      :closeModalCreate="closeModalCreate"
      type="paciente"
      @create="createUser"
    ></MainTable>
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
        cerrarModdalUpdate:false,
        closeModalDelete: false,
        closeModalCreate: false
      }
    },
    computed:{
      pacientes () {
        return this.$store.state.pacientes.pacientes
      }
    },
    methods:{
      submitUpdate: function(userInfo){
        if(this.$store.dispatch('pacientes/updatePacientes',userInfo)){
          this.cerrarModdalUpdate = true
          setTimeout( ()=>{
            this.cerrarModdalUpdate = false
          },2000) 
        }
        else{
          alert('No se puedo actualizar el usuario')
        }

      },
      askForDelete: function(userId){
        let status = this.$store.dispatch('pacientes/deletepaciente',userId)
        
        if(status){
          //cerrar el modal y restaurar la variable para cerrar el modal despues
          this.closeModalDelete = true
          setTimeout( ()=>{
            this.closeModalDelete = false
          },2000)
        }
      },
      createUser: function(data){
        if( this.$store.dispatch('pacientes/create',data) ){
           this.closeModalCreate = true
            setTimeout( ()=>{
              this.closeModalCreate = false
            },2000) 
        }
        else{
          alert('No se puedo crear el usuario')
        }
      }
    },
    mounted(){
      if(this.$store.state.pacientes.pacientes.length == 0){
        this.$store.dispatch('pacientes/getPacientes')
      }
    },
}
</script>