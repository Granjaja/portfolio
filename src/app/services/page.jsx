"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import { Description } from "@radix-ui/react-dialog"
import { motion } from "framer-motion"


const services = [{
  num:"01",
  title:"Web Development",
  description:"Get a custom website with tailored solution for your business and optimized performance for seamless user experience.",
  href:""
},
{
  num:"02",
  title:"UI/UX Design",
  description:"Crafting intuitive and engaging user experiences that blend aesthetics with functionality to ensure you get a responsive design that looks good in all devices.",
  href:""
},
{
  num:"03",
  title:"Copywriting",
  description:"Creating compelling, results-driven copy that captures attention and communicates your brand's story.",
  href:""
},
{
  num:"04",
  title:"Python and Data tasks",
  description:"Leveraging Python to automate tasks, analyze data, and deliver actionable insights through clean, efficient code.",
  href:""
}
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay: 2.4, duration:0.4, ease:"easeIn"}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=>{
            return <div key={index} className="flex-1 flex flex-col gap-6 group">
              <div className="w-full flex justify-between items-center" >
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ">
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}

        </motion.div>
      </div>
    </section>
  )
}

export default Services
