import React from 'react'
import "./index.scss"
import Navbar from '../../layout/Navbar'

const Welcome = () => {
  return (
    <section id='major'>
        <Navbar/>
        <div className="heading">
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum incidunt ipsa consequatur?</p>
            <button>Get In Touch</button>
        </div>

    </section>
  )
}

export default Welcome