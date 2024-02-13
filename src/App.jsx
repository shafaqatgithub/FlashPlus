import { useState } from 'react'

import './App.css'
import Dals from './components/Dals/Dals'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count,setCount]=useState(0)
 

  return (
   <>
   <Header/>
   <Dals/>
   <Footer/>
   </>

  )
}

export default App
