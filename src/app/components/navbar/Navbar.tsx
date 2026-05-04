import Image from "next/image";
import Logo from "./Logo";
import { LuMenu, LuSearch } from "react-icons/lu";


export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full h-18 lg:h-24 bg-white border-b border-gray-200 px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-full mx-auto w-[95%] md:w-[90%] ">
            <Logo />

            {/* center navbar */}
            <div className="flex items-center gap-3 px-4 py-2 shadow-md border border-gray-200 rounded-full cursor-pointer">
                <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Image src="/images/home.png" alt="Home" width={25} height={25} />
                    <span className="hidden lg:block">Anywhere</span>
                </span>
                <span className="h-6 w-px bg-gray-300 hidden lg:block"/>
                <span className="hidden md:block text-sm font-medium text-gray-700">
                    Anyweek
                </span>
                <span className="h-6 w-px bg-gray-300 hidden lg:block"/>
                <span className="hidden md:block test-sm font-medium text-gray-300">
                    Add guests
                </span>

                <div className="w-8 h-8 text-white rounded-full bg-primary grid place-items-center">
                    <LuSearch size={16}/>
                </div>
            </div>

            {/* right navbar */}
            <div className="flex items-center gap-4 relative">
                <button className="hidden md:block text-sm font-medium px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 cursor-pointer">
                    Airbnb your home
                </button>
                
                <div className="flex items-center gap-2 border-gray-300 rounded-full px-2 py-1 hover:shadow-md transition cursor-pointer border">
                    {/* <button className="w-8 h-8 grid place-items-center rounded-full hover:bg-gray-100 transition cursor-pointer">
                        <LuMenu size={18} />
                    </button>

                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image src="/images/image.png" alt="user-avatar" fill className="object-cover"/>
                    </div> */}
                </div>
            </div>
        </div>
    </nav>
  )
}
