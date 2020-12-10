const chatApi = {
    getChat(from, to){
        return new Promise( resolve =>{
            setTimeout( ()=>{
                if(from == '001' & to == '011'){
                    resolve([
                        {
                            from:'001', to: '011', timestamp: '11-09-2020 10:05:26', 
                            message: "Hola Doctor, buenos días"
                        },
                        {
                            from:'001', to: '011', timestamp: '11-09-2020 10:05:26', 
                            message: "como esta?"
                        },
                        {
                            from:'011', to: '001', timestamp: '11-09-2020 10:05:28', 
                            message: "¿Qué tal Monica?"
                        },
                        {
                            from:'011', to: '001', timestamp: '11-09-2020 10:05:28', 
                            message: "¿en que puedo ayudarte?"
                        },
                        {
                            from:'001', to: '011', timestamp: '11-09-2020 10:05:29', 
                            message: "Me he sentido un poco mareada ultimamente"
                        },
                        {
                            from:'001', to: '011', timestamp: '11-09-2020 10:05:30', 
                            message: "Me he sentido un poco mareada ultimamente"
                        },
                        {
                            from:'011', to: '001', timestamp: '11-09-2020 10:05:31', 
                            message: "¿Desde hace cuanto?"
                        },
                        {
                            from:'001', to: '011', timestamp: '11-09-2020 10:05:32', 
                            message: "¿Desde hace cuanto?"
                        }
                    ])
                }
                if(from == '001' & to == '012'){
                    resolve([
                        {
                            from:'001', to: '012', timestamp: '11-09-2020 10:05:26', 
                            message: "buenos días"
                        },
                        {
                            from:'001', to: '012', timestamp: '11-09-2020 10:05:26', 
                            message: "asdsa asd asfson  dskldfklg  sdg lkgdf"
                        },
                        {
                            from:'012', to: '001', timestamp: '11-09-2020 10:05:28', 
                            message: "lumen de yunr tyius a"
                        },
                        {
                            from:'012', to: '001', timestamp: '11-09-2020 10:05:28', 
                            message: "amser fi tyutrs sfintsol dtuanabfs sftnbkñ"
                        },
                        {
                            from:'001', to: '012', timestamp: '11-09-2020 10:05:29', 
                            message: "uidlja batsblk jjhuygs oijsdpomakasn kljaso  sadasi ds sjkjka "
                        },
                        {
                            from:'001', to: '012', timestamp: '11-09-2020 10:05:30', 
                            message: "Mss ui dueir miuw etsuiope saptatuer opruytest"
                        },
                        {
                            from:'012', to: '001', timestamp: '11-09-2020 10:05:31', 
                            message: "uioetrsean utori yuio vyuate "
                        },
                        {
                            from:'001', to: '012', timestamp: '11-09-2020 10:05:32', 
                            message: "sryuer ols firs tios furtlos loriuye cuimiust asyudb maosu eoust"
                        }
                    ])
                }
                if(from == '001' & to == '013'){
                    resolve([
                        {
                            from:'001', to: '013', timestamp: '11-09-2020 10:05:26', 
                            message: "rue sjif aoemms apos sorpas omng´s as"
                        },
                        {
                            from:'001', to: '013', timestamp: '11-09-2020 10:05:26', 
                            message: "asdsa asd asfson   dsadas sdg sd dskldfklg  sdg lkgdf"
                        },
                        {
                            from:'013', to: '001', timestamp: '11-09-2020 10:05:28', 
                            message: "lumen de yunr tyius a"
                        },
                        {
                            from:'013', to: '001', timestamp: '11-09-2020 10:05:28', 
                            message: "amser fi tyutrs sfintsol dasd asas tuanabfs sftnbkñ"
                        },
                        {
                            from:'001', to: '013', timestamp: '11-09-2020 10:05:29', 
                            message: "uidlja batsblk jjhuygs oijsa dasdasdpomakasn kljaso  sadasi ds sjkjka "
                        },
                        {
                            from:'001', to: '013', timestamp: '11-09-2020 10:05:30', 
                            message: "Mss ui duasds aseir miuw etsu adasd aiope saptatuer opruytest"
                        },
                        {
                            from:'013', to: '001', timestamp: '11-09-2020 10:05:31', 
                            message: "u ioeasda  trsean utsasadd asdaori yasdas  asas asuio vyuate "
                        },
                        {
                            from:'001', to: '013', timestamp: '11-09-2020 10:05:32', 
                            message: "sryuer ols  sad  asasdasdfirs  asdasd asdtios furtlo asdsad ass loriuye cuimiust asyudb maosu eoust"
                        }
                    ])
                }
                if(from == '001' & to == '014'){
                    resolve([
                        {
                            from:'001', to: '014', timestamp: '11-09-2020 10:05:26', 
                            message: "Hola Dosdf sdfdsgsdh dfghd tor, buenos días"
                        },
                        {
                            from:'001', to: '014', timestamp: '11-09-2020 10:05:26', 
                            message: "como esdf dsf sdsddfh dfg  sta?"
                        },
                        {
                            from:'014', to: '001', timestamp: '11-09-2020 10:05:28', 
                            message: "¿Qué tal sdfsd sdg sgsdsd Monica?"
                        },
                        {
                            from:'014', to: '001', timestamp: '11-09-2020 10:05:28', 
                            message: "¿en que sd sdgdf dfgdfh dfg dfg dfpuedo ayudarte?"
                        },
                        {
                            from:'014', to: '011', timestamp: '11-09-2020 10:05:29', 
                            message: "Me he sentisdf sdfs dfsddo un poco mareada ultimamente"
                        },
                        {
                            from:'014', to: '011', timestamp: '11-09-2020 10:05:30', 
                            message: "Mesd fsdfhe sentid sdfsd o un poco sdfsd  mareada ultimamente"
                        },
                        {
                            from:'011', to: '014', timestamp: '11-09-2020 10:05:31', 
                            message: "¿ sdf sdf sdDesde hace sdfsd cuanto?"
                        },
                        {
                            from:'014', to: '011', timestamp: '11-09-2020 10:05:32', 
                            message: "¿Desde hsd fsdf sace sd fsdf sdcuanto?"
                        }
                    ])
                }
            },600)
        })
    }
}

export default chatApi