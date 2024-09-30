import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const HomePageProductCard = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products on component mount
  }, []);

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart");
  };

  return (
    <div className="mt-10">
      <h1 className="text-center mb-5 text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white tracking-wide leading-tight drop-shadow-md">
        Bestselling Products
      </h1>

      <section className="text-gray-600 dark:text-gray-300 body-font">
        <div className="container px-30 py-30 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productData.slice(0, 30).map((item) => {
              const { id, image, title, price } = item;
              return (
                <div key={id} className="p-4 w-full md:w-1/4">
                  <div className="h-full border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <img
                      className="lg:h-80 h-96 w-full"
                      src={image}
                      alt={title}
                      onClick={() => navigate(`/productinfo`, { state: { images: [image], title, price } })} // Navigate and pass product details
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-bold text-orange-700 dark:text-orange-700 mb-1">
                        Vyroluxe
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">
                        {title.substring(0, 25)}
                      </h1>
                      <h1 className="title-font text-lg font-medium text-green-800 dark:text-green-500 mb-3">
                        ₹{price}
                      </h1>
                      <div className="flex justify-center">
                        {cartItems.some((p) => p.id === id) ? (
                          <button onClick={() => deleteCart(item)} className="bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                            Remove from Cart
                          </button>
                        ) : (
                          <button onClick={() => addCart(item)} className="bg-cyan-600 hover:bg-cyan-700 w-full text-white py-[4px] rounded-lg font-bold duration-500">
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageProductCard;
