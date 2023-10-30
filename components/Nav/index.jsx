import { usePathname } from "next/navigation"
import { useState } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "../../anim";
import Link from "../Link";
import Curve from "../Curve"
import "./nav.css"


const navItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Work",
        href: "/work"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Contact",
        href: "/contact"
    }
];
export default function Nav(){
const pathname = usePathname();
const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return(
        <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
         className="menu">
            <div className="body">
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="nav">
                    <div className="header">
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map( (data, index) => {
                            return <Link 
                            key={index}
                            data={{...data, index}}
                            isActive={selectedIndicator == data.href}
                            setSelectedIndicator={setSelectedIndicator}/>
                        })
                    }
                </div>
                <div className="footer">
                    <a>Awwwardes</a>
                    <a>Instgram</a>
                    <a>Dribble</a>
                    <a>LinkedIn</a>
                </div>
            </div> 
            <Curve />
        </motion.div>
    )
}