<template>
  <div class="logout"></div>
</template>


<script>
export default {
  name: 'login',
  mounted() {
      this.$auth.logoutWithRedirect();
  }
}
</script>