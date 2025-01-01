import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Message from './Message'
import CountApp from './CountApp'

function Home() {
  return (
    <div>

        <Header/>
        {/* Homepage */}
        <Message name="Home"/>
        <CountApp/>
        <Footer name="Rupesh"/>
    </div>
  )
}

export default Home