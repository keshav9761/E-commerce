import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// const Base = 'https://dummyjson.com'
// const productData = async () => {
//     const productItem = await axios.get(`${Base}/products?limit=100`)
//     return productItem?.data.products
// }

const productsFetch = createAsyncThunk('product/productFetch', async () => {
    const response = await axios.get('http://localhost:8000/products')
    return response?.data 
})

export default { productsFetch }