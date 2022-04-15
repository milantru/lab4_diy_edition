import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Page1</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
