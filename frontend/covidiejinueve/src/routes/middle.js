import VueRouter from "vue-router";
import routes from "./routes";
import store  from "@/store";

// coonfiguracion del router
const router = new VueRouter({
    mode: 'history',
    routes, 
    linkExactActiveClass: "nav-item active"
  });

  router.beforeEach((to, from, next) => {
    let requiresAuth = to.matched.some(record => record.meta.userLoged),
        requiresVisitor = to.matched.some(record =>record.meta.requiresVisitor)

    if(requiresAuth){
        if(!store.state.oauth.token){
            next({
                name: 'Login'
            });
        }else{
            next();
        }
    }else if(requiresVisitor){
        if(store.state.oauth.token){
            next('/cvd/map');
        }else{
            next();
        }
    }else{
        next();
    }
  })
  
export default router