import Header from "./Components/Header";
import { useRoutes } from 'react-router-dom'
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import ProductList from "./Pages/ProductList";
import Login from "./Pages/Login";
import Layout from "./Components/Element/Layout";
import SinUp from "./Pages/SinUp";
import CheckOut from "./Pages/CheckOut";
import ProductDetails from "./Pages/ProductDetail";

function App() {
  const routes = useRoutes([
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Login /> },
    { path: '/productlist', element: <ProductList /> },
    { path: '/cartlist', element: <Cart /> },
    { path: '/sinup', element: <SinUp /> },
    { path: '/checkout', element: <CheckOut/> },
    { path: '/productdetail', element: <ProductDetails/> },
  ])
  return (
    <>
      <Layout>
        {routes}
      </Layout>
    </>
  );
}

export default App;
