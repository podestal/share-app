import './app.css'
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PersistLogin from "./components/PersistLogin"
import AuthRequired from "./components/AuthRequired"
import About from "./pages/About"
import Subscription from "./pages/Subscription"
import Service from "./pages/Service"
import Footer from './components/Footer'
import MoviesPage from './pages/MoviesPage'

const App = () => {


  return (
    <div className="main">
        <Header />
        <Routes>
          <Route element={<PersistLogin />}>
            <Route element={<AuthRequired />}>
              <Route path="home" element={<Home />} />
              <Route path="about-us" element={<About />}/>
              <Route path="profile" element={<Profile />}/>
              <Route path="subscription" element={<Subscription />}/>
              <Route path="service/:id" element={<Service />}/>
            </Route>
          </Route>
          <Route path="" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="about" element={<About />} />
          <Route path="movies" element={<MoviesPage />} />
        </Routes>
      {/* <Footer />  */}
    </div>
    
  )
}

export default App
