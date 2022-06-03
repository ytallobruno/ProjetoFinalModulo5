import { calcLength, motion } from "framer-motion"
import { useState } from "react"
import style from './Animate.module.css'


const AnimatedPage = ({children}) => {
  return (
    <motion.div
    className={style.animate}
    animate={{y: '-710px'}}
    transition={{ type: "spring", stiffness: 100}}
    >    
        {children}
    </motion.div>
  )
}

export default AnimatedPage
