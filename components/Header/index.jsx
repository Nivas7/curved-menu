'use client'

import { useState } from "react";
import "./header.css"
import { AnimatePresence } from "framer-motion";
import Nav from "../Nav";

export default function Home()  {

    const [isActive, setIsActive] = useState(false);

    return ( 
        <>
            <div onClick={() => { setIsActive(!isActive)}} className="button">
                <div className={ ` burger ${isActive ? "burgerActive" : ""}`}></div>
            </div> 
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
     );
}
 
