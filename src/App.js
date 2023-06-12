import Header from "./Components/Header";
import { useRoutes } from 'react-router-dom'
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Layout from "./Components/Element/Layout";
import SinUp from "./Pages/SinUp";

function App() {
  const routes = useRoutes([
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Login /> },
    { path: '/productlist', element: <Product /> },
    { path: '/cartlist', element: <Cart /> },
    { path: '/sinup', element: <SinUp /> },
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
