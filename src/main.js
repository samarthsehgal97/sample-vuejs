import Vue from 'vue';
import App from './App.vue';
import { Auth } from '@axioms/web-js';
import router from '@/router';
import Default from '@/layouts/Default.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/styles/custom.scss';

// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Production tip
Vue.config.productionTip = false

// Layout
Vue.component("default-layout", Default);

// Auth
const auth = new Auth({
    axioms_domain: process.env.VUE_APP_Axioms_Domain,
    response_type: process.env.VUE_APP_Response_Type,
    redirect_uri: process.env.VUE_APP_Redirect_Uri,
    post_logout_uri: process.env.VUE_APP_Post_Logout_Uri,
    client_id: process.env.VUE_APP_Client_Id,
    scope: process.env.VUE_APP_Scope,
    post_login_navigate: '/dashboard'
});

Vue.prototype.$auth = auth;

Vue.prototype.$role = function(required_scopes) {
    return auth.session.hasAccessScope(required_scopes);
};

new Vue({
    router,
    el: '#app',
    render: h => h(App),
});