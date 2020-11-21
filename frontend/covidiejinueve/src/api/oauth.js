//import axios from 'axios'

const oauthApi = {
    login: function(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user.username == "Camilo47" & user.password == "2020GaMatt1999"){
                    resolve(
                        {
                          logued:true,
                          user:{
                              id:'001',
                              name:'Camilo',
                              lastname:'Arias',
                              role: 'admin'
                          },
                          token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJhZG1pbiIsIm5hbWUiOiJDYW1pbG8gQXJpYXMiLCJpYXQiOjE1MTYyMzkwMjJ9.98s2PEzU3yvQo1ZT4kFrrUeTIZ9P1x0RuRt3lZoWwDg'
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