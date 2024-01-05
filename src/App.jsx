import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Home from "./pages/Home"


const App = () => {


  return (
    <div className="main">
      <Header />
      <div className="main-body">
        <Routes>
          <Route path="" element={<Home />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
