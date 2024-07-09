import Logo from "../asset/images/sampleicon.png";
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const activeClass = "text-lg py-1.5 pr-3 pl-3 text-black bg-slate-100 rounded";
  const inActiveClass = "text-lg py-1.5 pr-2 pl-2 text-black rounded";

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="ShopLane Logo" />
            <span className="self-center text-2xl font-normal whitespace-nowrap dark:text-white">ShopLane.</span>
          </Link>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-cta">
            <ul className="flex flex-col font-medium text-lg p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className= {({isActive}) => isActive ? activeClass : inActiveClass } end >Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Cart</NavLink>
              </li>
            </ul>
          </div> 

          <div>
            <p className="text-black text-md font-medium text-lg ">Cart: 2</p>
          </div>

        </div>
      </nav>

    </div>
  )
}
