<template>
    <MainTable 
      v-bind:items="admins" 
      v-on:update="submitUpdate" 
      :closeUdateModal="cerrarModdalUpdate"
      @delete="askForDelete"
      :closeModalDelete="closeModalDelete"
      :closeModalCreate="closeModalCreate"
      type="administrador"
      @create="createUser"
    ></MainTable>
</template>

<script>
import MainTable from '../../components/tables/MainTable'


export default {
    name : 'AdminsView',
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
      admins () {
        return this.$store.state.admin.admins
      }
    },
    methods:{
      submitUpdate: function(userInfo){
        if(this.$store.dispatch('admin/update',userInfo)){
          this.cerrarModdalUpdate = true
          setTimeout( ()=>{
            this.cerrarModdalUpdate = false
          },2000) 
        }
        else{
          alert('No se puedo actualizar el administrador')
        }
      },
      askForDelete: function(userId){
        let status = this.$store.dispatch('admin/delete',userId)   
        if(status){
          //cerrar el modal y restaurar la variable para cerrar el modal despues
          this.closeModalDelete = true
          setTimeout( ()=>{
            this.closeModalDelete = false
          },2000)
        }
        else{
            console.log('no se pudo eliminar el administrador')
        }
      },
      createUser: function(data){
        if( this.$store.dispatch('admin/create',data) ){
           this.closeModalCreate = true
            setTimeout( ()=>{
              this.closeModalCreate = false
            },2000) 
        }
        else{
          alert('No se puedo crear el administrador')
        }
      }
    },
    mounted(){
      if(this.$store.state.admin.admins.length == 0){
        this.$store.dispatch('admin/get')
      }
    },
}
</script>