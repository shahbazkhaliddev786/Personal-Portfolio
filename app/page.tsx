import Hero from "@/components/Hero";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Service from "@/components/services";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Service />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </main>
  );
}