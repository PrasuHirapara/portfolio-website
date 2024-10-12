import data from "../data/index.json";

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
            </section>
        </>
    );
}