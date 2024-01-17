import React from 'react'
import './aboutMe.css'
import person from '../../images/person.jpg'

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div>
          <img src={person} alt="person icon" />
      </div>
      <div className='about_text'>
        <h1>ABOUT ME</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates rem, voluptatem cupiditate nemo architecto sunt reprehenderit culpa facere explicabo, atque veritatis autem ullam, recusandae totam hic in ducimus quos consequuntur.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
