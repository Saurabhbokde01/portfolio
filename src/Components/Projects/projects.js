import React from 'react';
import './projects.css';
import P1 from '../../assets/p1.JPG';
import P2 from '../../assets/p2.JPG';
import P3 from '../../assets/p3.JPG';
import P4 from '../../assets/p4.JPG';
import P5 from '../../assets/p5.JPG';
import P6 from '../../assets/p6.JPG';

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectTitle">My Projects</h2>
        <p className="projectDesc">I have created varieties of project that showcase my diverse skills and expertise. These includes developing dynamic e-commerce platform, amazon clone, netflix clone,and other interactive web applications.</p>

        <div className="projectImgs">
          <img src={P1} alt="Project1-Img" className="projectImg" />
          <img src={P2} alt="Project1-Img" className="projectImg" />
          <img src={P3} alt="Project1-Img" className="projectImg" />
          <img src={P4} alt="Project1-Img" className="projectImg" />
          <img src={P5} alt="Project1-Img" className="projectImg" />
          <img src={P6} alt="Project1-Img" className="projectImg" />
        </div>
        <button className="projectBtn">See More</button>

    </section>
  )
}

export default Projects;
