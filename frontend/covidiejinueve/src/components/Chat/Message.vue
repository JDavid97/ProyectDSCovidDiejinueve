<template>
    <div>
        <div :class="type" class="msg-container pb-1 pt-1">
        <b-badge pill :variant="type" class="pb-2 pt-2">
            {{message}}
        </b-badge>
        </div>
    </div>
</template>

<script>
export default {
    props:['type','message']
}
</script>