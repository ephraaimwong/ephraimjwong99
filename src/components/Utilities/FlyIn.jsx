import {motion} from 'framer-motion';

const directions = {
    left:   {x:-100,    y:0     },
    right:  {x:100,     y:0     },
    up:     {x:0,       y:-100  },
    down:   {x:0,       y:100   },
};

const FlyIn = ({children, direction="right", duration = 0.8, delay = 0, once = true}) => {
    const offset = directions[direction] || directions.right;
    return(
        <motion.div
            initial = {{ opacity:0, ...offset}}
            whileInView={{opacity:1, x:0, y:0}}
            transition={{duration, delay, ease:"easeOut"}}
            viewport={{once:once, amount:0.4}}
        >
         {children}   
        </motion.div>
    );
};

export default FlyIn;