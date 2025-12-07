import React from 'react'
import Navbar from './sections/navbar'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  return (
    <div className="container mx-auto max-w-4xl">

      <Navbar/>
      <Hero/>      
      {/*about*/}
      <About/>
      {/*projects*/}
      {/* experience */}
      {/* contact */}
      {/* footer */}
    </div>
  )
}

export default App
