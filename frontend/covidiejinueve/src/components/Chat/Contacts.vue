<template>
    <b-list-group-item class="d-flex align-items-center" v-on:click="clikedUser">
        <b-avatar variant="info" src="https://cxl.com/wp-content/uploads/2016/03/nate_munger.png" class="mr-3"></b-avatar>
        <span class="mr-auto">Antony Burdein</span>
        <b-badge>9</b-badge>
    </b-list-group-item>
</template>

<script>
export default {
    methods:{
        clikedUser() {
          this.$emit("click", {id:"001",name:"Antony burdein", role:"Doctor"});
        }
    }
}
</script>