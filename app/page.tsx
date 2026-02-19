import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { WhyClientsTrust } from "@/components/WhyClientsTrust";
import { FAQ } from "@/components/FAQ";
import { ClientTestimonials } from "@/components/ClientTestimonial";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <HowItWorks />
      <WhoWeWorkWith />
      <WhyClientsTrust />
      <FAQ />
      <ClientTestimonials />
      <Contact />
      <Footer />
    </div>
  );
}
