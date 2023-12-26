import { useState } from "react";
import "./Layout.css";
import axios from "axios";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  updateCoffeesDrank,
  updateHighscores,
  updatePassword,
  updateSnakeColor,
  updateStatus,
  updateUsername,
} from "../state/user/userSlice";
import { RootState } from "../state/store";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Redux
  const user_status = useSelector((state: RootState) => state.user.isSignedIn);
  const dispatch = useDispatch();

  // Create new axios instance
  const api = axios.create({
    baseURL: "//localhost:8080",
    proxy: false,
  });

  // Fetch user data from api
  const fetchData = async (
    e: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string
  ) => {
    // prevent form from reloading html
    e.preventDefault();

    // api mapping url
    const api_link = "/api/users/" + username;

    // Await response with login data provided
    const res = await api.get(api_link, {
      params: {
        username: username,
        password: password,
      },
    });

    // Redux Setters
    dispatch(updateUsername(res.data.username));
    dispatch(updateSnakeColor(res.data.snake_color));
    dispatch(updatePassword(res.data.password));
    dispatch(updateHighscores(res.data.highscores));
    dispatch(updateCoffeesDrank(res.data.coffees_drank));
    dispatch(updateStatus(true));
  };

  if (!user_status)
    return (
      <div className="my-24 pb-12 flex flex-col gap-20">
        <h1>Provide your credentials to Log In</h1>
        <form
          onSubmit={(e) => fetchData(e, username, password)}
          className=" w-full rounded px-8 py-12"
        >
          <div className="mb-8">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  else return <>You are already logged in!</>;
};

export default LoginPage;
