// import NotFound from "../Pages/NotFound";
// import ProductList from "../Pages/Products/ProductList";
// import ProductDetails from "../Pages/Products/ProductDetail";
// import Login from "../Pages/Login";
// import SinUp from "../Pages/SinUp";
// import CheckOut from "../Pages/CheckOut";
// import Cart from "../Pages/Cart";
// import { lazy } from "react";
import Spinner from '../Pages/Spinner'
import { lazy } from 'react'

const ProductList=lazy(()=>import('../Pages/Products/ProductList'));
const Login=lazy(()=>import('../Pages/Login'));
const Cart=lazy(()=>import('../Pages/Cart'));
const SinUp=lazy(()=>import('../Pages/SinUp'));
const CheckOut=lazy(()=>import('../Pages/CheckOut'))
const ProductDetails=lazy(()=>import('../Pages/Products/ProductDetail'));
const NotFound=lazy(()=>import('../Pages/NotFound'))

export default [
    { path: '*', element: <NotFound /> },
    { path: '/', exact: true, element: <Login /> },
    { path: '/productlist', element: <ProductList /> },
    { path: '/cartlist', element: <Cart /> },
    { path: '/sinup', element: <SinUp /> },
    { path: '/checkout', element: <CheckOut /> },
    { path: '/productdetail', element: <ProductDetails /> },
    { path: '/spinner', element: <Spinner /> }
]