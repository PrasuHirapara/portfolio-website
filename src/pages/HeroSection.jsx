import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {

    const openLink = (link) => window.open(link);

    return (
        <>
            <main className="herosection">
                <div className="herosection--info">
                    <div className="herosection--info--name">
                        <p>Hi, I am <span>Prasu.</span></p>
                    </div>
                    <div className="herosection--links">
                        <button className="herosection--links-resume" onClick={() => openLink(`https://drive.google.com/file/d/1w-3mgUUcWT2K-igPWr6_HPUjA1rRw8xM/view?usp=sharing`)}>My Resume</button>
                        <div className="herosection--links-account herosection--img-invert">
                            <img src="./img/skills/leetcode.svg" alt="leetcode" onClick={() => openLink(`https://leetcode.com/u/PrasuHirpara/`)} />
                        </div>
                        <div className="herosection--links-account herosection--img-invert">
                            <img src="./img/skills/github.svg" alt="github" onClick={() => openLink(`https://github.com/PrasuHirapara`)} />
                        </div>
                        <div className="herosection--links-account">
                            <img src="./img/skills/linkedin.svg" alt="linkedin" onClick={() => openLink(`https://www.linkedin.com/in/prasu-hirpara-130575247/`)} />
                        </div>
                        <div className="herosection--links-account">
                            <img src="./img/skills/gmail.svg" alt="gmail" onClick={() => openLink(`https://mail.google.com/mail/u/0/#inbox`)} />
                        </div>
                    </div>
                    <div className="herosection--info-text">
                        <p>I am</p>
                        <TypeAnimation
                            sequence={[
                                'Full Stack developer.',
                                1000,
                                'Backend developer.',
                                1000,
                                'Leetcode enthusiast.',
                                1000,
                                'Competitive programmer.',
                                1000,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            cursor={true}
                            style={{ fontSize: '27px', display: 'inline-block', fontWeight: 'bold', color: '#2548E3' }}
                        />
                    </div>
                </div>
                <div className="herosection--img">
                    <img src="./img/hero section/herosection.png" alt="hero imaage" />
                </div>
            </main>
        </>
    );
}