import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <>
      <header className="py-8">
        <div className="w-[90%] m-auto flex items-center justify-between text-white ">
          <div className="logo">
            <Link to="/" className=" text-2xl md:font-semibold text-[40px] ">
              Dark Weather
            </Link>
          </div>
          <nav>
            <ul className={`${isMenuOpen ? 'absolute right-0 top-24 w-[200px] rounded-xl bg-slate-800 p-4' : 'hidden'} md:flex gap-11 items-center`}>
              <li className="py-2 border-solid border-b border-red-50">
                <Link className="md:text-2xl font-medium">Home</Link>
              </li>
              <li className="py-2 border-solid border-b border-red-50">
                <Link className="md:text-2xl font-light ">Download App</Link>
              </li>
              <li className="py-2 ">
                <Link className="md:text-2xl font-light ">Contact us</Link>
              </li>
            </ul>
          </nav>
          <Link className=" p-3 md:text-2xl font-medium bg-[#5C93B1] rounded-3xl md:py-5 md:px-8 ">Sign up</Link>
          <button className="md:hidden" onClick={() => setisMenuOpen(!isMenuOpen)}>
            <img src="/assets/icons/menu.webp" alt="menu icon" className="md:hidden" />
          </button>
        </div>
      </header>
    </>
  );
}
