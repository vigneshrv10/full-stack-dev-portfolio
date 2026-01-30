import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Tutorials from "./sections/Tutorials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-primary min-h-screen text-slate-200 font-sans selection:bg-accent selection:text-primary">
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black opacity-80 pointer-events-none" />

            <Navbar />
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Education />
            <Tutorials />
            <Certifications />
            <Contact />
            <Footer />
            <Analytics />
        </div>
    );
}

export default App;
