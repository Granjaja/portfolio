import Image from "next/image";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full p-5">
        <div className="flex justify-between items-center flex-col xl:flex-row xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left"> <span className=" text-purple-500">Software Developer</span> 
          <h1 className="h1">
            Hello I'm <span className="text-accent">Gran</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white">I excel at crafting elegant digital experience and I am proficient at several programming languages and technologies.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">Downloads
              <FiDownload/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent flex rounded-full justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
          </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
            </div>
        </div>
        </div>
        <Stats/>
        </section>
    
  );
}
