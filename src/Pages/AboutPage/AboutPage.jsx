import React from 'react'
import './AboutPage.css'

function AboutPage() {
    return (
        <div className='ABOUT-US-MAIN-CONTAINER'>
                    <div className='ABOUT-US-HEADING' data-aos="fade-left"   data-aos-delay="300"  data-aos-mirror="true">
                          <h1 >ABOUT US</h1>
                      </div>
            <div className='ABOUT-US-FLEX-CONTAINER'>
                    <div className='aboutleftimg' data-aos="zoom-in" data-aos-mirror="true"  data-aos-duration="1000"
                                                        data-aos-easing="ease-in-out" data-aos-offset="200">
                          <img src="assets/EventImages/AboutPage-Image.jpg" alt="AboutUS-Image" />
                    </div>
                    <div className='aboutrightcontainer' >
                          <div className='aboutrightcontent'>
                               <p>Sardar Vallabhbhai Patel Institute Of Technology, Vasad,Has Emerged As The Chieftain Among The Premiere Institutes Of Gujrat For The Last 25 Years.Prakarsh Is One Of The Most Recognized Symposiums All Over Gujrat.<br />
                              <br/>
                                It Is A Perfect Launch Pad For Tech Geeks To Showcase Their Inteligence And Innovativeness,And A Massive Platform For Various Activities And Events Combined With Lots Of Entertainment.Prakarsh 2023 Will Be Held On 23-25 Feb And Will Feature An Impressive Lineup of 40 Events, Which Will Incorporate Fun Activities With Ardour.
                                </p>
                    </div>
                             </div>
            </div>
        </div>
    )
}

export default AboutPage

