import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "../../anim";

export default function index({data, isActive, setSelectIndicator}) {
    const { title, href, index } = data;

    return(
        <motion.div
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="link"
        >
            <motion.div 
            variants={scale}
            animate={isActive ? "open" : "closed"}  
            className="indicator"></motion.div>
            <Link href={href}>{title}</Link>
        </motion.div>
    )
}