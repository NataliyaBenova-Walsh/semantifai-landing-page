'use client'

import { BotMessageSquare, FileAxis3d, FileCode, FilePenLine, FileStack} from "lucide-react";
import { useState, useEffect, useRef} from 'react'

const data = [
  
    {   
        title: 'AI Chatbots and Assistants',
        purpose:'Streamline communication with intelligent, conversational AI that enhances customer interactions and internal workflows.',
        useCases: 'Customer support, employee assistance, educational platforms, and municipal services.',
        icon: <BotMessageSquare className="w-10 h-10   text-emerald-300 "/>,
    },
    {
        title: 'Retrieval-Augmented Generation (RAG)',
        purpose:'Leverage cutting-edge AI for enhanced data retrieval, ensuring faster and more accurate access to relevant information.',
        useCases: 'Knowledge management, dynamic content generation, and real-time decision-making.',
        icon: <FileStack className="w-10 h-10   text-emerald-300 "/>,
    },
    {
        title: 'Document Generators',
        purpose:'Automate document creation, reducing manual effort and ensuring consistency and compliance.',
        useCases: 'Legal documentation, contract drafting, reports, and templates for businesses.',
        icon: <FilePenLine className="w-10 h-10   text-emerald-300 "/>,
    },
    {
        title: 'Process Automation',
        purpose:'Optimize repetitive tasks with AI-powered automation, improving efficiency and reducing operational costs.',
        useCases: 'Invoice processing, supply chain management, and administrative workflows.',
        icon: <FileAxis3d className="w-10 h-10   text-emerald-300 "/>,
    },
    {
        title: 'AI Integration Consulting and Implementation',
        purpose:'Provide tailored advice and strategies for integrating AI into existing systems, ensuring smooth adoption and maximum ROI.',
        useCases: 'Custom AI integrations for various industries, from finance to healthcare.',
        icon: <FileCode className="w-10 h-10 text-emerald-300 "/>,
    },
]


export function SolutionsSection () {
    /*
    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    useEffect(() => {
        data.forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems((prev) => [...prev, index]);
          }, index * 300); // Stagger delay per item
        });
      }, []);*/
      const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Trigger animation when section comes into view
                    data.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleItems((prev) => [...prev, index]);
                        }, index * 300); // Stagger the animation
                    });
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    return (
        <section ref={sectionRef}  className="my-36">
        <div className="relative z-10  m-16 p-16">
            <h2 className="text-teal-300 text-center text-3xl">Solutions</h2>
            <div className="text-start flex flex-col gap-5 mt-10 relative">
                {data.map((item, index) => (
                   <div
                   key={index}
                   className={`my-10 flex items-start relative transform transition-all duration-700 ease-in-out ${
                       visibleItems.includes(index) ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                   }`}
               >
                   <div className="relative -right-20 z-20 inline-flex items-center justify-center bg-gradient-to-bl from-zinc-950 via-zinc-700 to-zinc-950 border border-teal-100 rounded-xl p-5 transform translate-x-[-50%] translate-y-[-50%]">
                       {item.icon}
                   </div>
                   <div className="p-10 border border-teal-300 rounded-xl pl-16 z-10 w-full">
                       <h3 className="w-auto mb-5 bg-gradient-to-r from-emerald-300 via-teal-300 to-zinc-300 text-transparent bg-clip-text text-2xl">
                           {item.title}
                       </h3>
                       <p className="my-5">
                           <span className="text-teal-200">Purpose:</span> {item.purpose}
                       </p>
                       <p className="my-5">
                           <span className="text-teal-300">Use cases:</span> {item.useCases}
                       </p>
                   </div>
               </div>
                ))}
            </div>
        </div>
    </section>

    )
}