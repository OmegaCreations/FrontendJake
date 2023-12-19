import './Layout.css'

function LoginPage() {

  return (
    <div className='my-24 pb-12 flex flex-col gap-20'>
      <h1>Provide your credentials to Log In</h1>
      <form className=' w-full shadow-md rounded px-8 py-12'>
        <div className="mb-8">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Log In
            </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage