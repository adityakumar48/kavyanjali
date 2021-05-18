import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about-bg">
      <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center about-h2">About Kavyanjali</h2>
        </div>
        <div className="col-md-6">
              <p className="col-10 mx-auto mt-5 about-txt pt-5">The club offers a competing platform for the knowledge-hungry students. It promises to cultivate a passion for Poetry,Story-Writing,quizzing, Debating, creative writing, literature,  Elocution, etc.,. among the students.<br />The Literary club is committed to tap effective communication talent among students, club is poised to enable the talents with cutting edge. To develop and hone the literary skills of the students, the club inspires students to develop a taste for literature and also works in the direction of expanding their horizon of spoken and written language. Its intricate agenda includes a variety of activities aimed at building up the confidence and grooming the talents of students in facing various interpersonal challenges and competitions.</p>
        </div>
        <div className='col-md-6'>
            <h4 className="mt-5 pt-2  pb-3">Foundation</h4>
            <p className="p-color mt-2">The First and only literary club of Graphic Era was founded on 3rd March 2020.</p>
            <p className="p-color col-10 mx-auto">Mr. Abhishek Bhardwaj and Mr. Swarnim Aditya; The current President and Vice President founded the club with the aim to  inculcate an environment to encourage more and more involvement into the world of literature and also to generate and increase confidence among ourselves and our peers.</p>
            <h4 pb-3>Vision</h4>
            <p className="p-color col-10 mx-auto mt-2">Our sincere efforts are always focussed in fulfilling our vision of promoting literature and proving platforms to budding writers and performers. We want to promote and express the power and beauty of literature to the people. We also want to provide platforms for all those who want to convey their writings to the audience and have a desire to perform. We are consistenly focussed in working for our vision.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
