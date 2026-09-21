import SectionHeading from "@/components/Helper/SectionHeading";
import { experiences } from "@/data";
import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title_1="Experience &"
        title_2="Education"
        description="My Professional Journey and academic background"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Timeline Line */}
        <div
          className="
            absolute
            left-4
            md:left-1/2
            top-0
            bottom-0
            w-px
            bg-gradient-to-b
            from-blue-400
            to-blue-900
            md:-translate-x-1/2
          "
        />

        {experiences.map((item, index) => (
          <div
            key={index}
            className={`
              relative
              flex
              flex-col
              md:flex-row
              gap-8
              mb-12
              ${
                index % 2 === 0
                  ? "md:flex-row-reverse"
                  : ""
              }
            `}
          >
            {/* Timeline Node */}
            <div
              className="
                absolute
                left-4
                md:left-1/2
                top-0
                w-10
                h-10
                -translate-x-1/2
                rounded-full
                bg-white
                dark:bg-gray-900
                border-2
                border-blue-500
                flex
                items-center
                justify-center
                z-10
              "
            >
              {item.type === "work" ? (
                <Briefcase className="w-5 h-5 text-blue-500" />
              ) : (
                <GraduationCap className="w-5 h-5 text-blue-500" />
              )}
            </div>

            {/* Content Side */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
              <div
                className="
                  bg-white
                  dark:bg-gray-900
                  p-6
                  rounded-xl
                  shadow-md
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                {/* Period */}
                <div className="mb-3">
                  <span
                    className="
                      inline-block
                      px-3
                      py-1
                      rounded-full
                      bg-blue-600/10
                      text-blue-600
                      text-sm
                      font-medium
                    "
                  >
                    {item.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1 text-foreground">
                  {item.title}
                </h3>

                {/* Company */}
                <p className="text-muted-foreground text-sm mb-3">
                  {item.company}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        text-xs
                        rounded-full
                        bg-indigo-500
                        text-white
                        font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Empty Side */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;