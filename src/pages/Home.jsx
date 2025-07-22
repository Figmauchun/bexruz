import home1 from "/imgs/home1.png";
import { IoBagHandleSharp } from "react-icons/io5";
import lolo from "/imgs/lolo.png";
import { useState, useEffect } from "react";

import five from "/imgs/five.png";
import star from "/imgs/star.png";
import woman from "/imgs/woman.png";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GiPoloShirt, GiLargeDress } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";

function Home() {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null); // Accordion uchun

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
        setFilteredTrips(data);
      });
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredTrips(trips);
    } else {
      const filtered = trips.filter((trip) => trip.category === category);
      setFilteredTrips(filtered);
    }
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    "Can I modify my order after placing it?",
    "How do I initiate a return?",
    "How can I unsubscribe from the newsletter?",
    "Do you offer exchanges for products?",
    "How can I place an order on Klothink?",
    "What payment methods do you accept?",
    "How can I track my order?",
    "What is your shipping policy?",
    "Are there any additional fees for returns?",
    "How do I create an account on Klothink?",
    "Can I change my account information?",
    "Are my personal details secure on Klothink?",
  ];

  const answers = [
    "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    "Yes, we offer exchanges within 14 days of purchase.",
    "Ordering is easy! Simply browse, add items to cart and checkout.",
    "We accept Visa, Mastercard, PayPal, and more.",
    "Track your order via the 'Track My Order' section on our site.",
    "Our shipping policy offers standard and express options.",
    "No, returns are free within 14 days.",
    "Click 'Sign Up' and fill in your details to create an account.",
    "Yes, go to Account Settings to update your info.",
    "Yes, all data is encrypted and protected by SSL.",
  ];

  return (
    <div className="container">
      <div className="home">
        <div className="home-r">
          <h2>Elevate Your Style with Klothink</h2>
          <p>
            Explore a world of fashion at Klothink, where trends meet
            affordability.
          </p>
          <div className="but-home">
            <button className="btn-i">
              <div className="ih">
                <IoBagHandleSharp />
              </div>
              Shop Now
            </button>
            <button className="btn-2i">Contact Us</button>
          </div>
          <div className="home-cards">
            {[...Array(4)].map((_, index) => (
              <div className="home-card" key={index}>
                <h4>Over 1000+</h4>
                <p>Trendsetting Styles</p>
              </div>
            ))}
          </div>
        </div>
        <div className="home-l">
          <img src={home1} alt="home" />
        </div>
      </div>

      <div className="filter-json">
        <div className="json-title">
          <div className="h2-box">
            <h2>Discover Fashion.Behruz</h2>
            <p>
              Dive into a world of fashion innovation at Klothink. Our curated
              collections bring together the latest trends and timeless
              classics.
            </p>
          </div>
          <div className="json-btn">
            <button>View All Products</button>
          </div>
        </div>

        <div className="filter-btn">
          <div className="category">
            <button onClick={() => handleFilter("all")}>All</button>
            <button onClick={() => handleFilter("Men`s Blog")}>
              <GiPoloShirt /> Men's Blog
            </button>
            <button onClick={() => handleFilter("Women’s wear")}>
              <GiLargeDress /> Women’s Blog
            </button>
            <button onClick={() => handleFilter("Kid’s wear")}>
              <FaBaby /> Kid’s Blog
            </button>
          </div>
          <div className="raz">
            <button>Casual</button>
            <button>Formal</button>
            <button>Party</button>
          </div>
        </div>

        <div className="cards-js">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filteredTrips.map((trip) => (
              <SwiperSlide key={trip.id}>
                <Link to={`/product/${trip.id}`} className="card-js">
                  <img src={trip.Img.trim()} alt={trip.Name} />
                  <h4>{trip.Name}</h4>
                  <h5>{trip.Price}</h5>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="page">
        <div className="page-title">
          <h2>The Klothink Experience.</h2>
          <p>
            We blend creativity with commitment to deliver unparalleled style
            and quality.
          </p>
        </div>
        <div className="page-cards">
          {[...Array(6)].map((_, i) => (
            <div className="page-card" key={i}>
              <div className="star-box">
                <img src={star} alt="star" />
                <h3>Passionate Craftsmanship</h3>
              </div>
              <p>
                Every garment is crafted with passion, reflecting our commitment
                to quality.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="love">
        <div className="json-title">
          <div className="h2-box">
            <h2>Customers Love.</h2>
            <p>
              Explore the heartfelt testimonials shared by those who have
              experienced Klothink fashion.
            </p>
          </div>
          <div className="json-btn">
            <button>View All Testimonials</button>
          </div>
        </div>
        <div className="page-cards">
          {[...Array(6)].map((_, i) => (
            <div className="page-card" key={i}>
              <div className="stars-box">
                <img src={woman} alt="customer" />
                <div className="text">
                  <h3>Sarah Thompson</h3>
                  <img src={five} alt="rating" />
                </div>
                <img src={lolo} alt="icon" />
              </div>
              <p>
                Every garment is crafted with passion, reflecting our commitment
                to innovation.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="have">
        <div className="page-title">
          <h2>Questions? We Have Answers.</h2>
          <p>
            Our FAQs cover everything you need for a seamless shopping
            experience.
          </p>
        </div>

        <div className="have-btn">
          <button>All</button>
          <button>Ordering</button>
          <button>Shipping</button>
          <button>Returns</button>
          <button>Customer Support</button>
        </div>

        {/* ✅ Accordion */}
        <div className="big-cards">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                className={`faq-card ${isOpen ? "open" : ""}`}
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="faq-question">
                  <p>{faq}</p>
                  <span>{isOpen ? "×" : "+"}</span>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{answers[i]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="numbers">
        <div className="page-title">
          <h2>Seamless Experience.</h2>
          <p>We've designed a straightforward shopping experience for you.</p>
        </div>
        <div className="numbers-cards">
          {[...Array(4)].map((_, i) => (
            <div className="number-card" key={i}>
              <h2>0{i + 1}</h2>
              <h4>Discover Trends</h4>
              <p>Explore our curated collection of 1000+ styles</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
