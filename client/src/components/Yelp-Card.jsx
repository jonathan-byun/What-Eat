export default function YelpCard ({business}) {
  let name=business.name
  let image=business.image_url
  let rating=business.rating
  let stars='/regular_' + Math.floor(rating)
  if (rating%1) {
    stars=stars + '_half'
  }
  return (
    <div className="display-flex">
      <div className="yelp-image-container">
        <img className="yelp-image" src={image}></img>
      </div>
      <div className="flex-basis-80 padding-0-10">
        <h3>{name}</h3>
        <div className="display-flex align-center">
          <img src={stars+'.png'}></img>{rating}
        </div>
        <h4></h4>
      </div>
    </div>
  )
}
