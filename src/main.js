import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import VuexRest from "./plugins/vuex-rest";
import VueGrid from "@sneverton/vue-grid";
import "@sneverton/vue-grid/dist/vue-grid.css";
import vuetify from "./plugins/vuetify";

const server =
  process.env.NODE_ENV === "development"
    ? process.env.VUE_APP_SERVER
    : location.origin;

Vue.config.productionTip = false;

Vue.use(VueGrid);

Vue.use(Vuex);

Vue.use(VuexRest, {
  base: server + "/rest",
});

Vue.mixin({
  data: () => ({
    server,
    files: server,
  }),
});

new Vue({
  router,
  store: new Vuex.Store(),
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
