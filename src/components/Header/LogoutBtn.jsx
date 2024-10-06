import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button
      className='inline-block px-6 py-2 text-red-500  text-lg mx-2  text-glassWhite !important
                 bg-transparent bg-opacity-20 backdrop-blur-md backdrop-saturate-150 
                 shadow-lg border border-glassWhite rounded-full transition-all ease-in-out 
                 duration-200 hover:bg-opacity-30 hover:backdrop-blur-lg hover:shadow-xl'
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn
