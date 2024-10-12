import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import data from '../data/index.json';

export default function AboutMe() {
    const tiltRefs = useRef([]);

    useEffect(() => {
        tiltRefs.current.forEach((tiltCard) => {
            if (tiltCard) {
                VanillaTilt.init(tiltCard, {
                    max: 40,
                    speed: 400,
                    glare: true,
                    'max-glare': 0.3,
                });
            }
        });
    }, []);

    return (
        <>
            <section id="aboutme" className="aboutme">
                <div className="aboutme--title">ABOUT ME</div>
                <div className="aboutme--title-intro text--title">Introduction</div>
                <div className="aboutme--intro">
                    <p className="aboutme--para text--description">{data["Introduction"][0]}</p>
                    <p className="aboutme--para text--description">{data["Introduction"][1]}</p>
                    <p className="aboutme--para text--description">{data["Introduction"][2]}</p>
                    <p className="aboutme--para text--description">{data["Introduction"][3]}</p>
                </div>
                <div className="aboutme--tilt">
                    {data["About"].map((item, index) => (
                        <div
                            ref={(el) => (tiltRefs.current[index] = el)}
                            className="aboutme--tilt-card"
                            key={index}
                        >
                            <img src={item.src} alt="img" className="aboutme--tilt-card-img" />
                            <h3 className="aboutme--tilt-card-title">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
