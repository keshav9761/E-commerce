import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const cartsFetch = createAsyncThunk('cart/cartsFetch', async () => {
    const response = await axios.get('http://localhost:8000/cart')
    return response?.data 
})

export default { cartsFetch }