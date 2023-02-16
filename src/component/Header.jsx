import React from 'react'
import './header.css'
import Rotate from 'react-reveal/Rotate';
import dot from './dot.svg'

export default function Header() {


    const handleClick=(e)=>{
        e.preventDefault()
        window.location.href='https://workspace.google.com/marketplace/app/form_approvals_publisher_notifications_d/674195424545?ref=website'
    }
    
    return (
        <div className="header">
            <div className='parent' >


                <div className="sideScroll">
                    <a class="Dot active" href="/our_customers">
                        <div class="dotSpace">
                            <img className='dot ' src={dot} alt="" />

                            <span class="spanDot"> <i class="fa fa-user mx-2 " aria-hidden="true"></i>Our Customers</span>

                        </div>
                    </a>
                    <a class="Dot active" href="#how_to_use">
                        <div class="dotSpace">
                            <img className='dot' src={dot} alt="" />

                            <span class="spanDot"> <i class="fa fa-question-circle mx-2" aria-hidden="true"></i>
                                How to use
                            </span>

                        </div>
                    </a>

                    <a class="Dot active" href="#Features">
                        <div class="dotSpace">
                            <img className='dot' src={dot} alt="" />

                            <span class="spanDot">
                                <i class="fa-solid fa-rocket mx-2 hello " />
                                Features
                            </span>

                        </div>
                    </a>
                    <a class="Dot active" href="#Supports">
                        <div class="dotSpace">
                            <img className='dot' src={dot} alt="" />

                            <span class="spanDot">
                                <i class=" mx-2 fas fa-headset"></i>
                                Support
                            </span>

                        </div>
                    </a>
                </div>
                <div className="child">

                    <div className="iframe2">
                    <Rotate top left>
                        <div className="text-ali ">

                            <h4 className='heading '>Transform Google Forms Into Interactive Workflows</h4>


                            <p className='my-4 para'>BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.</p>
                            <button class="btn btn-success my-5 my-sm-0 big" type="submit"><i class="fa-solid fa-rocket mx-2 install" onClick={handleClick}></i>Install for Free</button>
                        </div>
                        </Rotate>
                    </div>

                </div>
                <div className="child2">
                    <div className="iframe">
                        <iframe loading="lazy" class="iframeYoutube" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    </div>

                </div>

            </div>
        </div>
    )
}
