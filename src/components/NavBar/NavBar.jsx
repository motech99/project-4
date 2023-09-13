import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <>
      {/* <nav>
        <Link to='/orders'>Order History</Link>
        <Link to='/orders/new'>New Order</Link>
        <br />
        <span
          className='text-xl'>
          Welcome, {user.name}
        </span>
        <br />
        <Link to='' onClick={handleLogOut}>
          Log Out
        </Link>
      </nav> */}
<div className="flex flex-wrap">
  <section className="relative mx-auto">
    <nav className="flex justify-between bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-red-500 via-orange-500 to-red-800text-white w-screen">
      <div className="px-5 xl:px-6 py-2 flex w-full items-center">
      
          {/* <h2 className="text-4xl custom--hover custom--font">/h2> */}
          <div className="flex justify-start w-4">
      <h1 className="custom--font">T H E</h1>
      </div>
          <Link className="text-4xl custom--hover custom--font" to='/home'>Emporium</Link>
        <ul className="hidden md:flex  px-4 mx-auto  font-heading space-x-12 text-lg font-medium">
        <li><Link className="custom--hover" to='/home'>Home</Link></li>
          <li><a className="custom--hover" href="#">All Listings</a></li>
          <li><a className="custom--hover" href="#">Add Listings</a></li>
        </ul>
      </div>
      <ul className="hidden md:flex px-4 font-heading items-center space-x-12">
      <li className="w-20">
       <Link className="custom--hover font-medium" to='' onClick={handleLogOut}>Log Out</Link>
      </li>
      </ul>
    </nav>
  </section>
</div>
    </>
  );
}
