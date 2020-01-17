<template>
  <div>
      <p>Loading</p>
  </div>
</template>


<script>
export default {
  name: "callback",
  mounted() {
    this.$auth.process_authorize_response();
  }
};
</script>