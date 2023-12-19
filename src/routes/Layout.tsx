import './Layout.css'
import Header from '../template/header/Header'

import { Outlet } from "react-router-dom";

function Layout() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
