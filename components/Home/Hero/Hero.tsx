// 'use client';
// import { Download, FolderOpen } from "lucide-react";
// import React from "react";
// import {TypeAnimation} from 'react-type-animation'
// import { Button } from "@/components/ui/button";

// const Hero = () => {
//   return (
//     <div
//       className="
//         relative
//         min-h-screen
//         flex
//         items-center
//         justify-center
//         overflow-hidden
//         bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,199,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)]
//         dark:bg-[radial-gradient(circle_farthest_corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]">
//     {/* content */}
//     <div className="relative z-10 text-center">
//         {/* Sub title */}
//         <div  className= "sm:mb-6">
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground  dark:text-gray-200 mb-8">
          
//             <span className="w-2 h-2 rounded-full bg-green-500"></span>
//             Available for opportunities 
//             </span>  
//             </div>
//             {/*title */}
//             <h1 className="text-4xl sm:text-5xl  md:text-6xl lg:text-7xl font-bold mb-6">
//               Hi, I&apos;m <span className="text-purple-800 dark:text-yellow-300">john Doe </span> 
            
//              </h1>
//              {/* Typewrite effects */}
//              <div className=" text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h12">
//               <TypeAnimation
//               sequence={[
//                 "MERN Stack Developer",
//                  2000,
//                  "Tech Instructor",
//                  2000,
//                  "Open Source Contributor",
//                  2000,
//               ]}

//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               className="font-mono"
//               />
//              </div>
//              {/*Description */}
//              <p className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mb-10 ">
//              Crafting exceptional digital experiences with modern technologies 
//              passionate about building scalable applications and teaching others
//              </p> 
             
//              {/* Buttons */}
// <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

//   {/* View Projects */}
//   <Button
//     size="lg"
//     asChild
//     className="bg-black hover:bg-gray-900 text-white rounded-xl px-8 py-7 text-xl"
//   >
//     <a href="#projects" className="flex items-center justify-center">
//       <FolderOpen className="w-6 h-6 mr-3 shrink-0" />
//       <span>View Projects</span>
//     </a>
//   </Button>

//   {/* Download CV */}
//   <Button
//     size="lg"
//     asChild
//     className="bg-black hover:bg-gray-900 text-white rounded-xl px-8 py-7 text-xl"
//   >
//     <a href="#cv" className="flex items-center justify-center">
//       <Download className="w-6 h-6 mr-3 shrink-0" />
//       <span>Download CV</span>
//     </a>
//   </Button>

// </div>
//            </div>
//              </div>
          
          
//   );
// };

// export default Hero;


"use client";

import React from "react";
import { FolderOpen, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        pt-20
        bg-[radial-gradient(circle_at_50%_50%,rgba(168,199,253,1)_0%,rgba(244,244,254,1)_45%,rgba(244,244,254,1)_100%)]
        dark:bg-[radial-gradient(circle_at_50%_47%,rgba(113,42,92,1)_0%,rgba(40,25,46,1)_90%)]
      "
    >
      {/* Content */}
      <div className="relative z-10 w-[90%] max-w-5xl mx-auto text-center">
        
        {/* Available Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-600 text-sm text-gray-700 dark:text-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I&apos;m{" "}
          <span className="text-purple-800 dark:text-yellow-300">
            Ayesha 
          </span>
        </h1>

        {/* Typewriter Effect */}
        <div className="text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-white font-semibold mb-6 h-12">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Tech Instructor",
              2000,
              "Open Source Contributor",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Crafting exceptional digital experiences with modern technologies.
          Passionate about building scalable applications and teaching others.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* View Projects */}
          <Button
            size="lg"
            asChild
            className="bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-xl px-8 py-6"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-3"
            >
              <FolderOpen className="w-5 h-5 shrink-0" />
              <span>View Projects</span>
            </a>
          </Button>

          {/* Download CV */}
          <Button
            size="lg"
            asChild
            className="bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-xl px-8 py-6"
          >
            <a
              href="#cv"
              className="flex items-center justify-center gap-3"
            >
              <Download className="w-5 h-5 shrink-0" />
              <span>Download CV</span>
            </a>
          </Button>

        </div>
      </div>
    </section>
  );
};

export default Hero;