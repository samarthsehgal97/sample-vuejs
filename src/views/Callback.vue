<template>
  <div class="mx-auto">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
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