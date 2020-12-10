import axios from 'axios'
const doctoresApi = {
    getDoctores(){
        return new Promise( (resolve)  => {
            axios.get('http://127.0.0.1:8000/usuario/doctores/').then(data=>{
                console.log(data)
                if(data.status == 200){
                    resolve(data.data)
                } 
            })
        })
    },
    update: function(userInfo){
        var data = {}
        data.id = userInfo.id;
        data.first_name = userInfo.name;
        data.last_name = userInfo.lastname;
        data.picture = userInfo.foto;
        return new Promise((resolve)=>{
            axios.put('http://127.0.0.1:8000/usuario/actualizar/' + userInfo.id, data).then(data =>{
                resolve(data)
            })
        })          
    },

    delete : function(id){
        return new Promise((result)=>{
            axios.delete('http://127.0.0.1:8000/usuario/eliminar/' + id).then(()=>{
                result(true)
            })
        })  
    },

    save : function(userInfo){
        var data = {}
        data.first_name = userInfo.name;
        data.last_name = userInfo.lastname;
        data.picture = userInfo.foto;
        data.password = userInfo.password;
        data.username = userInfo.email;
        data.email = userInfo.email;
        data.role = "Doctor"

        return new Promise((resolve)=>{
            axios.post('http://127.0.0.1:8000/usuario/agregar/', data).then(data =>{
                resolve(data)
            })
        }) 
    }
}

export default doctoresApi