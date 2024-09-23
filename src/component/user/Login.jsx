import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser } from '../../redux/Action/Useraction'
const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alert = useAlert()

    const { isAuthenticated, error, loading } = useSelector(state => state.auth)
    const loginHandler = (e) => {
        e.preventDefault()
        // alert('shs')
        // console.log(email + password)
        dispatch(LoginUser(email,password))
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
            alert.success('login successfyully')
        }

        if (error) {
            alert.error(error)
        }

    }, [alert, navigate, isAuthenticated, dispatch, error])
    return (
        <>

            <form onSubmit={loginHandler} method="post">
                <div class="form-group">
                    <input type="email" name="email" class="form-control" placeholder=" Email or Username" required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                    <input type="password" name="password" class="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="form-group">
                    <button class="btn btn-dark">Log In</button>
                </div>
                <div class="form-group">
                    <Link to={'/register'} class="btn btn-primary">Sign Up</Link>
                </div>
            </form>
        </>)
}

export default Login