// @flow strict

// import { personalData } from "@/utils/data/personal-data";
// import Image from "next/image";


// function AboutSection() {
//   return (
//     <div id="about" className="my-12 lg:my-16 relative">
//       <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
//         <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
//           ABOUT ME
//         </span>
//         <span className="h-36 w-[2px] bg-[#1a1443]"></span>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
//         <div className="order-2 lg:order-1">
//           <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
//             Who I am?
//           </p>
//           <p className="text-gray-200 text-sm lg:text-lg">
//             {personalData.description}
//           </p>
//         </div>
//         <div className="flex justify-center order-1 lg:order-2">
//           <Image
//             src={personalData.profile}
//             width={280}
//             height={280}
//             alt="RISHABH"
//             className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;


/////////////// adding the new about///////


import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { FaBrain, FaRobot, FaCode, FaCloud } from "react-icons/fa";
import { SiAmazonaws, SiGooglecloudcomposer, SiAzuredevops, SiDocker } from "react-icons/si";
import Link from 'next/link';

import { BsGithub, BsLinkedin } from "react-icons/bs";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-24 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 w-fit text-transparent bg-clip-text rotate-90 p-2 px-5 text-xl rounded-md font-bold">
          AI INNOVATOR
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600"></span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-48 h-48 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="order-2 lg:order-1 z-10">
          <p className="font-medium mb-5 text-cyan-400 text-xl uppercase flex items-center gap-2">
            <FaBrain className="text-2xl" />
            <span>Who AM I?</span>
          </p>
          
          <div className="space-y-4 text-gray-300">
            <p className="text-lg border-l-4 border-cyan-400 pl-4 italic">
              "Transforming algorithms into impactful solutions"
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaRobot className="text-cyan-400" />
                <span className="font-semibold">Specializations:</span>
                <div className="flex gap-2 ml-2">
                  <span className="px-3 py-1 bg-cyan-900/30 rounded-full text-sm">Computer Vision</span>
                  <span className="px-3 py-1 bg-purple-900/30 rounded-full text-sm">NLP Systems</span>
                  <span className="px-3 py-1 bg-cyan-900/30 rounded-full text-sm">Generative AI</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaCloud className="text-purple-400" />
                <span className="font-semibold">Cloud Native:</span>
                <div className="flex gap-2 ml-2">
                  <SiAmazonaws className="text-2xl text-cyan-400" />
                  <SiGooglecloudcomposer className="text-2xl text-purple-400" />
                  <SiAzuredevops className="text-2xl text-cyan-400" />
                  <SiDocker className="text-2xl text-cyan-400" />
                </div>
              </div>
            </div>

            <p className="text-base leading-relaxed">
            "I'm an AI/ML Engineer currently pursuing a Master's in Computer Science (AI) at NUS. With hands-on experience in building intelligent systems, I specialize in computer vision, NLP, and generative AI. My technical arsenal includes Python, PyTorch, Kubernetes, and cloud platforms. I thrive on solving real-world problems through projects like 3D chatbot avatars, medical QA automation, and AI-powered decor visualization. Passionate about full-cycle development from research to deployment, I'm always eager to explore cutting-edge technologies and contribute to impactful AI solutions."
            </p>
            {/* <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-cyan-400 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link> */}
{/* 
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full hover:scale-105 transition-transform">
              Explore Projects
              
              </button>
              
              {/* <button className="px-6 py-2 border border-cyan-400 rounded-full hover:bg-cyan-400/10 transition-colors">
                Explore Projects
              </button> */}
            {/* </div> */} 
            <div className="flex flex-wrap gap-4 mt-6">
  <Link
    href="#projects"  // Anchor link to projects section
    className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full hover:scale-105 transition-transform"
  >
    Explore Projects
  </Link>
  
  {/* If you want to link directly to GitHub instead */}
  <Link
    href={personalData.github}
    target="_blank"
    className="px-6 py-2 border border-cyan-400 rounded-full hover:bg-cyan-400/10 transition-colors flex items-center gap-2"
  >
    <BsGithub />
    <span>View GitHub</span>
  </Link>
</div>
            
          </div>
        </div>

        <div className="flex justify-center order-1 lg:order-2 z-10">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <Image
              src={personalData.profile}
              width={360}
              height={360}
              alt="RISHABH"
              className="rounded-2xl transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer border-4 border-cyan-400/20"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <div className="flex justify-center space-x-4">
                <div className="flex items-center gap-1">
                  <FaCode className="text-cyan-400" />
                  <span className="text-sm">10k+ Lines</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCloud className="text-purple-400" />
                  <span className="text-sm">50+ Deployments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;