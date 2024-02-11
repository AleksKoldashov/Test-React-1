import { useState } from 'react'
import Menu from './Menu'
import './style/HeaderPage.css'

const HeaderPage = () => {

const [toggle, setToggle] = useState(false)
const hendel = ()=>{
  setToggle(true)
}

const hendelhide = ()=>{
  setToggle(false)
}
console.log( toggle);
  return (
    <>
         {toggle ? <Menu hendelhide={hendelhide}/> : <></>}
          <div className="header">
            <div className="header-offer">
                <h5>Last chance + Free delivery 2-4 days in UK</h5>
            </div>
                <div className="header-menu">
                    <img src='pictures\header\TECHNOPARK.svg'/>
                    <div onClick={hendel}><img style={{margin:'20px'}}  src='pictures\header\menu.svg'/></div>
                </div>  
            
            <div className="header-boby">
                <h3 style={{'font-size':'32px'}}>Power. It’s in the Air.</h3>
                <h5 style={{'font-size':'16px', 'margin-top':'-10px' }}>Limited offer just for today</h5>
                <div className="rating">
                <img  src="pictures\header\rating1.svg"/>
                <img  src="pictures\header\rating2.svg"/>
                </div>
            </div>

            <div className="price" style={{'margin-left':'30px'}}>
                  <h1 style={{'font-size':'43px'}}>£199</h1>
                  <img style={{margin:'20px'}} src='pictures\header\price.svg'/>
                </div>
            <img style={{'margin-left':'20px'}} src='pictures\header\laptop.svg'/>
            <div src='-header-footer' style={{display:'flex','justify-content': 'space-between', 'padding-top':'25px'}}>
                <img  src="pictures\header\union-1.svg"/>
                <img  src="pictures\header\union-2.svg"/>
                <img  src="pictures\header\union-3.svg"/>
            </div>
           
          </div>
    
     
   
   

    </>
  )
}

export default HeaderPage
