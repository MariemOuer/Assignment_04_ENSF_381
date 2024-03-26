import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const getRandomReviews = () => {
      const shuffled = [...reviews].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2);
    };

    setRandomReviews(getRandomReviews());
  }, []);

  return (
    <section>
      <div className="about-us">
        <h2>About Us</h2>
        <p>Welcome to our online store! Learn more about our story and commitment to your satisfaction. 
        We are passionate about providing exceptional customer service.</p>

        <Link to="/products" className="shop-now-btn">
          <input type="submit" value="Shop Now" />
        </Link>
      </div>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <div>Rating: {"⭐".repeat(review.stars)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMainSection;