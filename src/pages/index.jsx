import NavBar from "./NavBar";
import ContactMe from "./ContactMe"
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}
