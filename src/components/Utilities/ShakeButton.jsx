import { motion, useAnimation} from "framer-motion";


const ShakeButton = ({children, ...props}) =>{
    const controls = useAnimation();

    const triggerShake = () => {
        controls.start({
                rotate: [0, -30, 30, -30, 30 ,0],
                scale: [1, 1.5 ,1],
                transition:{
                    duration: 0.8,
                    ease: "easeOut"
                }
            }
        );
    };
    return(
        <motion.button
            {...props} //forward the scrollNext/scrollPrev
            onMouseEnter={triggerShake}
            onFocus={triggerShake}
            animate={controls}
        >
            {children}
        </motion.button>
    );
};
export default ShakeButton;