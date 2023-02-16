import React from 'react'
import logo from './logo.svg'
import './navbar.css'
import one from './1.svg'
import two from './2.svg'

import three from './3.svg'

export default function Navbar() {
    const handleClick=(e)=>{
        e.preventDefault()
        window.location.href='https://workspace.google.com/marketplace/app/form_approvals_publisher_notifications_d/674195424545?ref=website'
    }
    

    const handleClick2=(e)=>{
        e.preventDefault()
        window.location.href='https://www.boloforms.com/form-approval/pricing/'
    }
    return (
        <div className="containe">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a href="/"><img class="navbar-brand" src={logo} /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown mx-4">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Product
                            </a>
                            <div class="dropdown-menu p-3 " aria-labelledby="navbarDropdown">
                                <div className="dropdown-item2 dropdown-item ">
                                    <img src={one} className="drop_img mx-3" />
                                    <a class="dropdown-item p-2" href="#">Form Approvals

                                        <span className='drop2'>Create interactive workflows </span>
                                      </a>
                                </div>
                                <div className="dropdown-item2 dropdown-item">
                                    <img src={two} className="drop_img mx-3" />
                                    <a class="dropdown-item p-2 " href="#">SheetGod
                                        <p className='drop'>AI-powered Excel magic made easy!</p></a>
                                </div>
                                <div className="dropdown-item2 dropdown-item">

                                    <img src={three} className="drop_img mx-3" />
                                    <a class="dropdown-item p-2" href="#">Signature
                                        <p className='drop'>AI-powered Excel magic made easy!</p>

                                    </a>
                                </div>

                            </div>
                        </li>
                        <li class="nav-item active ">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item mx-4">
                            <a class="nav-link" href="#">Guides</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Templates</a>
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0 ms-auto">
                        {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                        <button class="btn btn-outline-success my-2 my-sm-0 mx-3"  onClick={handleClick} >Install Now</button>
                        <button class="btn btn-success my-2 my-sm-0" type="submit" onClick={handleClick2}>BoloForm Premium</button>

                    </form>
                </div>
            </nav>
        </div>
    )
}
