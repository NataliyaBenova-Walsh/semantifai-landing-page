import { Facebook, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";


export function Footer () {

    return (
        <section className="w-full flex justify-between items-center border-t-2 border-teal-300">
            <p className=" text-muted-foreground text-center py-5">
              © 2024 Semantif.ai
            </p>
            <div className="flex gap-8 justify-center items-center">
            <Link href='https://www.facebook.com/profile.php?id=61570670256553' target="_blank"><Facebook className="text-teal-300 w-6 h-6"/></Link>
            <Link href='https://www.linkedin.com/company/semantifai/' target="_blank"><Linkedin className="text-teal-300 w-6 h-6"/></Link>
            <Link href='https://www.youtube.com/@semantifai' target="_blank"><Youtube className="text-teal-300 w-6 h-6"/></Link>
            </div>
        </section>
    )
}