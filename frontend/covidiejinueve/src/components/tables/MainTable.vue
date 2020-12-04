<template>
    <div class="container-table">
      <div class="overflow-auto">

        <b-button variant="success">Button</b-button>

        <b-table
          id="my-table"
          :items="items"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          small
        >
            <template #cell(picture)="data">
                <b-img :src="data.item.picture" rounded alt="profile picture" width="50px" height="50px"></b-img>
            </template>

            <template #cell(actions)="row">
              <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                Actualizar 
              </b-button>
            </template>

        </b-table>

        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>

        <p class="mt-3">Pagina actual: {{ currentPage }}</p>

        <b-modal ref="modal-update" :title="'Actualizar a'+updateModal.title">
          <p class="my-4">Hello from modal!</p>
        </b-modal>

      </div>
    </div>
</template>

<script>
export default {
    name : 'PacientesView',
    data() {
      return {
        perPage: 3,
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
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    props: ['items'],
    computed: {
      rows() {
        return this.items.length
      }
    },
    methods:{
      info(item, index, button) {
        this.updateModal.title = item.name
        this.updateModal.content = JSON.stringify(item, null, 2)
         this.$refs['modal-update'].show()
         console.log(button)
        //this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
    }
}
</script>