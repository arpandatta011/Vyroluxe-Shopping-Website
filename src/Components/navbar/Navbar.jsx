{/* Toggle Light and dark Mode navbar */ }
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useSelector } from "react-redux";


const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  const logout = () => {
    localStorage.clear('users');
    navigate("/login");
  }

  const navList = (
    <ul className="flex space-x-8 text-white font-semibold text-lg">
      {/* Home */}
      <li className="dark:text-white">
        <Link to={'/'}>Home</Link>
      </li>

      {/* All Product */}
      <li className="dark:text-white">
        <Link to={'/about'}>About</Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={'/signup'}>Signup</Link>
        </li>
      ) : null}

      {/* Login */}
      {!user ? (
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
      ) : null}

      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={'/user-dashboard'}>User</Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li className="dark:text-white">
          <Link to={'/admin-dashboard'}>Admin</Link>
        </li>
      )}

      {/* Logout */}
      {user && (
        <li className="cursor-pointer dark:text-white" onClick={logout}>
          Logout
        </li>
      )}

      {/* Cart */}
      <li className="relative">
        <Link to={'/cart'} className="flex items-center">
          <FaCartShopping size={24} className="mt-1 bg-black text-white dark:text-white" />
          {/* Show badge if total quantity is greater than 0 */}
          {totalQuantity > 0 && (
            <span className="absolute top-[-5px] right-[-10px] bg-red-600 text-white rounded-full text-xs px-1 py-0 font-bold">
              {totalQuantity}
            </span>
          )}
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-black text-white sticky top-0 transition-colors duration-700">
      {/* Main Navigation */}
      <div className="flex justify-around items-center py-6 lg:px-3">
        {/* Left Side */}
        <div className="flex items-center space-x-8">
          <Link to={'/'}>
            <h2 className="font-bold text-center uppercase gradient-text md:text-sm lg:text-lg">
              Vyroluxe
            </h2>
          </Link>
          {/* Nav List */}
          <div className="hidden lg:flex">
            {navList}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <SearchBar />
          <ThemeToggle />
        </div>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </nav>

  );
}

export default Navbar;
