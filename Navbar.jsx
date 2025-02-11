import React from 'react'
import '../style/Navbar.css'
function Navbar() {
  return (
    <div>
        <nav>
      <h1>Style.</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
      <button className="btn">Sign In</button>
      </nav>
    </div>

  )
}

export default Navbar
