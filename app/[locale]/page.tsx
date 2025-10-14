import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Method from "./components/Method";
import BlogPreview from "./components/BlogPreview";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function HomePage() {
  return (
    <main className="bg-warmGray-950">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Method />
      <BlogPreview />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
