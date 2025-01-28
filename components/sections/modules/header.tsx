import Image from "next/image";
import ColorLogo from '../../../app/assets/Colorlogo.svg'

export function Header () {
    return (
        <header className="relative bg-transparent" >
            <Image src={ColorLogo} alt="Colour Logo SemantifAI" className="w-96 mr-auto ml-16 border-b-2 border-teal-400 p-2"/>
                     
        </header>
    )
}

export function Header2 () {

    return (
        <header className="relative bg-transparent">
        <div className="relative w-96 mx-16 pb-[2px] rounded-md bg-gradient-to-r from-teal-500 via-emerald-300 to-cyan-500">
            <div className="bg-zinc-950 ">
                <Image
                    src={ColorLogo}
                    alt="Colour Logo SemantifAI"
                    className="w-full"
                />
            </div>
        </div>
    </header>
    )
}