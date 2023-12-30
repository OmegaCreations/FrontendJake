import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateToken } from "../../state/user/userSlice";
import { RootState } from "../../state/store";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: RootState) => state.user.token);
  const coffees_drank: number = useSelector(
    (state: RootState) => state.user.coffees_drank
  );

  const logOut = () => {
    localStorage.clear();
    dispatch(updateToken(""));
  };

  return (
    <>
      <header className="container flex justify-center gap-56 py-6">
        <ul className="flex gap-12">
          <img src="" className="" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/laderboard">Snake Leaders</Link>
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
                <Link to="/shop">Ssshop</Link>
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <a href="#" onClick={() => logOut()}>
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>

        {token ? <span className="">{coffees_drank} Coffees</span> : <></>}
      </header>
    </>
  );
};

export default Header;
