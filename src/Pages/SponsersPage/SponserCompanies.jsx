import React from 'react'
import './SponsersPage.css'
function SponserCompanies(props) {
    return (
        <div className='SPONSER-CONTAINER'>
            <img src={props.item.IMAGEPATH} alt="SPONSER-IMAGE" />
        </div>
    )
}

export default SponserCompanies