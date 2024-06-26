import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productActions, productSelector } from "../redux/reducers/productsReducer";
const AddProduct = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: null,
    description: null,
    price: null,
    image: null,
    rating: null,
  });

  const products = useSelector(productSelector).products

  const onAddProduct = (e) => {
    e.preventDefault();

    dispatch(productActions.addProduct({
      id : products[products.length -1].id + 1,
      ...product
    }));

    window.alert("Product Added Successfully !!");

      

  };

  return (
    <form  className="max-w-sm mx-auto add-product-form">
      <div className="mb-5">
        <label
          for="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          name="price"
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="price of product"
          required
        />
      </div>

      <div className="mb-5">
        <label
          for="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image
        </label>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
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
          onChange={(e) => setProduct({ ...product, rating: e.target.value })}
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

      <button
        type="submit"
        onClick={(e) => onAddProduct(e)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
