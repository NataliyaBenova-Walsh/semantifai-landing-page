import { SolutionsSection } from "./modules/solutions-section";
import { Header } from "./modules/header";
import { ContactSection } from "./modules/contacts/contact-section";
import { Footer } from "./modules/footer";
import { Header2 } from "./modules/header";

export function HomeSection () {
    return (
        <>
        
         
       

       <div className="relative p-8 bg-network2-bg bg-center bg-cover bg-fixed">
          
          <div className="absolute inset-0 bg-zinc-900 opacity-80 "></div> 
            
             <section className="relative z-10" >
            <Header />
            <ContactSection />
            <SolutionsSection />
            <Footer />
            </section>
        </div>
        </>
        
    )
}

/*   
            <section className="relative z-10 bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950" >
           <Header2 />
           <ContactSection />
           <SolutionsSection />
           <Footer />
           </section>*/