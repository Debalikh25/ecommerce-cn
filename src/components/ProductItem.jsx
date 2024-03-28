import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../redux/reducers/productsReducer";
import "../product.css";
import { productActions } from "../redux/reducers/productsReducer";

const ProductItem = () => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const products = useSelector(productSelector).products;
  const { index } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id : products[index].id,
    name: products[index].name,
    description: products[index].description,
    price: products[index].price,
    image: products[index].image,
    rating: products[index].rating,
  });

  const save = (e) => {
    e.preventDefault();
    dispatch(productActions.editProduct(product));
    setToggleEdit(false);
  };

  return (
    <>
      <div className="product">
        {!toggleEdit ? (
          <>
            <div class="grid grid-cols-2 gap-4">
              
                <div>
                  <img className="mb-4" src={product.image} alt={product.image} />
                </div>

                <div>
            <div className="mx-4 my-4">
            <h3>Product Name : {product.name}</h3>
            <p>Description : {product.description}</p>
            <h4>Price :₹ {product.price}</h4>

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

                </div>

            </div>
         
          
          
          </>
        ) : (
          <form className="max-w-sm mx-auto edit-product-form">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-5">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name of product"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    value={product.description}
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
                    name="description"
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="description of product"
                    required
                  ></textarea>
                </div>

                <div className="mb-5">
                  <label
                    for="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="price of product"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mb-5">
                  <label
                    for="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    value={product.image}
                    onChange={(e) =>
                      setProduct({ ...product, image: e.target.value })
                    }
                    name="image"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="image url"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label
                    for="rating"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Rating (1 - 5)
                  </label>
                  <select
                    id="rating"
                    value={product.rating}
                    onChange={(e) =>
                      setProduct({ ...product, rating: e.target.value })
                    }
                    name="rating"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>

            <span>
              <button
                type="submit"
                onClick={(e) => save(e)}
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Save
              </button>
              <button
                className="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                onClick={() => setToggleEdit(!toggleEdit)}
              >
                Cancel
              </button>
            </span>
          </form>
        )}

        {toggleEdit ? (
          <></>
        ) : (
          <span> 
            <button
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={() => setToggleEdit(!toggleEdit)}
            >
              Edit
            </button>

            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 ml-2 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => {
                dispatch(productActions.deleteProduct(index));
                navigate("/");
              }}
            >
              Delete
            </button>
          </span>
        )}
      </div>
    </>
  );
};

export default ProductItem;
