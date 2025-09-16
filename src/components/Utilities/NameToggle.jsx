import { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NameToggle({name1, name2}) {
    const [showEnglish, setShowEnglish] = useState(true);
    useEffect( () =>{
        const toggleInterval = setInterval(()=>{
            setShowEnglish((prev) => !prev);
        }, 3000);
        return () => clearInterval(toggleInterval);
    },[]);

    return(
        <AnimatePresence mode='wait'>
        {showEnglish ? (
            <motion.span
            key='english'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration: 0.8}}
            >
            {name1}
        </motion.span>) : (
            <motion.span
                key='chinese'
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration: 0.8}}
            >
            {name2}
            </motion.span>
        )}
        </AnimatePresence>
    );
};
