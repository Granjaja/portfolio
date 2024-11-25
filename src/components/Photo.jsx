"use client"
import Image from 'next/image'
import { easeIn, motion } from 'framer-motion'
// import {} from '.././app/work/'

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
        <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{ duration:2 , duration:0.4, ease:"easeIn" }
        }}>
            <motion.div initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{ duration:2 , duration:0.4, ease:"easeIn" }
        }} 
        className='w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute '>
                <Image 
                src="/assets/1606290189193.jpeg"
                priority
                quality={100}
                alt=''
                fill
                className='object-contain rounded-full'
                />
                </motion.div>
                <motion.svg 
                className=" w-[320px] xl:w-[420px]  h-[320px] xl:h-[420px]"
                fill="transparent"
                viewBox="0 0 440 440"
                xmlns="https://www.w3.org/2000/svg"
                >
                  <motion.circle 
                  cx="210" cy="210" r="215" 
                  stroke="#00ff99" strokeWidth="4" 
                  strongLinecap="round" strongLinejoin="round" 
                  initial={{strokeDasharray: "24 10 0 0"}} 
                  animate = {{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate:[120, 360]}}
                  transition={{ duration:20, repeat:Infinity, repeatType:"reverse"}}
                  />

                </motion.svg>
            </motion.div>
      
    </div>
  )
}

export default Photo
