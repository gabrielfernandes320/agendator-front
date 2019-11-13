import Vue from "vue";
import Router from "vue-router";
import NewClient from "@/components/NewClient";
import VisualizeClients from "@/components/VisualizeClients";
import ListRoles from "@/components/ListRoles";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/newclient",
      name: "NewClient",
      component: NewClient
    },
    {
      path: "/visualizeclients",
      name: "VisualizeClients",
      component: VisualizeClients
    },
    {
      path: "/roles",
      name: "ListRoles",
      component: ListRoles
    }
  ]
});
