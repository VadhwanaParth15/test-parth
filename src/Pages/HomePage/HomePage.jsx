import React from 'react'
import './HomePage.css'
function HomePage() {
  return (
    <div className='HOMEPAGE-MAIN-CONTAINER'>
        <div className='CONTENT-CONTAINER'>
            <div className='curved'>
                <img src="assets/herocurved.png" alt="curved image"/>
                  
                    <div className='headercontainer' >
                       <h1 className='headerline' > Welcome  to <br/> 
                       <span>PRAKARSH'23</span></h1>
                    </div>
                    </div>
                <div className='heroimage'>
                   <img src="assets/herosectionimg.svg" className='HOME-CONTENT-SIDE-IMAGE' alt="IMAGE" />
                 </div>
          </div>
      </div>  
  )
}

export default HomePage