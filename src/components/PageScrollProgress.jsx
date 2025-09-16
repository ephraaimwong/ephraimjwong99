import {motion, useScroll, useSpring} from "framer-motion";

const PageScrollProgress = () =>{
    const {scrollYProgress} =useScroll();
    const currentScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
    return (
        <div id="pageScrollProgressBar">
        <motion.div
      className=" hidden md:block fixed [top:30vh] [left:98vw] [height:40vh] [width:0.5rem] bg-brown-accent overflow-hidden rounded-lg"
        >
        <motion.div
            style ={{
          transformOrigin: "top",
          scaleY: currentScrollProgress,
            }}
            className=" w-full h-full bg-forest-green rounded-lg"
        />
        </motion.div>

        <motion.div
      className=" block md:hidden fixed [bottom:0vh] [left:0vw] [height:0.75rem] [width:100vw] bg-[#e5e7eb] overflow-hidden"
        >
        <motion.div
            style ={{
          transformOrigin: "left",
          scaleX: currentScrollProgress,
            }}
            className=" w-full h-full bg-green-500 rounded-lg"
        />
        </motion.div>
        </div>
    );
};

export default PageScrollProgress;