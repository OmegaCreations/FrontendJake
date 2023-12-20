import { useState } from 'react'
import './Layout.css'
import axios from 'axios';

// TODO: get user props??
function LoginPage({user, setUser}) {

  const url = "http://localhost:3000/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const client = axios.create({
    baseURL: url,
  })

  // Fetch user date with credentials
  const logIn = async (e: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
    e.preventDefault();
    const res: any = await client.get('', {
      params: {
        username,
        password,
      }
    });
    setUser(res);
  };


  return (
    <div className='my-24 pb-12 flex flex-col gap-20'>
      <h1>Provide your credentials to Log In</h1>
      <form onSubmit={(e) => logIn(e, username, password)} className=' w-full rounded px-8 py-12'>
        <div className="mb-8">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
            <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Log In
            </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage