//import axios from 'axios'

const pacientesApi = {
    getPacientes : function(){
        return new Promise( (resolve) => {
            setTimeout( () =>{
                    resolve([
                       {
                           id : "001",
                           name: "Fernando",
                           lastname : "Artus",
                           role : "Paciente",
                           picture: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
                           location:{
                               lat:3.428605,
                               lng:-76.535683
                           }
                       },
                       {
                           id : "003",
                           name: "Luisa",
                           lastname : "Caramelo",
                           role : "Paciente",
                           picture: "https://static.mujerhoy.com/noticias/201706/14/media/cortadas/por-que-algunas-mujeres-tardan-en-llegar-al-orgasmo-kiLE-U301072963448EjF-560x420@MujerHoy.jpg",
                           location:{
                               lat:3.420808,
                               lng:-76.525854
                           }
                       },
                       {
                           id : "002",
                           name: "Maria",
                           lastname : "Paela",
                           role : "Paciente",
                           picture: "https://cdn.bioguia.com/embed/1bfc9cc8a23ce4d1f518abf591da97341529442379/0_mujernovaalbao.JPG",
                           location:{
                               lat:3.445054,
                               lng:-76.511650
                           }
                       }
                   ]
                   )
            }, 800)
        })
    },
    update: function(userInfo){
        
        //let URL = 'http://Idontknow';
        let data = new FormData();

        data.append('id', userInfo.id);
        data.append('name', userInfo.name);
        data.append('lastname', userInfo.lastname);
        data.append('picture', userInfo.foto ); 

       /* let config = {
          header : {
            'Content-Type' : 'image/png'
          }
        } */

        
        //let status = await axios.put( URL, data, config)
        userInfo.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZG-8Pk5VYr_MOP4Ks3uEeZdArTUAizNRwg&usqp=CAU'
        return userInfo //status
        
    },
    delete : function(id){
        //hacer peticion axios
        console.log('Eliminar id: '+id)
        return true
    },
    save : function(userInfo){
        //let URL = 'http://Idontknow';
        let data = new FormData();

        data.append('name', userInfo.name);
        data.append('lastname', userInfo.lastname);
        data.append('picture', userInfo.foto ); 
        data.append('password', userInfo.password ); 

       /* let config = {
          header : {
            'Content-Type' : 'image/png'
          }
        } */
        
        //let status = await axios.put( URL, data, config)
        userInfo.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvpndsXGCi_cMb-uef3UmHWlK64aQR9OA7g&usqp=CAU'
        userInfo.location={
            lat:3.442698,
            lng:-76.533176
        }
        return userInfo //status
    }
}

export default pacientesApi