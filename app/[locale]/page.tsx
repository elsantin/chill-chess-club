import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Method from "./components/Method";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function HomePage() {
  return (
    <main className="bg-slate-950">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Method />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
