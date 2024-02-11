import './App.css'
import Drop from './Drop'
import HeaderPage from './HeaderPage'
import Modal from './Modal'
import SliderPage from './SliderPage'
import Timer from './Timer'
import Footer from './Footer'



function App() {


  return (
    <>
    <div className="page">
    <HeaderPage/>
    <SliderPage/>
    <Timer/>
    <Modal/>
    <Drop/>
    <Footer/>
    </div>
     
    </>
  )
}

export default App
