//import axios from 'axios
const adminsApi = {
    get(){
        return new Promise( (resolve)  => {
            setTimeout( ()=>{
                resolve([
                    {
                        id : "020",
                        name: "Mario",
                        lastname : "Perez",
                        role : "admin",
                        picture: "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv",
                    },
                    {
                        id : "021",
                        name: "Aster",
                        lastname : "Arias",
                        role : "admin",
                        picture: "https://i.pinimg.com/originals/1d/df/a9/1ddfa98a7e262b691614bc30923a40d5.jpg",
                    },
                    {
                        id : "022",
                        name: "Fernada",
                        lastname : "Calle",
                        role : "admin",
                        picture: "https://geeksroom.com/wp-content/uploads/2019/02/this-person-does-not-exist-1-459x450.jpg",
                    },
                    {
                        id : "023",
                        name: "Federico",
                        lastname : "Sabro",
                        role : "admin",
                        picture: "https://img.etimg.com/thumb/msid-72141096,width-640,resizemode-4,imgsize-273004/animal-advocacy-efforts.jpg",
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
        userInfo.picture =  'https://miro.medium.com/focal/1200/1200/48/51/1*k-B13-IWqjtFx09A9LKTkg.jpeg'
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
        userInfo.picture =  'https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'
    
        return userInfo //status
    }
}

export default adminsApi