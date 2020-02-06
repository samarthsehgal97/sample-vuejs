<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>{{first_name}}</template>
      <template v-slot:lead>You are now logged in.</template>
      <hr class="my-4" />
      <p>You can update your profile details or password.</p>
      <b-button variant="primary" :href="get_user_settings_url" target="_blank"  class="mr-1">
        <b-icon icon="gear-wide-connected"></b-icon> Update profile
      </b-button>
      <b-button variant="danger" :href="get_user_password_url" target="_blank" class="ml-1">
        <b-icon icon="shield-lock"></b-icon> Change password
      </b-button>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  computed: {
    first_name() {
      return this.$auth.session.id_payload.given_name
        ? this.$auth.session.id_payload.given_name
        : "";
    },
    get_user_password_url() {
      return this.$auth.get_user_password_url;
    },
    get_user_settings_url() {
      return this.$auth.get_user_settings_url;
    }
  }
};
</script>