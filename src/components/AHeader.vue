<template>
      <b-navbar toggleable="lg" class="mb-5">
        <b-navbar-brand href="/">
          <img src="https://static.axioms.io/demo/oats.svg" style="width:2em;" alt="Oats" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/dashboard">
              <b-icon icon="columns"></b-icon> Dashboard
            </b-nav-item>
            <b-nav-item href="/logout" v-if="is_authenticated">
              <b-icon icon="power"></b-icon> Logout
            </b-nav-item>
            <b-nav-item href="/login" v-else>
              <b-icon icon="box-arrow-right"></b-icon> Login
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="is_authenticated">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <img :src="avatar" style="width:1.5em;" />
              </template>
              <b-dropdown-item :href="get_user_settings_url">Update profile</b-dropdown-item>
              <b-dropdown-item :href="get_user_password_url">Change password</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
</template>

<script>
export default {
  computed: {
    is_authenticated() {
      return this.$auth.session.is_authenticated();
    },
    avatar() {
      return this.$auth.session.id_payload.picture;
    },
    get_user_password_url() {
      return this.$auth.get_user_password_url();
    },
    get_user_settings_url() {
      return this.$auth.get_user_settings_url();
    }
  }
};
</script>