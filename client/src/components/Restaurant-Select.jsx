import { useState,useEffect } from "react"

export default function RestaurantSelection() {
  const [yelpCards,setYelpCards] = useState([])
  const [sortBy, setSortBy] = useState('best_match')

  useEffect(()=>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getBusinesses)
  }
  function getBusinesses(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    console.log(position,latitude,longitude)
    const data={
      latitude: latitude,
      longitude: longitude,
      sortBy:sortBy
    }

    fetch('/api/businessesNearby', {
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
  })
  }


})


  return(
    <>
    <div className="display-flex flex-basis-80">
      <div className="flex-basis-50">

      </div>
      <div className="flex-basis-50">

      </div>
    </div>
    </>
  )
}
