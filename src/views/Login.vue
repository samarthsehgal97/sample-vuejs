<template>
  <div class="login"></div>
</template>


<script>
export default {
  name: "login",
  mounted() {
    this.$auth.login_with_redirect();
  }
};
</script>