import { useContext, useEffect } from "react"
import { AuthContext } from "../Contexts/UserProvider"
import { useNavigate } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"

export default function Logout() {

  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{
    setUser({
      loggedIn:false,
      username:'',
      token:''
    })
    navigate('/login')
  })
  
  return <Spinner animation="grow" />
}