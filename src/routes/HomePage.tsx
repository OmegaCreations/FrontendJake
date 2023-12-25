import { useEffect, useState } from 'react'
import './Layout.css'
import axios from 'axios';

// Get user props TODO
function HomePage() {

  // FOR TEST PURPOSE
  const loginData = {
    username: "Maks123",
    password: "Puss",
  }

  const [user, setUser]: any = useState(null);

  const [userCol, setUserCol]: any = useState("");

  const submitData = async () => {
    // api postmapping url
    const api_link = "/api/users/save/"+loginData.username;
    
    const saveUser = new FormData();
    saveUser.set("username", loginData.username)
    saveUser.set("password", loginData.password)
    saveUser.set("snake_color", userCol)
    
    const res = await api.post(api_link, saveUser);
    console.log("RESPONSE: "+res.data);
  }

  // Create new axios instance
  const api = axios.create({
    baseURL: '//localhost:8080',
    proxy: false
  });

  // Fetch user data from api
  const fetchData = async () => {
    // api mapping url
    const api_link = "/api/users/"+loginData.username;

    // Await response with login data provided
    const res = await api.get(api_link, {
      params: loginData
    });

    // Setters
    setUser(res.data);
    setUserCol(res.data.snake_color);
  }


  // Hooks
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <h1>Home Page</h1>
      
        {user ? 
          <>
            <h2>Welcome {user.username}</h2>
            <h3>Here you can find your profile stats.</h3>

            {/* User color wheel */}
            <section className='container flex flex-row h-24 items-center justify-center gap-6 pt-12'>
              <input className='user_color' style={{boxShadow: "0px 2px 8px 2px "+userCol}} type='color' value={userCol} onChange={(e) => setUserCol(e.target.value)}/>
              <span className='w-24' id="color_val">{userCol}</span>
            </section>

            {/* Highscores table */}
            <section className='container flex justify-center mt-12'>
              <table>
                <tr>
                  <th>
                    Score
                  </th>
                  <th>
                    Date
                  </th>
                </tr>
                {user.highscores.map((score: any) => (
                  <tr>
                  <td>
                    {score}
                  </td>
                  <td>Today</td>
                  </tr>
                ))}
              </table>
            </section>

            <button className='mt-24 bg-white p-12 w-40 rounded text-black' onClick={() => submitData()}>Save</button>
          </>
        : 
          <h2>Log In or Sign Up to show your Jake stats.</h2>
        }
    </>
  )
}

export default HomePage
