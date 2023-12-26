import './Layout.css'
import Header from '../template/header/Header'

import { Outlet } from "react-router-dom";

// Web Layout
function Layout() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
