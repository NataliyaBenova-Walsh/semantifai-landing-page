import { ContactForm } from "./contact-form";
import { HeroSection } from "../hero-section";

export function ContactSection () {


    return (
        
        <section className="flex gap-12 justify-start items-start m-12">
            <HeroSection />
            <ContactForm />
        </section>
    )
}