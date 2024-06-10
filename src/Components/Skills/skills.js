import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WEBDesign from '../../assets/website-design.png';
import APPDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className='skilltitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am a proficient in HTML, CSS, and Javascript, as well as design software such as Adobe Photoshop and Illustrator</span>

        <div className="skillBars">

            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>I specialize in creating intuitive and visually appealing interfaces that enhance user eperience.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WEBDesign} alt="WEBDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>I focus on crafting responsive and aethetically pleasing websites that provide seamless user experience.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={APPDesign} alt="APPDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>I create intuitive and visually engaging mobile interfaces that prioritize user experience.</p>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Skills;
