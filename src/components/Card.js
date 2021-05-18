import React from 'react'
import './pages/Team.css'


function Card(props) {
    return (

        <div className="mt-3 col-md-3">
            <div class="card" >
                <img src={props.img} width="100%" class="card-img-top" alt={props.img} />
                <div class="card-body">
                    <h4 class="card-title">{props.name}</h4>
                    <h5 class="card-text">{props.position}</h5>

                </div>
            </div>
        </div>



    )
}

export default Card
