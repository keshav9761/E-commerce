import axios from "axios"

const productData = async () => {
    const productItem = await axios.get("https://dummyjson.com/products?limit=100")
    return productItem?.data.products
}


const productData2 = async () => {
    const productItem = await axios.get("https://dummyjson.com/products?limit=100")
    return productItem?.data.products
}



export default {
    productData,
    productData2
}