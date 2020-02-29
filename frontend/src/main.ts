import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { vueRouter } from "@/routes/router";

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
	router: vueRouter,
	render: h => h(App)
}).$mount("#app");
