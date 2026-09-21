import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Experience from "./Experience/Experience";
import ClientReview from "./ClientReview/ClientReview";
import Contact from "./Contact/Contact";
// import { Contact } from "lucide-react";


const Home = () => {
  return (
     <div className="overflow-x-hidden ">
     <Hero />
     <About />
     <Skills />
     <Project/>
     <Experience/>
     <ClientReview/>
   <Contact/>
    </div>
  );
};

export default Home;