<template>
  <div class="logout"></div>
</template>


<script>
export default {
  name: 'logout',
  mounted() {
      this.$auth.logout_with_redirect();
  }
}
</script>