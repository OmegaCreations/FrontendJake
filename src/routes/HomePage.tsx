import './Layout.css'

// Get user props
function HomePage(props: { user: any }) {

  return (
    <>
      <h1>Home Page</h1>
      
        {props.user ? props.user : 
          <h2>Log In or Sign Up to show your Jake stats.</h2>
        }
    </>
  )
}

export default HomePage
