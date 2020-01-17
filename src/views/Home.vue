<template>
  <div>
    <b-jumbotron header="Axioms" lead="Sample Vue JS App">
      <div v-if="is_authenticated">
        <p>Please view dashboard for more actions.</p>
        <b-button variant="primary" href="/dashboard">
          <b-icon icon="columns"></b-icon> Dashboard
        </b-button>
      </div>
      <div v-else>
        <p>To view dashboard please login.</p>
        <b-button variant="primary" href="/login">
          <b-icon icon="box-arrow-right"></b-icon> Login
        </b-button>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  computed: {
    is_authenticated() {
      return this.$auth.session.is_authenticated();
    }
  }
};
</script>