import data from "../../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="MySkills">
      <div className="skills--container">
        <p className="skills--section--heading">My Skills</p>
      </div>

      <div className="skills--container">
        <h3>Languages</h3>
        <div className="skills--section--container">
          {data?.Languages?.map((item, index) => (
            <div className="skills--section-card--main">
              <div key={index} className="skills--section--card">
                <div className="skills--section--img">
                  <img src={item.src} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills--container">
        <h3>Frameworks</h3>
        <div className="skills--section--container">
          {data?.Frameworks?.map((item, index) => (
            <div className="skills--section-card--main">
              <div key={index} className="skills--section--card">
                <div className="skills--section--img">
                  <img src={item.src} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}