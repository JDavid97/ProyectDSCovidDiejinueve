import VueRouter from "vue-router";
import routes from "./routes";
import store  from "@/store";

// coonfiguracion del router
const router = new VueRouter({
    mode: 'history',
    routes, 
    linkExactActiveClass: "nav-item active"
  });

  var accessRoles = (admin, doctor) => {
    return new Promise( (resolve, reject) => {
        let userRole = store.state.oauth.userRole
        if(admin && userRole == "Administrador" || doctor &&  userRole == "Doctor") resolve()
        reject()
    })
  } 

  router.beforeEach((to, from, next) => {
    let requiresAuth = to.matched.some(record => record.meta.userLoged),
        requiresVisitor = to.matched.some(record =>record.meta.requiresVisitor),
        allUsersCanAccess = to.matched.some(record =>record.meta.all),
        requiresBeAdmin = to.matched.some(record =>record.meta.admin),
        requiresBeDoctor = to.matched.some(record =>record.meta.doctor)

    if(requiresAuth){
        if(!store.state.oauth.token){
            next({
                name: 'Login'
            });
        }
        else{
            //Restringir rutas dependiendo del rol
            if(allUsersCanAccess){
                next()
            }
            else{
                accessRoles(requiresBeAdmin, requiresBeDoctor).then(()=>{
                    next()
                })
                .catch( ()=>{
                    next('/cvd/map');
                })
            }
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