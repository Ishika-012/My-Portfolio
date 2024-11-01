import React, { useState, useEffect } from 'react';


function Projects() {
  const [projectData, setData] = useState([]);

  useEffect(() => {
const Data = [
  {
    name: 'Rapify : E-commerce Website',
    desc: {
        d1:'An E-commerce website and a fast delivering app is made using HTML CSS and JavaScript.',
        d2:'It has various categories for products with a user-friendly interface You can order lots of products at a time using cart functionality',
        d3: 'It provides a great user experience. Clean, modern, and responsive, Rapify’s UI enhances product discovery and checkout simplicity'
    },
    tech:'HTML , CSS , JavaScript'
  },
  {
    name: 'Tic-Tac-Toe',
    desc: {
        d1:' Designed and coded a Tic Tac Toe game application, focusing on player interaction and game flow.',
        d2: 'Developed using HTML CSS and JavaScript to create an intuitive user interface and ensure accurate game outcomes.',
        d3: 'Conducted thorough testing to guarantee optimal performance and user satisfaction'
    },
    tech:'HTML , CSS , JavaScript'
  }
]
setData(Data);

  }, []);
  return (
      <section id="projecthub">
         <h1 id='project'>MY PROJECTS</h1>
        <div className='myproject'>
         <div id="projectData">
         {projectData.map((x, index) => {
          let { name , desc, tech} = x;
          return (
            <div key={index} id='input'>
              <div id="name">{name}</div>
              <ul>
                <li>{desc.d1}</li>
                <li>{desc.d2}</li>
                <li>{desc.d3}</li>
              </ul>
              <div id="tech">Technology :${tech}</div>
            </div>
          );
        })}
         </div>
      </div>
      </section>
  )
}

export default Projects
