import data from "../data/index.json";
import Tilt from 'react-parallax-tilt';
export default function AboutMe() {
    return (
        <>
            <section id="aboutme" className="aboutme">
                <div className="aboutme--title">ABOUT ME</div>
                <div className="aboutme--title-intro text--title    ">Introduction</div>
                <div className="aboutme--intro">
                    <p className="aboutme--para text--description">{data["Introduction"][0]}</p>
                    <p className="aboutme--para text--description">{data["Introduction"][1]}</p>
                    <p className="aboutme--para text--description">{data["Introduction"][2]}</p>
                    <p className="aboutme--para text--description">{data["Introduction"][3]}</p>
                </div>
                <div className="aboutme--tilt">
                    {data["About"].map((item, index) => (
                        <Tilt key={index}>
                            <div class="aboutme--tilt-card">
                                <img src={item.src} alt="img" class="aboutme--tilt-card-img" />
                                <h3 class="aboutme--tilt-card-title">{item.title}</h3>
                                <div class="glare-wrapper"></div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </section>
        </>
    );
}