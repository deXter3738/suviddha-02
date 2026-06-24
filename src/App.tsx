import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { Investment } from "./sections/Investment";
import { Lifestyle } from "./sections/Lifestyle";
import { MasterPlan } from "./sections/MasterPlan";
import { Navbar } from "./sections/Navbar";
import { Philosophy } from "./sections/Philosophy";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Lifestyle />
        <MasterPlan />
        <Investment />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
