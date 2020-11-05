import VueRouter from "vue-router";
import routes from "./routes";

// coonfiguracion del router
const router = new VueRouter({
    mode: 'history',
    routes, 
    linkExactActiveClass: "nav-item active"
  });
  
export default router