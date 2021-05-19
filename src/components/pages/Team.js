import React from 'react'
import './Team.css'
import abhishek from './img/abhishek.jpg'
import swarnim from './img/swarnim.jpg'
import vandit from './img/vandit.jpg'
import shreya from './img/shreya.jpg'
import taalish from './img/taalish.jpg'
import sakshi from './img/sakshi.jpg'
import shraddha from './img/shraddha.jpg'
import Card from '../Card'


function Team() {
    return (
        <div className="team-bg mt-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Core Committee</h1>
                        <p className="col-9 mx-auto">Our dedicated and extremely passionate core committee always tends to work towards the betterment of the club and its members and the structured and systematic execution of each and every event that is organized. They have always been loyal to the clubs and have made the working environment feel like home. And have proved time and again that the scope of growth is never ending.</p>
                    </div>
                    <Card img={abhishek} name="Mr.Abhishek Bhardwaj" position="(President)" />
                    <Card img={swarnim} name="Mr.Swarnim Aditya" position="(Vice President)" />
                    <Card img={vandit} name="Mr. Vandit Jain" position="(Secretary)" />
                    <Card img={shreya} name="Miss Shreya Rawat" position="(Joint Secretary)" />
                    <Card img={sakshi} name="Miss Sakshi Vashistha" position="(Club Delegate)" />
                    <Card img={shraddha} name="Miss Shraddha Jain" position="(Treasurer)" />
                    <Card img={taalish} name="Mr. Taalish Irrfan" position="(Technical Head)" />
                </div>
            </div>
            <div id="events">

            </div>
        </div>
    )
}

export default Team
