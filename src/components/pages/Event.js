import React from 'react'
import './Event.css'
import Img from './Img'
function Event() {
    return (
        <div className="event-bg mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mt-5 text-center mb-5 event-txt">Events Kavyanjali</h2>
                    </div>
                    <div className="col-md-12 mb-5">
                        <Img src="https://source.unsplash.com/200x200/?event,parties" alt="Event" />
                        <Img src="https://source.unsplash.com/200x200/?buildings,parties,games" alt="Event" />
                        <Img src="https://source.unsplash.com/200x200/?buildings,parties,games" alt="Event" />
                        <Img src="https://source.unsplash.com/200x200/?buildings,parties,games" alt="Event" />
                        <Img src="https://source.unsplash.com/200x200/?buildings,parties,games" alt="Event" />
                        <Img src="https://source.unsplash.com/200x200/?buildings,parties,games" alt="Event" />
                        <Img src="https://source.unsplash.com/200x200/?buildings,parties,games" alt="Event" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Event
