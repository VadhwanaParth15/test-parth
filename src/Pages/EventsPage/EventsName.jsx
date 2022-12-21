import React from 'react'
import './EventsPage.css'
function EventsName(props) {
    return (
        <div className='EVENT-ITEM-CONTAINER'>
            <img src={props.item.EventimageSource} alt="" />
            <p>{props.item.EventDiscription}</p>
        </div>
    )
}

export default EventsName