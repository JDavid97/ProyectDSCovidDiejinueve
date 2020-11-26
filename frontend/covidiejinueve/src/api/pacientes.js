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
    }
}

export default pacientesApi