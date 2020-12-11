<template>
    <MainTable 
      v-bind:items="doctores" 
      v-on:update="submitUpdate" 
      :closeUdateModal="cerrarModdalUpdate"
      @delete="askForDelete"
      :closeModalDelete="closeModalDelete"
      :closeModalCreate="closeModalCreate"
      type="doctor"
      @create="createUser"
    ></MainTable>
</template>

<script>
import MainTable from '../../components/tables/MainTable'


export default {
    name : 'DoctorView',
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
      doctores () {
        return this.$store.state.doctores.doctores
      }
    },
    methods:{
      submitUpdate: function(userInfo){
        if(this.$store.dispatch('doctores/update',userInfo)){
          this.cerrarModdalUpdate = true
          setTimeout( ()=>{
            this.cerrarModdalUpdate = false
          },2000) 
        }
        else{
          alert('No se puedo actualizar el doctor')
        }

      },
      askForDelete: function(userId){
        let status = this.$store.dispatch('doctores/delete',userId)
        
        if(status){
          //cerrar el modal y restaurar la variable para cerrar el modal despues
          this.closeModalDelete = true
          setTimeout( ()=>{
            this.closeModalDelete = false
          },2000)
        }else{
            alert('No se puedo elimiar al doctor')
        }
      },
      createUser: function(data){
        if( this.$store.dispatch('doctores/create',data) ){
           this.closeModalCreate = true
            setTimeout( ()=>{
              this.closeModalCreate = false
            },2000) 
        }
        else{
          alert('No se puedo crear el doctor')
        }
      }
    },
    mounted(){
      if(this.$store.state.doctores.doctores.length == 0){
        this.$store.dispatch('doctores/getDoctores')
      }
    },
}
</script>