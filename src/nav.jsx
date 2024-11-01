import React from 'react'

function Nav() {
  return (
    <div>
      <ul className='navList'>
        <li><a href="#home"><i class="fa-solid fa-house"></i></a></li>
        <li><a href="#about"><i class="fa-solid fa-user"></i></a></li>
        <li><a href="#skills"><i class="fa-solid fa-chart-pie"></i></a></li>
        <li><a href="#projecthub"><i class="fa-solid fa-list"></i></a></li>
        <li><a href="#contact"><i class="fa-solid fa-phone"></i></a></li>
      </ul>
      
    </div>
  )
}

export default Nav