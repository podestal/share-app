import './app.css'
import { useState } from 'react'
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
import OrdersPage from './pages/OrdersPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import NewPassword from './pages/NewPassword'
import ConfirmEmailPage from './pages/ConfirmEmailPage'
import ActivateEmailPage from './pages/ActivateEmailPage'
import PaymentPage from './pages/PaymentPage'
import PaymentConfirmPage from './pages/PaymentConfirmPage'

const App = () => {

  const [access, setAccess] = useState(JSON.parse(localStorage.getItem('access')) || "")

  return (
    <div className="main">
        <Header />
        <Routes>    
          <Route element={<PersistLogin />}>  
            <Route element={<AuthRequired />}>
              <Route path="home" element={<Home />}/>
              <Route path="about-us" element={<About />}/>
              <Route path="profile" element={<Profile />}/>
              <Route path="subscription" element={<Subscription />}/>
              <Route path="service/:id" element={<Service />}/>
              <Route path='orders' element={<OrdersPage />}/>
            </Route>
          </Route>
          <Route path="" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="about" element={<About />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="reset" element={<ResetPasswordPage/>} />
          <Route path="reset_new/:uid/:token" element={<NewPassword/>} />
          <Route path="activate/:uid/:token" element={<ConfirmEmailPage/>} />
          <Route path="confirm" element={<ActivateEmailPage/>} />
          <Route path="payment" element={<PaymentPage/>} />
          <Route path="processing" element={<PaymentConfirmPage/>} />
        </Routes>
      <Footer /> 
    </div>
    
  )
}

export default App
