import {Loader} from '@googlemaps/js-api-loader'
import { useEffect } from 'react';

export default function YelpDescription({business}) {
  console.log(business)
  // console.log(import.meta.env.VITE_GOOGLE_API_KEY)
  useEffect(()=> {
    const loader=new Loader({
    apiKey:'d' ,
    version: 'weekly'
    })
    loader.load().then(async()=> {
      const {Map} = await google.maps.importLibrary('maps');

      map = new Map(document.getElementById("map"))
    })
  },[])

  return(
    <div className="yelp-description-container">
      <h3></h3>
      sldkfjsdkfjk
    </div>
  )
}
