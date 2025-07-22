import home1 from "/imgs/home1.png";
import { useState, useEffect } from "react";
import { GiPoloShirt, GiLargeDress } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { Link } from "react-router-dom"; // Link import qilindi

function About() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container">
      <div className="filter-json">
        <div className="kid-title">
          <div className="kid-r">
            <h2>Discover Now</h2>
            <p>
              Dive into the world of fashion excellence at Klothink. Our curated
              selection brings together the latest trends and timeless classics,
              offering you a diverse array of clothing items that resonate with
              your unique style.
            </p>
          </div>
          <div className="kid-l">
            <div className="kid-cards">
              <div className="kid-card">
                <h4>Exclusive Offers</h4>
                <p>30% off on select items</p>
              </div>
              <div className="kid-card">
                <h4>New Arrivals</h4>
                <p>50+ new arrivals Daily</p>
              </div>
              <div className="kid-card">
                <h4>Over 1,500+</h4>
                <p>Curated fashion products.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-kid">
          <div className="category-kid">
            <button onClick={() => handleFilter("all")}>All</button>
            <button onClick={() => handleFilter("Men’s wear")}>
              <GiPoloShirt />
              Men’s wear
            </button>
            <button onClick={() => handleFilter("Women’s wear")}>
              <GiLargeDress />
              Women’s wear
            </button>
            <button onClick={() => handleFilter("Kid’s wear")}>
              <FaBaby />
              Kid’s wear
            </button>
          </div>
        </div>

        <div className="cards-kid">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`} // Link bilan o‘ralgan
              key={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card-kid">
                <img src={product.Img} alt={product.Name} />
                <div className="kid-price">
                  <h4>{product.Name}</h4>
                  <h5>{product.Price}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
