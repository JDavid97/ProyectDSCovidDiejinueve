<template>
    <div>
        <h1>Map</h1>
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    name : 'MapView',
    methods:{
      initMap(google) {
        var mapOptions = this.$store.state.maps.googleMapSetting,
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var people = []

        this.$store.state.pacientes.pacientes.forEach(paci => {
            var markerCam = new google.maps.Marker({
                position: new google.maps.LatLng( paci.location.lat, paci.location.lng),
                title: paci.name,
                map:map
            });

            var infowindow = new google.maps.InfoWindow({
            content: '<div>'+
                        '<ul>'+
                            '<li><b>ID:</b> '+paci.id+'</li>'+
                            '<li><b>Nombre:</b> '+paci.name+' '+paci.lastname+'</li>'+
                            '<li><b>rol:</b> '+paci.role+'</li>'+
                            '<li><img src="'+paci.picture+'" width="200px" /></li>'+
                        ' </ul>'+
                    '</div>'
            });

            markerCam.addListener('click', function() {
                infowindow.open(map, markerCam);
            });

            people.push(markerCam)
        });

        // Poner pacientes en el mapa, setMap();
        google.showPeople = ()=>{
            people.forEach(peo =>{
                console.log("poniendo gente")
                peo.setMap(map)
            })  
        }

        google.hidePeople = ()=>{
            people.forEach(peo =>{
                peo.setMap(null)
            })   
        }

        google.showPeople()
      }  
    },
    mounted() {
    var _this = this;
    function loadGM(){
      _this.$store.state.maps.loader.load().then( google => {
          navigator.geolocation.getCurrentPosition(position => {
              var startLocation = {
                  lat: position.coords.latitude, 
                  long: position.coords.longitude
              } 
              _this.$store.commit('maps/SET_CENTERMAP',new google.maps.LatLng(startLocation.lat, startLocation.long) )
              _this.initMap(google);
          })
      });
    }

    //verificar si ya se ha guardado en el store los pacientes
    if(this.$store.state.pacientes.pacientes.length == 0 ){
      this.$store.dispatch('pacientes/getPacientes')
        .then(data => { 
            //console.log(data)
            loadGM() 
        })
    }
    else { 
      loadGM() 
    }
  }
}
</script>

<style scoped>
#map {
    position: relative;
    width: 100%;
    height: calc(100vh - 60px);
}
</style>