import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import lolo from "/imgs/lolo.png";

import five from "/imgs/five.png";
import woman from "/imgs/woman.png";
import "swiper/css";
import "swiper/css/pagination";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [openIndex, setOpenIndex] = useState(null); // Accordion uchun

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setProduct(found);
      });
  }, [id]);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (!product) return <div className="loading">Loading...</div>;
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
    <div className="welcome">
      <div className="detail-container">
        <div className="detail-left">
          <div className="main-image">
            <img src={product.DetImg || product.Img} alt={product.Name} />
          </div>
          <div className="thumbnail-row">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={product.Img}
                alt="thumb"
                className="thumbnail"
              />
            ))}
          </div>
        </div>

        <div className="detail-right">
          <p className="category">{product.category}</p>
          <h2 className="product-name">{product.Name}</h2>
          <h3 className="product-price">{product.Price}</h3>
          <p>{product.Info}</p>
          <div className="product-meta">
            <p>
              <strong>Material:</strong> High-Quality Denim (100% Cotton)
            </p>
            <p>
              <strong>Fit:</strong> Classic Fit
            </p>
          </div>

          <div className="options">
            <div className="color-options">
              <p>
                <strong>Color:</strong>
              </p>
              <div className="colors">
                <div className="color-circle brown"></div>
                <div className="color-circle yellow"></div>
              </div>
            </div>
            <div className="size-options">
              <p>
                <strong>Sizes:</strong>
              </p>
              <div className="sizes">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button key={size} className="size-btn">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="btns">
            <button className="buy-now">Buy Now</button>
            <button className="add-cart">Add To Cart</button>
          </div>

          <div className="shipping-info">
            <h4>Shipping Information</h4>
            <ul>
              <li>Standard shipping: 3–5 business days</li>
              <li>Express shipping available at checkout</li>
            </ul>
          </div>

          <div className="features">
            <h4>Features</h4>
            <ul>
              <li>Distressed detailing for a rugged look</li>
              <li>Button-up front closure with engraved buttons</li>
              <li>Two side pockets for added functionality</li>
              <li>Adjustable cuffs for a personalized fit</li>
              <li>Back waist tabs for customizable styling</li>
            </ul>
          </div>
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
    </div>
  );
}

export default ProductDetail;
