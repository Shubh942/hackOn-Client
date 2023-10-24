import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Loading from "../spinner/loading";
import { FirebaseContext } from "../../context/firebase";
import NavBar from "../browsePage/navBar/NavBar";
import SelectedProfile from "../profilePage/SelectedProfile";
import "./cart.scss";

const Cart = () => {
  const [profile, setProfile] = useState({ displayName: "Utkarsh" });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { firebase } = useContext(FirebaseContext);
  // const user = firebase.auth().currentUser || {};
  const user = true || {};

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [visibleItems, setVisibleItems] = useState(20);

  const handleShowMore = () => {
    setVisibleItems(visibleItems + 20);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const details = await axios.get(
          `https://dummyjson.com/products?limit=100`
        );
        setProducts(details.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  return profile?.displayName ? (
    <div className="cart">
      {loading ? <Loading user={user} /> : <div className="releaseBody"></div>}
      <NavBar
        user={user}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="contents">
        <div className="products">
          <h3>Products</h3>
          <div className="product-list">
            {products?.slice(0, visibleItems).map((product) => (
              <div className="card" key={product.id}>
                <img src={product.thumbnail} alt="" />
                <div>{product.title}</div>
                <div className="desc">{product.description}</div>
                <div className="data">
                  <p>{product.price}</p>
                  <p>{product.rating} ⭐</p>
                </div>

                <a
                  onClick={() => {
                    console.log(product);
                    let arry = JSON.parse(localStorage.getItem("keyword"));
                    // console.log("--");
                    // console(arry);
                    // console.log("--");
                    arry.keyword.push(product.category);
                    console.log(arry);
                    localStorage.setItem("keyword", JSON.stringify(arry));

                    setCartItems([...cartItems, product]);

                    console.log(cartItems);
                  }}
                >
                  Add to cart🛒
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-items">
          <h3>Cart Items</h3>
          {cartItems?.slice(0, visibleItems).map((product) => (
            <div className="card" key={product.id}>
              <img src={product.thumbnail} alt="" />
              <div>{product.title}</div>
              <div className="desc">{product.description}</div>
              <div className="data">
                <p>{product.price}</p>
                <p>{product.rating} ⭐</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {visibleItems < products.length && (
        <div className="show-more">
          <a onClick={handleShowMore} className="btn">
            Show More
          </a>
        </div>
      )}
    </div>
  ) : (
    <SelectedProfile user={user} setProfile={setProfile} />
  );
};

export default Cart;
