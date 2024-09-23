import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import Metadat from '../layouts/Metadat';
import Loader from '../layouts/Loader';
import { clearErrors, updateUserPassword } from '../../redux/Action/Useraction';
import { UPDATE_PASSWORD_RESET } from '../../redux/Constants/Userconstants';

const UpdatePassword = () => {
  const [oldpassword,setOldpassword] = useState()
  const [newpassword,setNewpassword] = useState()
  const [confirmpassword,setConfirmpassword] = useState()

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const alert = useAlert()

  const { user, loading } = useSelector(
    (state) => state.auth

);


  const submitHandle = (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("oldpassword",oldpassword)
    formData.append('newpassword',newpassword)
    formData.append('confirmpassword',confirmpassword)
    dispatch(updateUserPassword(formData))
    
  }

  

  return (
    <>
    {
        loading ? (
            <Loader />
        ) : (
            <>
                <Metadat title={'updatepassword'} />


            </>
        )


    }
    <div className='container'>
        <div className='px-5'>
            <center><h3 className='mb-3'>Update Password</h3></center>
            <form onSubmit={submitHandle}>
                <div className="form-group">
                    <label>oldpassword</label>
                    <input value={oldpassword} type="password" name='oldpassword' className="form-control" placeholder="Enter oldPassword" onChange={(e) => setOldpassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>newpassword</label>
                    <input value={newpassword} type="password" name='newpassword' className="form-control" placeholder="Enter newpassword" onChange={(e) => setNewpassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>confirmpassword</label>
                    <input value={confirmpassword} type="password" name='confirmpassword' className="form-control" placeholder="Enter confirmpassword" onChange={(e) => setConfirmpassword(e.target.value)} />
                </div>
           
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
</>
  );
}

export default UpdatePassword;
