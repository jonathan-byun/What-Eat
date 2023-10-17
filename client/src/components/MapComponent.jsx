import { useRef,useEffect,useState } from "react";
import {Wrapper} from '@googlemaps/react-wrapper'

export default function MapComponent({yelpCards,selectedCard}) {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY
  let coordinates=yelpCards[selectedCard].coordinates
  function Map() {
    const [mapDetails, setMapDetails] = useState({center:{lat:0,lng:0},zoom:15})
    const ref=useRef();
    useEffect(()=> {
      const center = mapDetails.center
      const zoom = mapDetails.zoom
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      })
    },[mapDetails])
    useEffect(()=> {
      setMapDetails(mapDetails=>({...mapDetails, center:{lat:coordinates.latitude,lng:coordinates.longitude}}))
    },[])
    return(<div className="map" ref={ref} id="map"></div>)
  }
return (
  <Wrapper apiKey={apiKey}>
    <Map />
  </ Wrapper>
)
}
