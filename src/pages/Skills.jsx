import data from '../data/index.json';

export default function Skills() {
    return (
        <>
            <section className="skills" id="skills">
                <div className="text--title-sm">MY SKILLS</div>
                <div className="text--title-lg">Tech Stack</div>
                <div className="skills--text text--title-sm">TECHNICAL LANGUAGES</div>
                <div className="skills--circles">
                    {data["Technical"].map((item, index) => (
                        <div key={index} className="skills--circle">
                            <img src={item.src} alt={item.title} />
                        </div>
                    ))}
                </div>
                <div className="skills--text text--title-sm">TECHNOLOGIES AND FRAMEWORKS</div>
                <div className="skills--circles">
                    {data["Frameworks"].map((item, index) => (
                        <div key={index} className="skills--circle">
                            <img src={item.src} alt={item.title} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}