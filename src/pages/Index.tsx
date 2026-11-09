import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <>
      <Seo pathname="/" />
      <Header />
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default Index;
