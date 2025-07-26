import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext/ThemeProvider";
import DevJourneyLanding from "./pages/Home";
import AboutMePage from "./pages/About";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  const { ref: homeRef, inView: homeIsVisible } = useInView({ threshold: 0.3 });
  const { ref: aboutRef, inView: aboutIsVisible } = useInView({
    threshold: 0.3,
  });
  const { ref: projectsRef, inView: projectsIsVisible } = useInView({
    threshold: 0.2,
  });

  // Logika untuk menentukan section aktif.
  // Section yang paling bawah terlihat akan menjadi yang aktif.
  let activeSection = "home";
  if (homeIsVisible) activeSection = "home";
  if (aboutIsVisible) activeSection = "about";
  if (projectsIsVisible) activeSection = "projects";

  return (
    <ThemeProvider>
      <div>
        <Navbar activeSection={activeSection} />
        <main>
          <section id="home" ref={homeRef}>
            <DevJourneyLanding />
          </section>
          <section id="about" ref={aboutRef}>
            <AboutMePage />
          </section>
          <section id="projects" ref={projectsRef}>
            <ExperiencePage />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
