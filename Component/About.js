import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Message from './Message'
import Countstate from './Countstate'


function About() {
  return (
    <div>
        <Header/>
        {/* About */}
        <Message name="About"/>
        <Countstate/>
        <Footer/>
        </div>
  )
}

export default About