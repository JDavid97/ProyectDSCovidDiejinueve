import axios from 'axios'

const pacientesApi = {
    getPacientes : function(){
        return new Promise((resolve) => {
            axios.get('http://127.0.0.1:8000/usuario/pacientes/').then(data=>{
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
        data.lttd = "3.40719";
        data.lngtd = "-76.457082";
        data.role = "Paciente"

        return new Promise((resolve)=>{
            axios.post('http://127.0.0.1:8000/usuario/agregarpaciente/', data).then(data =>{
                resolve(data)
            })
        })
    }
}

export default pacientesApi