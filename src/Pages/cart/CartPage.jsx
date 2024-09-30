import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { increaseQuantity, decreaseQuantity, deleteFromCart } from '../../redux/cartSlice';
import BuyNowModal from '../../Components/buyNowModal/BuyNowModal';
import Layout from '../../Components/layout/Layout';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * Number(item.quantity),
    0
  );
  const deliveryFee = cartItems.length > 0 ? 10 : 0;
  const totalAmount = totalPrice + deliveryFee;

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-center mb-5 text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white tracking-wide leading-tight drop-shadow-md">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            {/* Left Side: Cart Items */}
            <section aria-labelledby="cart-heading" className="rounded-lg bg-gray-200 lg:col-span-8">
              <h2 id="cart-heading" className="sr-only">Shopping Cart</h2>
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((product) => (
                      <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:py-4">
                        <div className="flex-shrink-0">
                          <img
                            src={product.image || 'path/to/placeholder-image.jpg'}
                            alt={product.title}
                            className="h-24 w-24 rounded-md object-contain object-center sm:h-32 sm:w-32"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <h3 className="text-sm font-semibold text-black">
                              {product.title}
                            </h3>
                            <div className="mt-1 flex text-sm">
                              <p className="text-sm text-gray-500">{product.category}</p>
                              {product.size && (
                                <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                  {product.size}
                                </p>
                              )}
                            </div>
                            <div className="mt-1 flex items-end">
                              <p className="text-xs font-medium text-gray-500 line-through">
                                ₹{product.originalPrice}
                              </p>
                              <p className="text-sm font-medium text-gray-900">
                                &nbsp;&nbsp;₹{parseFloat(product.price).toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="mb-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() => dispatch(decreaseQuantity(product))}
                                className="h-7 w-7 text-gray-600"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="mx-1 h-7 w-12 rounded-md border text-center"
                                value={product.quantity}
                                readOnly
                              />
                              <button
                                type="button"
                                onClick={() => dispatch(increaseQuantity(product))}
                                className="h-7 w-7 text-gray-600"
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => dispatch(deleteFromCart(product))}
                              className="ml-6 flex items-center space-x-1 px-2 py-1 text-red-500"
                            >
                              <FaTrash size={12} />
                              <span className="text-xs font-medium">Remove</span>
                            </button>
                            {/* <BuyNowModal product={product} /> Modal for buying the product */}
                            <BuyNowModal product={product} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </>
                ) : (
                  <h1 className='text-center p-10 dark:text-black font-bold'>Not Found</h1>
                )}
              </ul>
            </section>

            {/* Right Side: Price Details */}
            <section className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
              <h2 className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
                Price Details
              </h2>
              <div className="px-2 py-4">
                <dl className="space-y-1">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">Price ({cartItems.length} items)</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ₹{totalPrice.toFixed(2)}
                    </dd>
                  </div>
                  {cartItems.length > 0 && (
                    <div className="flex items-center justify-between pt-4">
                      <dt className="text-sm text-gray-800">Delivery Fee</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ₹{deliveryFee.toFixed(2)}
                      </dd>
                    </div>
                  )}
                  <div className="flex items-center justify-between border-y border-dashed border-gray-200 py-4">
                    <dt className="text-base font-semibold text-gray-900">Total Amount</dt>
                    <dd className="text-base font-semibold text-gray-900">
                      ₹{totalAmount.toFixed(2)}
                    </dd>
                  </div>
                </dl>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
