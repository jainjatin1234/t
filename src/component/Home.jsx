import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../redux/Action/CategoryAction'
import img1 from '../img/clothing.jpeg'
import Loader from './layouts/Loader'
import { getProducts } from '../redux/Action/ProductAction'
import { Link } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const { categories, loading, error } = useSelector((state) => state.cat)
    // console.log(categories)

    const { products } = useSelector((state) => state.pro)
    // console.log(products);

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            {/* <!-- Categories Start --> */}
            <div class="container-fluid pt-5">
                <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Categories</span></h2>
                <div class="row px-xl-5 pb-3">
                    {
                        loading ? <Loader /> : (
                            categories.map((cat) =>
                                <>

                                    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                                        <a class="text-decoration-none" href="">
                                            <div class="cat-item d-flex align-items-center mb-4">
                                                <div class="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                                    <img class="img-fluid" src={cat.image.url} alt="" />
                                                </div>
                                                <div class="flex-fill pl-3">
                                                    <h6>{cat.name}</h6>
                                                    {/* <small class="text-body">100 Products</small> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </>
                            )

                        )
                    }



                </div>
            </div>
            {/* <!-- Categories End --> */}








            {/* <!-- Products Start --> */}
            <div class="container-fluid pt-5 pb-3">
                <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Featured Products</span></h2>
                <div class="row px-xl-5">

                    {
                        loading ? <Loader /> : (
                            products.map((pro) =>
                                <>
                                    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                                        <div class="product-item bg-light mb-4">
                                            <div class="product-img position-relative overflow-hidden">
                                                <Link to={`/productdetails/${pro._id}`}>
                                                <img class="img-fluid w-100" src={pro.image.url} alt="" />
                                                
                                                </Link>
                                                
                                                <div class="product-action">
                                                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                                                    <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                                                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                                                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                                                </div>
                                            </div>
                                            <div class="text-center py-4">
                                                <Link class="h6 text-decoration-none text-truncate" to={`/productdetails/${pro._id}`}>{pro.name}</Link>
                                                <div class="d-flex align-items-center justify-content-center mt-2">
                                                    <Link to={`/productdetails/${pro._id}`}>
                                                    <h5>{pro.price}</h5><h6 class="text-muted ml-2"><del>$123</del></h6>
                                                    
                                                    </Link>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-center mb-1">
                                                    <small class="fa fa-star text-primary mr-1"></small>
                                                    <small class="fa fa-star text-primary mr-1"></small>
                                                    <small class="fa fa-star text-primary mr-1"></small>
                                                    <small class="fa fa-star text-primary mr-1"></small>
                                                    <small class="fa fa-star text-primary mr-1"></small>
                                                    <small>(99)</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        )
                    }





                </div>
            </div>
            {/* <!-- Products End --> */}

        </>
    )
}

export default Home