import React from 'react'
import { Header, Features, Pricing, Team, Footer} from './components'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Login/> */}
      <Features/>
      <Team/>
      <Pricing/>
      <Footer/>
      
    </div>
  )
}

export default App