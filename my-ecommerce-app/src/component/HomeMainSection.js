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
        <p>At Skeek, we are more than just an online sneaker shop; we are a passionate community of sneaker enthusiasts 
                dedicated to bringing you the latest and greatest in sneaker fashion. Born out of a shared love for kicks and 
                an unwavering commitment to authenticity, Skeek is your go-to destination for all things sneaker-related.
                Founded with the vision of curating a diverse collection of sneakers that caters to every style and taste, Skeek 
                has evolved into a hub where sneaker culture meets cutting-edge fashion. Our journey began with a simple idea – to create an 
                online space where sneakerheads, fashionistas, and casual enthusiasts alike could explore, discover, and shop the hottest kicks on the market.</p>

        <Link to="/products" className="shop-now-btn">
          <input type="submit" value="Shop Now" />
        </Link>
      </div>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index} className="review">
            <p className='reviewerName'>{review.customerName}</p>
            <p className='reviewerContent'>{review.reviewContent}</p>
            <div className='reviewerRating'>Rating: {"⭐".repeat(review.stars)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMainSection;