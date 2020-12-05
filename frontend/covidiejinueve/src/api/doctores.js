//import axios from 'axios
const doctoresApi = {
    getDoctores(){
        return new Promise( (resolve)  => {
            setTimeout( ()=>{
                resolve([
                    {
                        id : "011",
                        name: "Antony",
                        lastname : "Burdein",
                        role : "Doctor",
                        picture: "https://cxl.com/wp-content/uploads/2016/03/nate_munger.png",
                    },
                    {
                        id : "012",
                        name: "Michael",
                        lastname : "Perez",
                        role : "Doctor",
                        picture: "https://media.revistagq.com/photos/5ca5fd6e3492a940f5bf1bf0/master/pass/doctor_mike_gq_5080.jpg",
                    },
                    {
                        id : "013",
                        name: "Milena",
                        lastname : "Quiroz",
                        role : "Doctor",
                        picture: "https://d2yoo3qu6vrk5d.cloudfront.net/images/20181113152329/lee_sandra_0252_xret-683x1024-482x320.jpg",
                    },
                    {
                        id : "014",
                        name: "Kelly",
                        lastname : "Tiuso",
                        role : "Doctor",
                        picture: "https://www.lapatilla.com/wp-content/uploads/2020/09/La-doctora-brasilena-Rayane-Laura-Souza.jpg?resize=640%2C419",
                    },
                ])
            },800)
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
        userInfo.picture =  'https://cdn.sanity.io/images/0vv8moc6/hcplive/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg?auto=format'
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
        userInfo.picture =  'https://staticr1.blastingcdn.com/media/photogallery/2018/5/1/660x290/b_1200x675/who-originally-said-im-not-a-doctor-but-i-play-one-on-tv-mentalflosscom_1965501.jpg'
    
        return userInfo //status
    }
}

export default doctoresApi