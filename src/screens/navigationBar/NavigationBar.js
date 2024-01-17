import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navigationLinks } from '../../helpers/navigationLinks';
import './navigation.css'


function createLinks(){
    return navigationLinks.map((e,idx)=>{
       return <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    })
}


function NavigationBar() {
  return (
    <div id="home">
      <Navbar className='navigation__container' expand="md">
         <Navbar.Brand style={{marginLeft:'1rem'}} href="#home">Willy Casana</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse style={{justifyContent:'flex-end', marginRight:'1rem', borderColor:'none'}} id="basic-navbar-nav">
            <Nav className='links' style={{margin:'0 1rem'}}>
                {createLinks()}
            </Nav>
           
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
