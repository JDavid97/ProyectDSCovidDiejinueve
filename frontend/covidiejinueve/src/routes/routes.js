import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  { path: '/', name: 'Login'},
  { path: '/register', name: 'Register'},
  { 
    path: '/cvd', 
    name: 'DashboardLayout',
    children: [
      {
        path: "map",
        name: "Map"
      },
      {
        path: "dashboard",
        name: "Dashboard"
      },
      {
        path: "doctor",
        name: "Doctor"
      },
      {
        path: "paciente",
        name: "Paciente"
      },
      {
        path: "admin",
        name: "Admin"
      }
    ]  
  },
  { path: '*', name: 'Error' }
]

const routes = routerOptions.map(r => {
  let directions = {
    path : r.path,
    name : r.name,
    component: () => import(`@/views/${r.name}/Index.vue`)
  }

  if(r.meta){
    directions.meta = r.meta
    console.log("Tengo meta")
  }

  if(r.children){
    let hijos = r.children.map(child => {
       return {
        ...child,
        component: () => import(`@/views/${child.name}/Index.vue`)
      }
    }) 

    directions.children = hijos
  }

  return directions;
})

export default routes