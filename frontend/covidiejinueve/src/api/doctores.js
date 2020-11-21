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
    }
}

export default doctoresApi