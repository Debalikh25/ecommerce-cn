import './App.css';
import AddProduct from './components/AddProduct';
import Navbar from "./components/Navbar"
import ProductItem from './components/ProductItem';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import { createBrowserRouter  , RouterProvider , Route , createRoutesFromElements} from 'react-router-dom';

   
const router = createBrowserRouter([
  {
    path : "/" , element : <Navbar /> ,
    children : [
      {
        path : "/" , element : <ProductsList />
        
      },

      {
        path  : "add-product" , element : <AddProduct />
      } ,

      {
        path : "product/:index" , element : <ProductItem />
      } ,

      {
        path : "cart"  , element : <Cart />
      }
    ]
  }
])



function App() {
  return (

     <RouterProvider router={router} />
     
  );
}

export default App;
