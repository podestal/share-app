import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PersistLogin from "./components/PersistLogin"
import AuthRequired from "./components/AuthRequired"


const App = () => {


  return (
    <div className="main">

      <div className="main-body">
         <Header />
        <Routes>
          <Route element={<PersistLogin />}>
            <Route element={<AuthRequired />}>
              <Route path="" element={<Home />}/>
              <Route path="profile" element={<Profile />}/>
            </Route>
          </Route>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
