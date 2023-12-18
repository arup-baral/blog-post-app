import Logo from "../Logo";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Authentication from "../../appwrite/authentication_service";
import { logOut } from "../../store/authSlice";

function Header() {
  const authStatus = useSelector((state) => state.auth.logStatus);
  const dispatch = useDispatch();
  const authentication = new Authentication();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      isActive: true,
    },
    {
      name: "Login",
      slug: "/login",
      isActive: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      isActive: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      isActive: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      isActive: authStatus,
    },
  ];

  const logOutHandler = () => {
    authentication.logOut().then(() => dispatch(logOut()));
  };

  return (
    <header>
      <nav>
        <div>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="nav-menu-box">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {navItems.map((navItem) =>
              navItem.isActive ? (
                <li
                  key={navItem.name}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <NavLink
                    to={navItem.slug}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-500" : "text-white"
                      } no-underline`
                    }
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              ) : null
            )}
            {authStatus && (
              <li
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <NavLink
                  to={"/"}
                  className="no-underline text-black"
                  onClick={logOutHandler}
                >
                  Log out
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
