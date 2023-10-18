export default function YelpReview(review) {
  console.log(review);
  const userPicture = review.user.image_url;
  return (
    <>
      <div className="display-flex">
        <div className="yelp-user-picture">
          <img className="yelp-image" src={userPicture}></img>
        </div>
      </div>
    </>
  );
}
