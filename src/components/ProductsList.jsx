import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductItemCard from "./ProductItemCard";
import Spinner from "./Spinner";

import {
  productActions,
  getInitialProductsAsync,
  productSelector,
} from "../redux/reducers/productsReducer";

const ProductsList = () => {
  const dispatch = useDispatch();
  const productsInDB = useSelector(productSelector).products;

  const { products, loading, error } = useSelector(productSelector);

   console.log(products);

  useEffect(() => {
    if (productsInDB.length == 0) {
      dispatch(productActions.startFetchingProducts());
      dispatch(getInitialProductsAsync());
    }
  }, [dispatch , products]);

  

  return (
    <div className="">
      <Spinner loading={loading} />
      <div class="grid grid-cols-3 gap-2">
        {products.length > 0 && error == null ? (
          products.map((product , index) => <div> <ProductItemCard key={index} index={index} data={product} /> </div>)
        ) : (
          <h3>No products Found</h3>
        )}

        {error != null ? <h3>Server Error</h3> : null}
      </div>
    </div>
  );
};

export default ProductsList;
