import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks'


function createLink(){
    return navigationLinks.map((e,idx)=>(
        <p key={idx}> <a href={e.ref}>{e.name}</a> </p>
    ))
}


function ContactMe() {
  return (
    <div className='contactMe__container' id="contact">
      <div className='contactMe__data__links'>
        <div>
            <p>Lince, Perú</p>
            <p>Willy Casana</p>
            <p>willy.casana.s@gmail.com</p>
        </div>
        <div>
           {createLink()}
        </div>
      </div>
      <div style={{textAlign:'align'}}>
        Copyright&copy; {new Date().getFullYear()} All rights reserved
      </div>
    </div>
  )
}

export default ContactMe
