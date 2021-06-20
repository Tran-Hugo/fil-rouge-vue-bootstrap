<template>
  <p>{{msg}}</p>
</template>

<script>
export default {
  name: 'avertissement',
  props:{
    msg: String
  }
}
</script>

<style scoped>
p {
  color: #31aaaf;
  margin-top: 5%;
}
</style>