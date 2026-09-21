import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Image from 'next/image'
import { highlights, stats } from '@/data'

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900"> 
    {/*SectionHeading */}
    <SectionHeading
     title_1='About'
       title_2='Me' 
       description ="Get to know the developer behind the code "
       />
       <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
            src={"/images/user.jpg"}
            alt="profile"
            width={700}
            height={700}
            className="w-full h-full object-center rounded-xl"
            />
          </div>
        </div>
        {/* content */}
        <div className="space-y-6">
          <h3 className=" text-2xl font-semibold ">
            A Passionate developer who loves to create 
          </h3>
          <p className=" text-muted-foreground leading-relaxed">
            I am full stack developer with over 2  years of experience building web application 
            , My journey started with curiosity about how websites work, and it has evolved
            into a passion for creating seamless,user-focuseed digital experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed ">
            Beyond coding, I am dedicated to sharing knowledge. I have taught over 1000 students
            through online courses and mentorship programs.believe in continuous learning and staying updated with
            the latest technologies. 
          </p>

          {/* Highlights */}
         <div className="grid grid-cols-2 gap-x-12 gap-y-6 pt-4">
         {highlights.map((item) => {
           const Icon = item.icon;

          return (
         <div
         key={item.text}
         className="flex items-center gap-4 whitespace-nowrap"
      >
        {/* Icon */}
        <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-500" />
        </div>

        {/* Text */}
        <span className="text-muted-foreground text-base">
          {item.text}
        </span>
      </div>
        );
        })}
          </div> 
            </div>
          </div>
          <div className="mt-16 w-[80%] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => {
                return (
                  <div 
                  key={stat.label}
                  className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
   
  

  )
}

export default About