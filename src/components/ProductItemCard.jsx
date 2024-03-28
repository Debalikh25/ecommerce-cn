import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productSelector } from "../redux/reducers/productsReducer";
import { cartSelector } from "../redux/reducers/cartReducer.js";
import { cartActions } from "../redux/reducers/cartReducer.js";
const ProductItemCard = (props) => {
  const product = props.data;
  const index = props.index;

  let cartProducts = useSelector(cartSelector).cart;
  const disptach = useDispatch();


  //Add Product to Cart or Update Product:
  const addToCart = (product) => {
       

    disptach(cartActions.updateCart(product));
  };

  return (
    <div className="product-list product-card">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="product-image"
          src={product.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <div class="flex items-center">
            {Array.from(Array(parseInt(product.rating)), () => {
              return (
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              );
            })}

            {Array.from(Array(5 - parseInt(product.rating)), () => {
              return (
                <svg
                  class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              );
            })}

            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {product.rating}
            </p>
            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              out of
            </p>
            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              5
            </p>
          </div>
        </div>

        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <strong>
              <p class="text-blue-500">₹ {product.price}</p>
            </strong>
          </span>
          <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <Link
              to={`product/${index}`}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              View
            </Link>
          </span>

          <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <button
              onClick={() => addToCart(product)}
              class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Add
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;
