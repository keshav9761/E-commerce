import NotFound from "../Pages/NotFound";
import ProductList from "../Pages/Products/ProductList";
import ProductDetails from "../Pages/Products/ProductDetail";
import Login from "../Pages/Login";
import SinUp from "../Pages/SinUp";
import CheckOut from "../Pages/CheckOut";
import Cart from "../Pages/Cart";


export default [
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Login /> },
    { path: '/productlist', element: <ProductList /> },
    { path: '/cartlist', element: <Cart /> },
    { path: '/sinup', element: <SinUp /> },
    { path: '/checkout', element: <CheckOut /> },
    { path: '/productdetail', element: <ProductDetails /> }
]