import './style/modal.css'




function Modal() {




  return (
    <>
    <div className="wrapper_modal">
        <div className="block1">
            <h4>Special offer only for split payments by</h4>
            <img src='pictures\body\modal\logo1.svg'/>
            <h4>with 10 interest-free installments</h4>
            
        </div>
        <label className='button-650' htmlFor="modal-toggle">Buy now pay later</label>
    
                <div className="modal-container">
                    <input id="modal-toggle" type="checkbox"/>
                    <label className="modal-backdrop" htmlFor="modal-toggle"></label>
                    <div className="modal-content">
                        <div className="modal_header">
                                <img src="pictures\body\modal\logo-header.svg"/>
                                <label className="modal-close" htmlFor="modal-toggle">&#x2715;</label>
                        </div>
                        
                        <h2 className='header-body'>Make easy monthly payments</h2>
                       <div className="body-modal">
                       <div className="modal-body-header">
                        
                              <span>£9.99/mo.</span>
                              <div className="modal-body-header-1">10 months</div>
                              </div>
                              <div className="modal-body-1">
                              <span>APR</span>
                              <span>Interest</span>
                              <span>Total</span>
                              </div>
                              <div className="modal-body-2">
                              <span>0%</span>
                              <span>£0</span>
                              <span>£89.00</span>
                              </div>
                            
                       </div>
                       <hr/>
                      <button className="BtnDisabled">Confirm to checkout</button>
                    </div>          
                </div> 


    </div>
     
    </>
  )
}

export default Modal
