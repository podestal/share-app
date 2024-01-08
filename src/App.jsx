import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PersistLogin from "./components/PersistLogin"
import AuthRequired from "./components/AuthRequired"
import About from "./pages/About"
import Subscription from "./components/Subscription"


const App = () => {


  return (
    <div className="main">

      <div className="main-body">
         <Header />
        <Routes>
          <Route element={<PersistLogin />}>
            <Route element={<AuthRequired />}>
              <Route path="profile" element={<Profile />}/>
              <Route path="subscription" element={<Subscription />}/>
            </Route>
          </Route>
          <Route path="" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
