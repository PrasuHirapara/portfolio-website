import Footer from "./footer/Footer";
import MySkills from "./skills/MySkills";
import HeroSection from "./hero section/HeroSection";
import ContactMe from "./contact me/ContactMe";
import MyPortfolio from "./portfolio/MyPortfolio";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
