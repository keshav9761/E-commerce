import '../../App.css'
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import services from "./Services/servies";
import { useDispatch, useSelector } from "react-redux";
import { StarIcon } from '@heroicons/react/24/outline'
import Pagination from '../Pagination'
export default function ProductList() {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("");
  const products = useSelector((state) => state?.product?.data || [])

  // console.log("777##", products)
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1 &&
      selectedPage <= (products.length / 10) &&
      selectedPage !== page
    )
      setPage(selectedPage)
  }

  useEffect(() => {
    console.log("first",)
    dispatch(services?.productsFetch());
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div>
            <input
              className="block w-1/3 rounded-md border-0 py-1.5 px-2 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="search only Brand"
              onChange={handleSearch}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.filter((item) => {
              if (searchQuery == "") {
                return item;
              } else if (
                item.brand.toLowerCase().includes(searchQuery.toLowerCase())
              ) {
                return item;
              }
            })?.
              slice(page * 10 - 10, page * 10)
              .map((product, i) => (
                <Link to={`/productdetail/${product.id}`}>
                  <div key={product.id} className="group relative border-solid border-2 p-2 border-gray-200">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" id='box'>
                      <img
                        src={product?.thumbnail}
                        // alt={product.thumbnail}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <div>
                            <span aria-hidden="true" className="" />
                            {product?.title}
                          </div>
                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500">
                      <StarIcon className='w-6 h-6 inline'></StarIcon>
                      <span className='mt-11'></span>{product.rating}
                      </p> */}
                        <p className="mt-1 text-sm text-gray-500">
                          {product.brand}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-400 line-through decoration-red-700">
                          Rs.{product.price}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          Dis.{Math.round(product?.price * (1 - product?.discountPercentage / 100))}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        {/*--------------------- pagination--------------------------- */}
        {/* <Pagination /> */}
        {
          products.length > 0 && <div className='pagination'>
            <span
              className={page > 1 ? "" : "pagination_disable"}
              onClick={() => selectedPageHandler(page - 1)}
            >
              Pre</span>
            {
              [...Array(products.length / 10)].map((_, i) =>
                <span
                  key={i}
                  onClick={() => selectedPageHandler(i + 1)}
                  className={page === i + 1 ? "pagination_selected" : ""}
                >{i + 1}</span>)
            }
            <span
              onClick={() => selectedPageHandler(page + 1)}
              className={page < products.length / 10 ? "" : "pagination_disable"}

            >
              Next</span>
          </div>
        }
      </div>

    </>
  );
}
