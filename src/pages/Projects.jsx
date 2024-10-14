import data from "../data/index.json";

export default function Projects() {
    return (
        <>
            <section className="projects" id="projects">
                <div className="text--title-sm">WHAT I MADE</div>
                <div className="text--title-lg">Websites</div>
                <div className="projects--desc">
                    {data["Projects"].map((item, index) => (
                        <div key={index} className="projects--container">
                            <div className="projects--container-main">
                                <div className="projects--container-title">{item.title}</div>
                                <div className="projects--container-description text--description">{item.description}</div>
                                <div className="projects--container-about">
                                    <div className="projects--container-links">
                                        <a href={item.linkLive} target="_blank" rel="noopener noreferrer">View Live</a>
                                        <a href={item.linkGitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                    <div className="projects--container-tech">
                                        {item.tech.map((img, index) => (
                                            <img key={index} src={img} alt="img" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <img src={item.src} alt="img" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}