import "./Layout.css";
import axios from "axios";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import {
  updateCoffeesDrank,
  updateHighscores,
  updatePassword,
  updateSnakeColor,
  updateToken,
  updateUsername,
} from "../state/user/userSlice";
import { useEffect, useState } from "react";

// Get user props TODO
const HomePage = () => {
  // Redux - user data ============================
  const username: string = useSelector(
    (state: RootState) => state.user.username
  );
  const snake_color: string = useSelector(
    (state: RootState) => state.user.snake_color
  );
  const highscores: number[] = useSelector(
    (state: RootState) => state.user.highscores
  );
  const token: string = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();

  // Create new axios instance
  const api = axios.create({
    baseURL: "//localhost:8080",
    proxy: false,
  });

  // Get data from API
  const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    if (token && !dataFetched) {
      // API postmapping url
      const api_link = "/api/v1/user";

      // Create form data to POST
      const getDataRequest = new FormData();
      getDataRequest.set("token", token);

      api
        .get(api_link, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          // Redux Setters
          dispatch(updateUsername(res.data.username));
          dispatch(updateSnakeColor(res.data.snake_color));
          dispatch(updatePassword(res.data.password));
          dispatch(updateHighscores(res.data.highscores));
          dispatch(updateCoffeesDrank(res.data.coffees_drank));
          dispatch(updateToken(res.data.jwt_token));

          setDataFetched(true);
        })
        .catch((err) => {
          // token expired -> forbidden or network error
          console.log("error: " + err);
          localStorage.clear(); // clear local storage on 403 err
        });
    }
  }, [token, dataFetched, dispatch]);

  // Submit changes ================================

  const submitData = async () => {
    // API postmapping url
    const api_link = "/api/v1/auth/save";

    // Create form data to POST
    const saveUser = new FormData();
    saveUser.set("token", token);
    saveUser.set("snake_color", snake_color);

    await api.post(api_link, saveUser).catch((err) => alert(err));
  };

  return (
    <>
      <h1>Home Page</h1>

      {useSelector((state: RootState) => state.user.token) ? (
        <>
          <h2>
            Welcome
            <span className="text-bold" style={{ color: snake_color }}>
              {" " + username}
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
