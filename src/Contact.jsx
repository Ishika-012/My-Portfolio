import React from 'react'

function Contact() {
  return (
    <section id="contact">
    <div id="connect">Connect With Me!</div>
    <ul id="list" style={{display:'flex', gap:'5rem', color:'white', listStyleType:'none' }}>
      <li><a href="aroraishika1203@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
      <li><i class="fa-brands fa-linkedin-in"></i></li>
      <li><i class="fa-brands fa-github"></i></li>
      <li><i class="fa-solid fa-phone"></i></li>
    </ul>
    </section>
  )
}

export default Contact