import { Link } from 'react-router';

export function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/" className="">
              Dark Weather
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
