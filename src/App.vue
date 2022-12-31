<template>
    <router-view></router-view>
</template>

<script>
export default {
  computed: {
    token() {
      return this.$store.state.token
    }
  },
  watch: {
    token(newvalue){
      this.$store.dispatch('tryAutoLogin', newvalue)
    }
  }

}
</script>
