<template>
    <div :class="classType" class="msg-container">
        <p  class="p-message pb-1 pt-1 pl-2 pr-2" :class="classType">
            {{message}}
        </p>
    </div>
</template>

<script>
export default {
    props:['from','message'],
    computed : {
        classType  : function() {
            return {
                'success' : this.from == this.$store.state.oauth.userId,
                'info' : this.from != this.$store.state.oauth.userId
            }
        },
        varinatType :  function () {
            return this.from == this.$store.state.oauth.userId ? 'success' : 'info'
        }
    }
}
</script>