import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateToken } from "../../state/user/userSlice";
import { RootState } from "../../state/store";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: RootState) => state.user.token);

  const logOut = () => {
    localStorage.clear();
    dispatch(updateToken(""));
  };

  return (
    <>
      <header className="container flex h-12">
        <img src="" className="" />
        <ul className="flex gap-12">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!token ? (
            <>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="#" onClick={() => logOut()}>
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
};

export default Header;
