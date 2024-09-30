import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import NoPage from './Pages/noPage/NoPage';
import ProductInfo from './Pages/productInfo/ProductInfo';
import ScrollTop from './Components/scrollTop/ScrollTop';
import CartPage from './Pages/cart/CartPage';
import Signup from './Pages/registration/Signup';
import Login from './Pages/registration/Login';
import UserDashboard from './Pages/user/UserDashboard';
import AdminDashboard from './Pages/admin/AdminDashboard';
import MyState from './context/myState';
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForUser';
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin';
import About from './Pages/about/About';

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />

          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App;
