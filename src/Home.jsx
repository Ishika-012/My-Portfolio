import React from 'react'
import Nav from './nav.jsx'
import pic from './assets/pic2.jpg'
function Home() {
  return (
    <section style={{height:"100vh"}} id="home">
    <div className='homePage' >
      <div><img src={pic} id='profile'/></div>
      <div className='name'>
         <h1>Ishika Arora</h1>
          <h3>Web Developer</h3>
          <p>A dedicated third-year BCA student specializing in web development with hands-on experience in building real-world projects. Skilled in HTML, CSS, JavaScript, React.js, and MySQL, bringing creative solutions and a commitment to flexibility and timely delivery.</p>
      </div>
      <Nav/>
    </div>
      <div id="icon"> <a href="#about"><i class="fa-regular fa-circle-down"></i></a></div>
    </section>
  )
}

export default Home