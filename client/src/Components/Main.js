import React from "react";
import { useState, useEffect, useRef } from "react";
import './stylesheets/main.css'
import img1 from '../Public/Images/carrousel_img_1.png'
import img2 from '../Public/Images/carrousel_img_2.png'
import img3 from '../Public/Images/carrousel_img_3.png'
import img4 from '../Public/Images/carrousel_img_4.png'

function Main (props) {


    return (
        <main>
            <div className="carrousel">
                <div className="content">
                    <div className="carousel-content">
                    </div>
                    <div className="slideshow">
                        <button className="slide-btn slide-btn-1"></button>
                        <button className="slide-btn slide-btn-2"></button>
                        <button className="slide-btn slide-btn-3"></button>
                        <button className="slide-btn slide-btn-4"></button>
                        <div className="slideshow-wrapper">
                            <div className="slide">
                                <img className="slide-img"
                                    src=
        {img1} alt='img1'></img>
                            </div>
                            <div className="slide">
                                <img className="slide-img"
                                    src=
        {img2} alt='img2'></img>
                            </div>
                            <div className="slide">
                                <img className="slide-img" src=
        {img3} alt='img3'></img>
                            </div>
                            <div className="slide">
                                <img className="slide-img" src=
        {img4} alt='img4'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;