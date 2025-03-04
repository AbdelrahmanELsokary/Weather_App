import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <>
      <header className=" py-5">
        <div className=" w-[90%] m-auto flex items-center justify-between text-white ">
          <div className="logo">
            <Link to="/" className=" font-semibold text-[40px] ">
              Dark Weather
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link className=" text-2xl font-medium ">Home</Link>
              </li>
              <li>
                <Link className="text-2xl font-light ">Download App</Link>
              </li>
              <li>
                <Link className="text-2xl font-light ">Contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
