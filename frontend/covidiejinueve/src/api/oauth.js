import axios from 'axios'

const oauthApi = {
    login: function(user){
        return new Promise((resolve, reject) => {
            axios.post('http://127.0.0.1:8000/usuario/login/',user).then(data=>{
                console.log(data)
                if(data.status == 201){
                    resolve(data.data)
                } else {
                    reject({logued:false})
                }
            }).catch(()=>{
                reject({logued:false})
            })
        //     setTimeout(() => {
        //         if(user.username == "Camilo47" & user.password == "2020GaMatt1999"){
        //             resolve(
        //                 {
        //                   logued:true,
        //                   user:{
        //                       id:'001',
        //                       name:'Camilo',
        //                       lastname:'Arias',
        //                       role: 'admin',
        //                       picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNCUkdxlI_BovMk95jUUn7wqhGEB242s-og&usqp=CAU'
        //                   },
        //                   token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJhZG1pbiIsIm5hbWUiOiJDYW1pbG8gQXJpYXMiLCJpYXQiOjE1MTYyMzkwMjJ9.98s2PEzU3yvQo1ZT4kFrrUeTIZ9P1x0RuRt3lZoWwDg'
        //                 }
        //             )
        //         }
        //         else if(user.username == "Camilo48" & user.password == "2020GaMatt1999"){
        //             resolve(
        //                 {
        //                   logued:true,
        //                   user:{
        //                       id:'002',
        //                       name:'Andres',
        //                       lastname:'Arias',
        //                       role: 'paciente',
        //                       picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNCUkdxlI_BovMk95jUUn7wqhGEB242s-og&usqp=CAU'
        //                   },
        //                   token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJhZG1pbiIsIm5hbWUiOiJDYW1pbG8gQXJpYXMiLCJpYXQiOjE1MTYyMzkwMjJ9.98s2PEzU3yvQo1ZT4kFrrUeTIZ9P1x0RuRt3lZoWwDg'
        //                 }
        //             )
        //         }
        //         else if(user.username == "Camilo49" & user.password == "2020GaMatt1999"){
        //             resolve(
        //                 {
        //                   logued:true,
        //                   user:{
        //                       id:'003',
        //                       name:'Andres',
        //                       lastname:'Arias',
        //                       role: 'doctor',
        //                       picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNCUkdxlI_BovMk95jUUn7wqhGEB242s-og&usqp=CAU'
        //                   },
        //                   token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJhZG1pbiIsIm5hbWUiOiJDYW1pbG8gQXJpYXMiLCJpYXQiOjE1MTYyMzkwMjJ9.98s2PEzU3yvQo1ZT4kFrrUeTIZ9P1x0RuRt3lZoWwDg'
        //                 }
        //             )
        //         }
        //         else{
        //             reject({logued:false})
        //         }
        //       }, 2000)
        // 
    })
    }
}

export default oauthApi