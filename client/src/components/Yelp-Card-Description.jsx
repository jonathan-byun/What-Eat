import { useEffect, useState } from 'react';
import YelpReview from './reviews';

export default function YelpDescription({ business }) {
  const [reviews, setReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/businessReviews/${business.id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [business]);

  useEffect(() => {
    setLoaded(reviews.length > 0);
  }, [reviews]);

  let name = business.name;
  let categories = business.categories;
  let categoriesList = categories.map((category) => {
    return (
      <div key={category.title} className="category-bubble">
        {category.title}
      </div>
    );
  });

  let reviewsList = loaded
    ? reviews.map((review) => {
        return <YelpReview key={review.id} review={review} />;
      })
    : 'loading';

  return (
    <div className="yelp-description-container">
      <h3>{name}</h3>
      <div className="category-container display-flex align-center">
        <h5>Categories:</h5>
        {categoriesList}
      </div>
      {reviewsList}
    </div>
  );
}
