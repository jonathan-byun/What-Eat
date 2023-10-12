import { useState,useEffect } from "react"
import YelpCard from "./Yelp-Card"
import YelpDescription from "./Yelp-Card-Description"

export default function RestaurantSelection() {
  const [yelpCards,setYelpCards] = useState({businesses:[]})
  const [sortBy, setSortBy] = useState('best_match')
  const [selectedCard, setSelectedCard] = useState(1)

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
    setYelpCards(data)
  })
  }


},[sortBy])

const businesses=yelpCards.businesses
let yelpCardList = businesses.map((business,index)=> {
  let selected=false
  if (index === selectedCard) {
    selected=true
  }
  return(
  <div onClick={()=>setSelectedCard(index)} className={`${selected ? 'selected-card':'background-neutral'} yelp-card-container  Oswald`}>
    <YelpCard key={business.id} business={business}/>
  </div>
  )
})

  return(
    <>
    <div className="display-flex flex-basis-80 padding-main">
      <div className="flex-basis-50 background-secondary">
        {yelpCardList}
      </div>
      <div className="flex-basis-50 background-alt">
        <YelpDescription />
      </div>
    </div>
    </>
  )
}
