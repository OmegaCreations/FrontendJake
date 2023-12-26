import "./Layout.css";
import axios from "axios";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { updateSnakeColor } from "../state/user/userSlice";

// Get user props TODO
const HomePage = () => {
  // Redux - user data ============================
  const username = useSelector((state: RootState) => state.user.username);
  const password = useSelector((state: RootState) => state.user.password);
  const snake_color = useSelector((state: RootState) => state.user.snake_color);
  const highscores = useSelector((state: RootState) => state.user.highscores);
  const user_status = useSelector((state: RootState) => state.user.isSignedIn);

  const dispatch = useDispatch();

  // Submit changes ================================

  // Create new axios instance
  const api = axios.create({
    baseURL: "//localhost:8080",
    proxy: false,
  });

  const submitData = async () => {
    // API postmapping url
    const api_link = "/api/users/save/" + username;

    // Create form data to POST
    const saveUser = new FormData();
    saveUser.set("username", username);
    saveUser.set("password", password);
    saveUser.set("snake_color", snake_color);

    const res = await api.post(api_link, saveUser);
    console.log("RESPONSE: " + res.data);
  };

  return (
    <>
      <h1>Home Page</h1>

      {user_status ? (
        <>
          <h2>
            Welcome{" "}
            <span className="text-bold" style={{ color: snake_color }}>
              {username}
            </span>
          </h2>
          <h3>Here you can find your profile stats.</h3>

          {/* User color wheel */}
          <section className="container flex flex-row h-24 items-center justify-center gap-6 pt-12">
            <input
              className="user_color"
              style={{ boxShadow: "0px 2px 8px 2px " + snake_color }}
              type="color"
              value={snake_color}
              onChange={(e) => dispatch(updateSnakeColor(e.target.value))}
            />
            <span className="w-24" id="color_val">
              {snake_color}
            </span>
          </section>

          {/* Highscores table */}
          <section className="container flex justify-center mt-12">
            <table>
              <tr>
                <th>Score</th>
                <th>Date</th>
              </tr>
              {highscores.map((score: any) => (
                <tr>
                  <td>{score}</td>
                  <td>Today</td>
                </tr>
              ))}
            </table>
          </section>

          <button
            className="mt-24 bg-white p-12 w-40 rounded text-black"
            onClick={() => submitData()}
          >
            Save
          </button>
        </>
      ) : (
        <h2>Log In or Sign Up to show your Jake stats.</h2>
      )}
    </>
  );
};

export default HomePage;
