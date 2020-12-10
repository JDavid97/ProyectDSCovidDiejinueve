<template>
    <div class="container-table">
      <div class="overflow-auto">

        <b-button variant="info" v-b-modal.modal-create>➕ Crear nuevo</b-button>

        <b-table
          id="my-table"
          :items="items"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          hover
          responsive="sm"
          striped bordered borderless
        >
            <template #cell(picture)="data">
                <b-img :src="data.item.picture" rounded alt="profile picture" width="50px" height="50px"></b-img>
            </template>

            <template #cell(actions)="row">
              <b-button variant="info" size="sm" @click="info(row.item)" class="mr-1">
                🔃 Actualizar
              </b-button>

              <b-button variant="danger" size="sm" @click="comfirmDelete(row.item)" class="mr-1">
                🗑️ Eliminar
              </b-button>

            </template>

        </b-table>

        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>


        <b-modal id="modal-create" ref="modal-create" :title="'Crear '+type" hide-footer>
          <UpdateForm v-on:updateFormulario="userCreate" type="create"></UpdateForm>
        </b-modal>

        <b-modal ref="modal-update" :title="'Actualizar a '+updateModal.title" hide-footer>
          <UpdateForm v-on:updateFormulario="userUpdate" type="update"></UpdateForm>
        </b-modal>

        <b-modal ref="modal-delete" :title="'Eliminar a '+deleteModal.title" hide-footer>
          <h3>¿Realmente desea eliminar a {{deleteModal.title}}</h3>
          <b-button variant="danger" @click="eliminar">Eliminar</b-button>
        </b-modal>

      </div>
    </div>
</template>

<script>
import UpdateForm from '../Forms/CreateUpdate.vue'
export default {
    name : 'PacientesView',
    components:{
      UpdateForm
    },
    data() {
      return {
        perPage: 10,
        currentPage: 1,
        fields:[
          {
            key: 'id',
            sortable: true
          },
          {
            key: 'name',
            label:'Nombre',
            sortable: true
          },
          {
            key: 'lastname',
            label:'Apellido',
            sortable: true
          },
          {
            key: 'picture',
            label: 'Foto de perfil'
          },
          { key: 'actions', label: 'Acciones' }
        ],
        updateModal: {
          id: 0,
          title: '',
        },
        deleteModal:{
          id: 0,
          title: ''
        }
      }
    },
    props: ['items','closeUdateModal','closeModalDelete','type','closeModalCreate'],
    computed: {
      rows() {
        return this.items.length
      }
    },
    watch: {
      closeUdateModal: function (val) {
        if(val){
          this.$refs['modal-update'].hide()
       }
      },
      closeModalDelete : function(val){
        if(val){
            this.$refs['modal-delete'].hide()
        }
      },
      closeModalCreate : function(val){
        if(val){
            this.$refs['modal-create'].hide()
        }
      }
    },
    methods:{
      info(item) {
        this.updateModal.title = item.name
        this.updateModal.id = item.id
        this.$refs['modal-update'].show()
      },
      userUpdate: function(data){
        data.id = this.updateModal.id
        this.$emit('update',data)
      },
      comfirmDelete: function(item){ 
        this.deleteModal.title = item.name
        this.deleteModal.id = item.id
        this.$refs['modal-delete'].show()
      },
      eliminar: function(){
        this.$emit('delete',this.deleteModal.id)
      },
      userCreate : function(data){
        this.$emit('create',data)
      }
    }
}
</script>