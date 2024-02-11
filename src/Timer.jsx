import './style/timer.css'




function Timer() {
    const countDownDate = new Date("July 1, 2024 04:00:00").getTime();


    const x = setInterval(function() {
    
        const now = new Date().getTime();
    
        const distance = countDownDate - now;
    
    
      
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
      document.getElementById("timer").innerHTML = hours + ": "
      + minutes + ": " + seconds;
    
    
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Finish Him";
      }
    }, 1000);


  return (
    <>
    <div className="wrapper_timer">

    <h1>Apple MacBook Air (M1, 2020) 16 ГБ, 1 ТБ SSD “Space Gray”</h1>
    <h4>35 items left</h4>
    <img src='pictures\body\red_stripe.svg'/>
    <h4>
        The Handheld Gateway to Your PS5® Games Play Your Game Collection Experience 
        Breathtaking Immersion with DualSense® Wireless Controller Features
        Feel the incredible immersion of haptic feedback and adaptive triggers in supported games
    </h4>
    <div className="timer_block">
        <h4>sale ends in</h4>
        <h4 className='timer' id='timer'></h4>
    </div>
    <h2  style={{'margin-top':'1px'}}>£199</h2>
    <img style={{'margin-top':'-15px'}} src='pictures\body\sale.svg'/>
    

    </div>
     
    </>
  )
}

export default Timer