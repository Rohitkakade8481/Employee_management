import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>

<Link to='/home'>Home</Link> { "   |   "}
<Link to='/showall'>Show Employee</Link>{ "   |   "}
<Link to='/add'>addemployee</Link>{ "   |   "}

      </nav>

    </div>
  )
}

export default Navbar
