import NavBarMain from "./components/NavBar"
import Header from "./components/Header"
import { Container } from "react-bootstrap"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AllPosts from "./components/AllPosts"
import LoginPage from "./pages/LoginPage"
import UserPage from "./components/UserPage"
import Register from "./pages/Register"
import Logout from "./components/Logout"


function App() {

  return (
  <>
    <Container className='App'>
      <NavBarMain />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ < AllPosts /> } />
          <Route path='/posts' element={ <AllPosts /> }/>
          <Route path='/login' element={ <LoginPage /> }/>
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path='/user/:username' element={ <UserPage /> } />
          <Route path='*' element={ <Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  </>
  )
 }
 
 export default App
