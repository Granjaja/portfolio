"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiNodedotjs, SiReact, SiNextdotjs} from "react-icons/si"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip, TooltipContent, TooltipTrigger, TooltipProvider} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about = {
  title:"About me",
  description:"H, I'm Granvile, a passionate and detail oriented web developer with an aptitude for creating intuitive, responsive and visaully appealing websites. I focus on delivering seamless user experinces and scalble digital solutions.",
  info:[
    {
    fieldName:"Name:",
    fieldValue:"Granvile Karanja"
  },
  {
    fieldName:"Phone:",
    fieldValue:"+254 711 912 608"
  },
  {
    fieldName:"Experience:",
    fieldValue:"2 Years"
  },
  {
    fieldName:"Nationality:",
    fieldValue:"Kenyan"
  },
  {
    fieldName:"Email:",
    fieldValue:"granvilekaranja@gmail.com"
  },
  {
    fieldName:"Freelance:",
    fieldValue:"Available"
  },
]
}

const experience ={
  icon:"/assets/freepik__upload__41585.jpeg",
  title:"My Experience",
  description:"My experience spans diverse range of products from crafting sleek websites to robust and dynamic web applications.",
  items:[
    {company:"Freelance",
    position: "Full Stack Developer",
    duration:"2024-present"
    },
    {company:"WriterAcess",
      position: "Content Writer",
      duration:"2022-present"
      },
      {company:".",
        position: "Freelance Writer",
        duration:"2017-present"
        },
    // {company:"Web Design Studio",
    //   position: "Front End Developer Intern",
    //   duration:"Summer 2021"
    //   },
    //   {company:"Ecommerce Start Up",
    //     position: "Freelance Web Developer",
    //     duration:"2020-2021"
    //     },
    //     {company:"Ecommerce Start Up",
    //       position: "Freelance Web Developer",
    //       duration:"2020-2021"
    //       }
  ]

}

const education ={
  icon:"/assets/freepik__upload__41585.jpeg",
  title:"My education",
  description:"I have a solid foundation in web development and stastitics complemented by contionus learning. My education has imparted me with skills to build both front end and back end systems, problem solving abilities and understanding of user centered design.",
  items:[
    {institution:"University of Eldoret",
    degree: "Applied Statistics With Computing",
    duration:"2013 - 2017"
    },
    {institution:"Udemy",
      degree: "100 Days of Code: The Complete Python Pro Bootcamp",
      duration:" 2024"
      },
      {institution:"Udemy",
        degree: "The Complete 2024 Web Development Bootcamp",
        duration:" 2024"
        },  
      {institution:"Udemy",
        degree: "The Complete Copywriting Course: Write to Sell Like a Pro",
        duration:" 2024"
        },
  ]
}

const skills ={
  title:"My skills",
  description:"I am committed to enhance my skills through online courses and practical hands on experience in the dynamic web development field ",
  skillList:[
    {
    icon:<FaHtml5/>,
    name:"html 5"
    },
    {
      icon:<FaCss3/>,
      name:"css 3"
      },
      {
        icon:<FaJs/>,
        name:"javascript"
        },
        {
          icon:<SiReact/>,
          name:"react.js"
          },
          {
            icon:<SiNextdotjs/>,
            name:"next.js"
            },
            {
              icon:<SiTailwindcss/>,
              name:"tailwindcss"
              },
              {
                icon:<FaNodeJs/>,
                name:"node.js"
                },
  ]
};


const Resume = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{
      opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="w-full">Experience</TabsTrigger>
            <TabsTrigger value="education" className="w-full">Education</TabsTrigger>
            <TabsTrigger value="skills" className="w-full">Skills</TabsTrigger>
            <TabsTrigger value="about" className="w-full">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px]  text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{experience.items.map((item, index) =>{
                    return <li key={index}
                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent">.</span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  })}</ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px]  text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{education.items.map((item, index) =>{
                    return <li key={index}
                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-5"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  })}</ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {skills.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:m-0">{skills.description}</p>
                </div>
                
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            {skill.name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      </li>
                  })}
                </ul>
              </div>

            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div>
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 my-5">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-10 max-w-[620px]">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-2">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
