import { useState } from 'react'
import './style/drop.css'




const Drop = () => {

const [isToggle, setIsToggle] = useState(false)

    

  return (
    <>
    <div className="wrapper_drop">
            <div className="price-frame652">
                        <p>In stock, ready for ship</p> <p>Delivery in 2-4 days in UK</p>
            </div>
            <div className="dropdown">
              <div className="drop-text">
                  <p>Free shipping in United Kingdom</p>
                  <img 
                  style={isToggle ? {transform: 'rotate(180deg)'} : {}}
                  className="arrow-drop" 
                  onClick={()=>setIsToggle(!isToggle)} 
                  src="pictures/logo-block3/dropdown/arrow-drop.svg"/>
              </div>
              

              <div className="panel">
              {isToggle&&<>
                <img className="delivery" src="pictures/logo-block3/dropdown/delivery.svg"/>
              <p>All purchases are shipped from our warehouse in United Kingdom and are fully 
              insured with a tracking number. Tracked delivery between 2-4 days in United Kingdom + 
              Free Delivery.</p>
              </>}
            </div> 
          </div>
      </div>
    </>
  )
}

export default Drop