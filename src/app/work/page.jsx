"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"


const projects = [
  {
    num:"01",
    category:"fullstack",
    title:"project 1: apicalhz",
    description:".",
    stack:[{name:"Next.js"}, {name:"Tailwind Css"}, {name:"Node.js"}, {name:"Typescript"}, {name:"Postgres"}],
    image:"/assets/work/apicalhz.png",
    live:"https://apicalhz.com/",
    github:"https://github.com/Granjaja/hitkali-headset-site"

    

  },
  {
    num:"02",
    category:"fullstack",
    title:"project 2",
    description:"Simple recipe book project with front end and back end.",
    stack:[{name:"Next.js"}, {name:"Tailwind Css"}, {name:"Node.js"}],
    image:"/assets/work/recipebook.png",
    live:"https://recipe-book-two-delta.vercel.app/",
    github:"https://github.com/Granjaja/Recipe-book"

    

  },
  {
    num:"03",
    category:"frontend",
    title:"project 3",
    description:"Portfolio website with creative design and animation using Motion.",
    stack:[{name:"HTML 5"}, {name:"Css 3"}, {name:"Javascript"}],
    image:"/assets/work/frontend.png",
     live:"https://vercel.com/grans-projects-b9234d37/portfolio",
    github:"https://github.com/Granjaja/nextjs-portfolio"
  },
  {
    num:"04",
    category:"frontend",
    title:"project 4",
    description:"A trading website educational blogs and input from users.",
    stack:[{name:"Next.js"}, {name:"Tailwind Css"}], 
    image:"/assets/work/trading.png",
    live:"https://vercel.com/grans-projects-b9234d37/trading",
    github:"https://github.com/Granjaja/trading"
  },
  {
    num:"04",
    category:"backend",
    title:"Swifte",
    description:"A tailoring website.",
    stack:[{name:"express.js"}],
  }
    

]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange =(swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row  xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                  <li key={index} className="text-xl text-accent">{item.name}</li>)
                })}
              </ul>
              <div className="border border-white/60"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Projects</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>
                </Link>
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repository</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) =>{
                return (<SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full">
                    <Image
                    src={project.image}
                    fill
                    className="object-contain"
                    alt=""
                    />
                  </div>
                  </div>
                </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items items-center transition-all"/>
            </Swiper>
            </div>
        </div>
      </div> 
    </motion.section>
  )
}

export default Work
