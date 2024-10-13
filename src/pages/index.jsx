import NavBar from "./NavBar";
import ContactMe from "./ContactMe"
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <ContactMe />
    </>
  );
}
