<template>
  <p>{{msg}}</p>
</template>

<script>
export default {
  name: 'erreur',
  props:{
    msg: String
  }
}
</script>

<style scoped>
p {
  color: red;
  margin-top: 5%;
}
</style>