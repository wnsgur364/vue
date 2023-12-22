import Vue from "vue";
import VueRouter from "vue-router";
import Read from "@/components/Read.vue";
import Create from "@/components/Create.vue";
import Detail from "@/components/Detail.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Read",
      component: Read,
    },
    {
      path: "/create/:contentId?",
      name: "Create",
      component: Create,
    },
    {
      path: "/detail/:contentId",
      name: "Detail",
      component: Detail,
    },
  ],
});

export default router;
