
export default function YelpDescription({business}) {
  let name=business.name

  return(
    <div className="yelp-description-container">
      <h3>{name}</h3>
    </div>
  )
}
