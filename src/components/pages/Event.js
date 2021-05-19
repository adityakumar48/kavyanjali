import React from 'react';
import './Event.css';
import poetry from './img/poetry.jpeg';
import azadi from './img/azadi.jpeg';
import Maha from './img/Maha.jpeg';
import webiner from './img/webiner.jpeg';
import anual from './img/anual.jpeg';
import swebiner from './img/swebiner.jpeg';
import intro from './img/intro.jpeg';
import audio from './img/audio.jpeg';
import alumini from './img/alumini.jpeg';
import ge from './img/ge.jpeg';
import am from './img/am.jpeg';
import zoom1 from './img/zoom1.jpeg';
import zoom2 from './img/zoom2.jpeg';
import zoom3 from './img/zoom3.jpeg';
import zoom4 from './img/zoom4.jpeg';

function Event() {
    return (
        <div className="event-bg mt-5" >
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mt-5 text-center mb-5 event-txt">Events Kavyanjali</h2>
                    </div>
                    <div className="col-md-12 mb-5 pb-5">
                        <img src={poetry} width="18%" className="p-1  rounded" alt="Event" />
                        <img src={azadi} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={Maha} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={webiner} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={anual} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={swebiner} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={intro} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={audio} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={alumini} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={ge} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={am} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={zoom1} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={zoom2} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={zoom3} width="18%" className="p-1 rounded" alt="Event" />
                        <img src={zoom4} width="18%" className="p-1 rounded" alt="Event" />


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Event
