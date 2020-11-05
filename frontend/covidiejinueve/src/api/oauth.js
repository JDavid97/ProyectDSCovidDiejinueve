//import axios from 'axios'

const oauthApi = {
    login: function(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user.name == "Camilo47" & user.password == "2020GaMatt1999"){
                    resolve(
                        {
                          logued:true,
                          user:{
                              name:'Camilo',
                              lastname:'Arias',
                              rol: 'admin'
                          }
                        }
                    )
                }
                else{
                    reject({logued:false})
                }
              }, 2000)
        })
    }
}

export default oauthApi