import React, { useState } from 'react'
import { clearErrors, CreateUser } from '../../redux/Action/Useraction'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useAlert} from 'react-alert'
import Loading from '../layouts/Loader'
import Metadata from '../layouts/Metadat'
const Register = () => {
  const alert = useAlert()
  const navigate = useNavigate()
  const dispatch  = useDispatch()
  const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword,setConfirmpassword] = useState()
    const [image,setImage] = useState()
    const {isAuthenticated, error , loadng} = useSelector(state => state.auth)

    const submitHandler = (e) => {
      e.preventDefault()
      console.log(name + email + image)
      const formData = new FormData()
      formData.append('name',name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('confirmpassword', confirmpassword)
      formData.append('image', image)
      dispatch(CreateUser(formData))
    }

    useEffect(()=>{
      if(isAuthenticated){
        navigate('/login')
      }

      if(error){
        alert.error(error)
        dispatch(clearErrors)
      }
    },[alert,error,dispatch,isAuthenticated,navigate])
  return (
    <>


      {
        loadng ? (
          <Loading/>
        ) :(
          <>
          <Metadata title={'Registration'}/>
                               <form onSubmit={submitHandler} class="text-center" novalidate="novalidate" >
              <input type="text" name="name" id="name" class="form-control mt-4" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
              <input type="email" name="email" id="email" class="form-control mt-4" placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" name="password" id="password" class="form-control mt-4" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
              <input type="password" name="confirmpassword" class="form-control mt-4" placeholder="Confirm password" onChange={(e) => setConfirmpassword(e.target.value)} required />
              <input type="file" name="image" class="form-control mt-4" onChange={(e) => setImage(e.target.files[0])}
                required />
        
              <button class="btn mt-4 btn btn-primary" >REGISTER</button>
            </form>
          </>
        )
      }

  
    </>
  )
}

export default Register