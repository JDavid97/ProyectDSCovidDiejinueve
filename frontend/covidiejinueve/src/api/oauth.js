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
                              role: 'admin',
                              picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNCUkdxlI_BovMk95jUUn7wqhGEB242s-og&usqp=CAU'
                          },
                          token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJhZG1pbiIsIm5hbWUiOiJDYW1pbG8gQXJpYXMiLCJpYXQiOjE1MTYyMzkwMjJ9.98s2PEzU3yvQo1ZT4kFrrUeTIZ9P1x0RuRt3lZoWwDg'
                        }
                    )
                }
                else if(user.username == "Camilo48" & user.password == "2020GaMatt1999"){
                    resolve(
                        {
                          logued:true,
                          user:{
                              id:'002',
                              name:'Maria',
                              lastname:'Paela',
                              role: 'paciente',
                              picture : 'https://cdn.bioguia.com/embed/1bfc9cc8a23ce4d1f518abf591da97341529442379/0_mujernovaalbao.JPG'
                          },
                          token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJhZG1pbiIsIm5hbWUiOiJDYW1pbG8gQXJpYXMiLCJpYXQiOjE1MTYyMzkwMjJ9.98s2PEzU3yvQo1ZT4kFrrUeTIZ9P1x0RuRt3lZoWwDg'
                        }
                    )
                }
                else if(user.username == "Camilo49" & user.password == "2020GaMatt1999"){
                    resolve(
                        {
                          logued:true,
                          user:{
                              id:'011',
                              name:'Antony',
                              lastname:'Burdein',
                              role: 'doctor',
                              picture : 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png'
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