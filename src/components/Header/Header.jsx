import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 w-full bg-royalBack-950 backdrop-blur-lg backdrop-saturate-[1.8] bg-opacity-75 shadow-md border border-glassWhite">
      <div   className="w-full max-w-7xl mx-auto px-4 
    bg-royalBack-900 bg-opacity-20 backdrop-blur-md backdrop-saturate-[1.8]
    shadow-lg border border-glassWhite rounded-lg"  >
        <nav className="flex py-1">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px"  />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 text-white text-lg mx-2
            duration-200 bg-royalBack-800  bg-opacity-20 backdrop-blur-lg backdrop-saturate-[0.8] 
           shadow-lg hover:bg-opacity-30 hover:shadow-md hover:backdrop-blur-lg 
          rounded-full transition-all ease-in-out border border-glassWhite"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="text-glassWhite">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
