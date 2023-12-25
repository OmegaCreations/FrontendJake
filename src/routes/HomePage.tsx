import { useState } from 'react'
import './Layout.css'

// Get user props
function HomePage(props: { user: any }) {

  const [userCol, setUserCol] = useState("#10b981");
  const highscores: number[] = [3, 45, 77, 123];

  const submitData = () => {
    // TODO: Send new data to backend
  }

  return (
    <>
      <h1>Home Page</h1>
      
        {!props.user ? 
          <>
            <h2>Welcome {props.user}</h2>
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
                {highscores.map((score) => (
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
