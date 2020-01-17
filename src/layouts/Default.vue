<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Oats</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/dashboard">Dashboard</b-nav-item>
        <b-nav-item href="/logout" v-if="is_authenticated">Logout</b-nav-item>
        <b-nav-item href="/login" v-else>Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-container>
    <slot />
  </b-container>
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
