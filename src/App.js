import { useRoutes } from 'react-router-dom'
import NotFound from "./Pages/NotFound";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import SinUp from "./Pages/SinUp";
import Layout from "./Components/Element/Layout";
import CheckOut from "./Pages/CheckOut";
import Cart from "./Pages/Cart";

function App() {
  const routes = useRoutes([
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Login /> },
    { path: '/productlist', element: <ProductList /> },
    { path: '/cartlist', element: <Cart /> },
    { path: '/sinup', element: <SinUp /> },
    { path: '/checkout', element: <CheckOut /> },
    { path: '/productdetail', element: <ProductDetails /> },
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
