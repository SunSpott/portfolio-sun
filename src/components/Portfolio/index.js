import React from "react";
import './index.scss'
import Loader from "react-loaders";
import { useState } from "react";
import { useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const str = "My Work".split("")
    console.log(portfolioData)

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                    src={port.cover}
                                    className="portfolio-image"
                                    alt="portfolio" 
                                />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button 
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    

    return (
        <>
            <div  className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={str}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio