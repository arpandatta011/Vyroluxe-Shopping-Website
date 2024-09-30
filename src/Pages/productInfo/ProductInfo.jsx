import Layout from "../../components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice"; // Adjust the import path as necessary

const ProductInfo = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { images = [], title, price, id } = location.state || {}; // Destructure with default values and get the product ID

  const handleAddToCart = () => {
    const product = {
      id, // Use the actual product ID passed from the previous page
      title,
      price,
      image: images.length > 0 ? images[0] : 'fallback-image-url.jpg', // Include the image in the product data
    };
    dispatch(addToCart(product));
  };

  const handleDeleteFromCart = () => {
    // Use the actual product ID to delete the item from the cart
    dispatch(deleteFromCart({ id }));
  };

  return (
    <Layout>
      <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            {/* Left Side: Image */}
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div>
                <img
                  className="w-full lg:h-[39em] rounded-lg"
                  src={images.length > 0 ? images[0] : 'fallback-image-url.jpg'} // Fallback if images are not available
                  alt={title || "Product Image"} // Use a fallback alt attribute
                />
              </div>
            </div>

            {/* Right Side: Product Details */}
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6">
                  <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {title || "Product Title"} {/* Display the product title with fallback */}
                  </h2>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                    <span>Rs.{price}.00</span> {/* Display the product price */}
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Description:
                  </h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, explicabo enim ratione voluptatum at cupiditate delectus nemo dolorum officia esse beatae optio ut mollitia sit omnis, possimus nesciunt voluptas natus!
                  </p>
                </div>

                {/* Add to Cart Button */}
                <div className="flex flex-wrap items-center mb-6">
                  <button
                    onClick={handleAddToCart} // Add click handler
                    className="w-full font-bold capitalize px-4 py-3 text-center text-white bg-black border hover:bg-white hover:text-black hover:border-black hover:duration-75 rounded-xl transition-all duration-200 ease-in-out"
                  >
                    Add to cart
                  </button>
                </div>

                {/* Delete from Cart Button */}
                <div className="flex flex-wrap items-center mb-6">
                  <button
                    onClick={handleDeleteFromCart} // Add click handler
                    className="w-full font-bold capitalize px-4 py-3 text-center text-red-600 bg-white border border-red-600 hover:bg-red-600 hover:text-white hover:duration-75 rounded-xl transition-all duration-200 ease-in-out"
                  >
                    Delete from Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;
