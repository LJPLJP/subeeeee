<template>
  <div>
    huawei
    <button @click="btnClick">go-1</button>
  </div>
</template>

<script>
  export default {
    name: "huawei",
    methods:{
      btnClick(){
        this.$router.go(-1)
      }
    },
    created () {
      console.log(this.$route)
      console.log(this.$rotuer)
    }
  }
</script>

<style scoped>

</style>
