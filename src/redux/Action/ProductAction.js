import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILED
} from '../Constants/ProductConstant'

import axios from 'axios'

export const getProducts = () => async(dispatch) => {
    try {
        dispatch({
            type:ALL_PRODUCT_REQUEST
        })

        const {data} = await axios.get('/getproduct')
        console.log(data)

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        })
        
    }
}

export const getProductDetail = (id) => async (dispatch) =>{
    try {
      dispatch({type:PRODUCT_DETAILS_REQUEST})
      const {data} = await axios.get(`https://ecommerce-8mbj.onrender.com/api/getdetails/${id}`)
  
      console.log(data)
  
      dispatch({
        type:PRODUCT_DETAILS_SUCCESS,
        payload:data,
      })
  
  
      
    } catch (error) {
      dispatch({
        type:PRODUCT_DETAILS_FAILED,
        payload:error.response.data.message,
      })
    }
  }
  
