import './style/menu.css'



function Menu({hendelhide}) {



  return (
    <>
   
   
    <div className="wrap_menu">
           
    <div className="line">
         <img className="technpark" src="pictures/logo-menu/logo-headline/logo-headline.svg"/>
         <span className="close-menu" onClick={()=>hendelhide()}><img src="pictures/logo-menu/logo-headline/logo-menuof.svg"/></span>
    </div>
    <div className="menu1">
    <div> <h5>Go to product page</h5><img src="pictures/logo-menu/logoVector.svg"/></div>
    <div> <h5>Track your order</h5><img src="pictures/logo-menu/logoVector.svg"/></div>
    <div> <h5>Contact us</h5><img src="pictures/logo-menu/logoVector.svg"/></div>
    <div> <h5>FAQ</h5><img src="pictures/logo-menu/logoVector.svg"/></div> 
    </div>
    </div>
   
 
   
    
     
    </>
  )
}

export default Menu
