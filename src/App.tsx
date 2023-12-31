import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mt-[calc(12px+56px)] ">
        <Header />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
