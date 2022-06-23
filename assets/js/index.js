document.addEventListener("DOMContentLoaded",()=>{
    fetchTrips();
})

function fetchTrips(){
    fetch("http://localhost:3000/trips-app")
    .then(resp=>resp.json())
    .then(tripsData=>console.log(tripsData))
    
}
