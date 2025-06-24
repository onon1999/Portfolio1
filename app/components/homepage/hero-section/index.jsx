// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

// function HeroSection() {
//   return (
//     <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
//       <Image
//         src="/hero.svg"
//         alt="Hero"
//         width={1572}
//         height={795}
//         className="absolute -top-[98px] -z-10"
//       />

//       <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
//         <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
//           <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
//             Hello, <br />
//             This is {' '}
//             <span className=" text-pink-500">{personalData.name}</span>
//             {` , I'm a Professional `}
//             <span className=" text-[#16f2b3]">{personalData.designation}</span>
//             .
//           </h1>

//           <div className="my-12 flex items-center gap-5">
//             <Link
//               href={personalData.github}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <BsGithub size={30} />
//             </Link>
//             <Link
//               href={personalData.linkedIn}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <BsLinkedin size={30} />
//             </Link>
//             {/* <Link
//               href={personalData.facebook}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <FaFacebook size={30} />
//             </Link> */}
//             <Link
//               href={personalData.leetcode}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <SiLeetcode size={30} />
//             </Link>
//             {/* <Link
//               href={personalData.twitter}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <FaTwitterSquare size={30} />
//             </Link> */}
//           </div>

//           <div className="flex items-center gap-3">
//             <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
//               <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
//                 <span>Contact me</span>
//                 <RiContactsFill size={16} />
//               </button>
//             </Link>

//             <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
//             >
//               <span>Get Resume</span>
//               <MdDownload size={16} />
//             </Link>
//           </div>

//         </div>
//         <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
//           <div className="flex flex-row">
//             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//             <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//           </div>
//           <div className="px-4 lg:px-8 py-5">
//             <div className="flex flex-row space-x-2">
//               <div className="h-3 w-3 rounded-full bg-red-400"></div>
//               <div className="h-3 w-3 rounded-full bg-orange-400"></div>
//               <div className="h-3 w-3 rounded-full bg-green-200"></div>
//             </div>
//           </div>
//           <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
//             <code className="font-mono text-xs md:text-sm lg:text-base">
//               <div className="blink">
//                 <span className="mr-2 text-pink-500">const</span>
//                 <span className="mr-2 text-white">coder</span>
//                 <span className="mr-2 text-pink-500">=</span>
//                 <span className="text-gray-400">{'{'}</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
//                 <span className="text-gray-400">{`'`}</span>
//                 <span className="text-amber-300">Rishabh</span>
//                 <span className="text-gray-400">{`',`}</span>
//               </div>
//               <div className="ml-4 lg:ml-8 mr-2">
//                 <span className=" text-white">skills:</span>
//                 <span className="text-gray-400">{`['`}</span>
//                 <span className="text-amber-300">React</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">NextJS</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Redux</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Express</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">NestJS</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">MySql</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">MongoDB</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Docker</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">AWS</span>
//                 <span className="text-gray-400">{"'],"}</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
//                 <span className="text-orange-400">true</span>
//                 <span className="text-gray-400">,</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
//                 <span className="text-orange-400">true</span>
//                 <span className="text-gray-400">,</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
//                 <span className="text-orange-400">true</span>
//                 <span className="text-gray-400">,</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
//                 <span className="text-orange-400">function</span>
//                 <span className="text-gray-400">{'() {'}</span>
//               </div>
//               <div>
//                 <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
//                 <span className="text-gray-400">{`(`}</span>
//               </div>
//               <div>
//                 <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                 <span className="mr-2 text-white">hardWorker</span>
//                 <span className="text-amber-300">&amp;&amp;</span>
//               </div>
//               <div>
//                 <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                 <span className="mr-2 text-white">problemSolver</span>
//                 <span className="text-amber-300">&amp;&amp;</span>
//               </div>
//               <div>
//                 <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                 <span className="mr-2 text-white">skills.length</span>
//                 <span className="mr-2 text-amber-300">&gt;=</span>
//                 <span className="text-orange-400">5</span>
//               </div>
//               <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
//               <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
//               <div><span className="text-gray-400">{`};`}</span></div>
//             </code>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// function HeroSection() {
//   return (
//     <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
//       <Image
//         src="/hero-ai.svg" // Consider using an AI-themed vector graphic
//         alt="AI Pattern"
//         width={1572}
//         height={795}
//         className="absolute -top-[98px] -z-10 opacity-50"
//       />

//       <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
//         <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
//           <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
//             Transforming Ideas with{' '}
//             <span className="text-cyan-400">Artificial Intelligence</span>
//             <br />
//             I'm <span className=" text-purple-400">{personalData.name}</span>
//             {`, `}
//             <span className=" text-[#16f2b3]">{personalData.designation}</span>
//           </h1>

//           <div className="my-12 flex items-center gap-5">
//             <Link
//               href={personalData.github}
//               target='_blank'
//               className="transition-all text-cyan-400 hover:scale-125 duration-300"
//             >
//               <BsGithub size={30} />
//             </Link>
//             <Link
//               href={personalData.linkedIn}
//               target='_blank'
//               className="transition-all text-cyan-400 hover:scale-125 duration-300"
//             >
//               <BsLinkedin size={30} />
//             </Link>
//             <Link
//               href={personalData.leetcode}
//               target='_blank'
//               className="transition-all text-cyan-400 hover:scale-125 duration-300"
//             >
//               <SiLeetcode size={30} />
//             </Link>
//           </div>

//           <div className="flex items-center gap-3">
//             <Link href="#contact" className="bg-gradient-to-r to-cyan-400 from-purple-600 p-[1px] rounded-full transition-all duration-300 hover:from-cyan-400 hover:to-purple-600">
//               <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
//                 <span>Collaborate</span>
//                 <RiContactsFill size={16} />
//               </button>
//             </Link>

//             <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" 
//               role="button" 
//               target="_blank" 
//               href={personalData.resume}
//             >
//               <span>View Credentials</span>
//               <MdDownload size={16} />
//             </Link>
//           </div>
//         </div>

//         {/* AI-Focused Code Terminal */}
//         <div className="order-1 lg:order-2 from-[#0d1224] border-[#2c6868] relative rounded-lg border bg-gradient-to-r to-[#0d3737]">
//           <div className="flex flex-row">
//             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-purple-600"></div>
//             <div className="h-[1px] w-full bg-gradient-to-r from-purple-600 to-transparent"></div>
//           </div>
//           <div className="px-4 lg:px-8 py-5">
//             <div className="flex flex-row space-x-2">
//               <div className="h-3 w-3 rounded-full bg-red-400"></div>
//               <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
//               <div className="h-3 w-3 rounded-full bg-green-400"></div>
//             </div>
//           </div>
//           <div className="overflow-hidden border-t-[2px] border-cyan-900 px-4 lg:px-8 py-4 lg:py-8">
//             <code className="font-mono text-xs md:text-sm lg:text-base">
//               <div className="blink">
//                 <span className="mr-2 text-purple-400">class</span>
//                 <span className="mr-2 text-white">AIEngineer</span>
//                 <span className="mr-2 text-purple-400">extends</span>
//                 <span className="text-cyan-400">Developer</span>
//                 <span className="text-gray-400"> {'{'}</span>
//               </div>

//               {/* Constructor */}
//               <div className="ml-4 lg:ml-8">
//                 <span className="text-white">constructor</span>
//                 <span className="text-gray-400">{'() {'}</span>
//               </div>
//               <div className="ml-8 lg:ml-16">
//                 <span className="text-white">this.name</span>
//                 <span className="mx-2 text-purple-400">=</span>
//                 <span className="text-cyan-300">'Rishabh'</span> {/* Change to your name if needed */}
//                 <span className="text-gray-400">;</span>
//               </div>
//               <div className="ml-8 lg:ml-16">
//                 <span className="text-white">this.specialties</span>
//                 <span className="mx-2 text-purple-400">=</span>
//                 <span className="text-gray-400">[</span>
//                 <span className="text-cyan-300">'NLP'</span>
//                 <span className="text-gray-400">, </span>
//                 <span className="text-cyan-300">'CV'</span>
//                 <span className="text-gray-400">, </span>
//                 <span className="text-cyan-300">'GenerativeAI'</span>
//                 <span className="text-gray-400">];</span>
//               </div>
//               <div className="ml-8 lg:ml-16">
//                 <span className="text-white">this.techStack</span>
//                 <span className="mx-2 text-purple-400">=</span>
//                 <span className="text-gray-400">[</span>
//                 <span className="text-cyan-300">'PyTorch'</span>
//                 <span className="text-gray-400">, </span>
//                 <span className="text-cyan-300">'TensorFlow'</span>
//                 <span className="text-gray-400">, </span>
//                 <span className="text-cyan-300">'Kubernetes'</span>
//                 <span className="text-gray-400">, </span>
//                 <span className="text-cyan-300">'AWS/Azure'</span>
//                 <span className="text-gray-400">, </span>
//                 <span className="text-cyan-300">'Docker'</span>
//                 <span className="text-gray-400">];</span>
//               </div>
//               <div className="ml-8 lg:ml-16">
//                 <span className="text-white">this.motto</span>
//                 <span className="mx-2 text-purple-400">=</span>
//                 <span className="text-cyan-300">'Innovation Unleashed'</span>
//                 <span className="text-gray-400">;</span>
//               </div>
//               <div className="ml-4 lg:ml-8 text-gray-400">{'}'}</div>

//               {/* Build Method */}
//               <div className="ml-4 lg:ml-8 mt-4">
//                 <span className="text-white">buildLLM</span>
//                 <span className="text-gray-400">{'() {'}</span>
//               </div>
//               <div className="ml-8 lg:ml-16">
//                 <span className="text-purple-400">console</span>
//                 <span className="text-gray-400">.</span>
//                 <span className="text-white">log</span>
//                 <span className="text-gray-400">{'( ) => '}</span>
//                 <span className="text-cyan-300">'Fine-tuning advanced language models...'</span>
//                 <span className="text-gray-400">;</span>
//               </div>
//               <div className="ml-4 lg:ml-8 text-gray-400">{'}'}</div>

//               {/* Deploy Method */}
//               <div className="ml-4 lg:ml-8 mt-4">
//                 <span className="text-white">deploy</span>
//                 <span className="text-gray-400">{'() {'}</span>
//               </div>
//               <div className="ml-8 lg:ml-16">
//                 <span className="text-purple-400">return</span>
//                 <span className="ml-2 text-cyan-300">'Production-Ready AI Solutions'</span>
//                 <span className="text-gray-400">;</span>
//               </div>
//               <div className="text-gray-400">{'  }'}</div>
//               <div className="text-gray-400">{'}'}</div>
//             </code>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


//////////// go beyond...........//


function HeroSection() {
  return (
      <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
        <Image
          src="/hero.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute -top-[98px] -z-10"
        />
  

      {/* Floating Glow Circles (decorative) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-16 h-32 w-32 rounded-full bg-purple-600 opacity-30 mix-blend-color-dodge filter blur-xl animate-ping-slow" />
        <div className="absolute right-1/4 bottom-16 h-32 w-32 rounded-full bg-cyan-400 opacity-30 mix-blend-color-dodge filter blur-xl animate-ping-slow animation-delay-2000" />
      </div>

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left: Intro Text & Buttons */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Transforming Ideas with{' '}
            <span className="text-cyan-400">Artificial Intelligence</span>
            <br />
            I'm <span className=" text-purple-400">{personalData.name}</span>
            {`, `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
          </h1>

          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-400 max-w-prose">
            From <span className="text-purple-200">cutting-edge machine learning</span> 
            to <span className="text-cyan-200">production-ready deployments</span>, 
            I blend innovation and engineering to craft 
            <span className="text-purple-100"> next-level AI solutions</span>.
          </p>

          {/* Social Icons */}
          <div className="my-8 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-cyan-400 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-cyan-400 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            {personalData.leetcode && (
              <Link
                href={personalData.leetcode}
                target="_blank"
                className="transition-all text-cyan-400 hover:scale-125 duration-300"
              >
                <SiLeetcode size={30} />
              </Link>
            )}
          </div>

          {/* Buttons: Contact & Resume */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-cyan-400 from-purple-600 p-[1px] rounded-full transition-all duration-300 hover:from-cyan-400 hover:to-purple-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Collaborate</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>View Credentials</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right: AI-Focused "Terminal" / Code Block */}
        <div className="order-1 lg:order-2 relative rounded-lg border bg-gradient-to-r from-[#0d1224] to-[#0d3737] border-[#2c6868] shadow-lg overflow-hidden">
          {/* Top Border Gradient */}
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-purple-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-purple-600 to-transparent"></div>
          </div>

          {/* "Traffic Lights" Bar */}
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>

          {/* Code Snippet */}
          <div className="overflow-hidden border-t-[2px] border-cyan-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed text-gray-200">
              <div className="mb-2">
                <span className="mr-2 text-purple-400">class</span>
                <span className="mr-2 text-white">AIEngineer</span>
                <span className="mr-2 text-purple-400">extends</span>
                <span className="text-cyan-400">Developer</span>
                <span className="text-gray-400"> {'{'}</span>
              </div>

              {/* Constructor */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">constructor</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div className="ml-8 lg:ml-16">
                <span className="text-white">this.name</span>
                <span className="mx-2 text-purple-400">=</span>
                <span className="text-cyan-300">'MAHIR'</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="ml-8 lg:ml-16">
                <span className="text-white">this.specialties</span>
                <span className="mx-2 text-purple-400">=</span>
                <span className="text-gray-400">[</span>
                <span className="text-cyan-300">'NLP'</span>
                <span className="text-gray-400">, </span>
                <span className="text-cyan-300">'CV'</span>
                <span className="text-gray-400">, </span>
                <span className="text-cyan-300">'GenerativeAI'</span>
                <span className="text-gray-400">];</span>
              </div>
              <div className="ml-8 lg:ml-16">
                <span className="text-white">this.techStack</span>
                <span className="mx-2 text-purple-400">=</span>
                <span className="text-gray-400">[</span>
                <span className="text-cyan-300">'PyTorch'</span>
                <span className="text-gray-400">, </span>
                <span className="text-cyan-300">'TensorFlow'</span>
                <span className="text-gray-400">, </span>
                <span className="text-cyan-300">'Microsft 365'</span>
                <span className="text-gray-400">, </span>
                <span className="text-cyan-300">'AWS/Azure'</span>
                <span className="text-gray-400">, </span>
                <span className="text-cyan-300">'Docker'</span>
                <span className="text-gray-400">];</span>
              </div>
              <div className="ml-8 lg:ml-16">
                <span className="text-white">this.motto</span>
                <span className="mx-2 text-purple-400">=</span>
                <span className="text-cyan-300">'Innovation Unleashed'</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="ml-4 lg:ml-8 text-gray-400">{'}'}</div>

              {/* Build Method */}
              <div className="ml-4 lg:ml-8 mt-4">
                <span className="text-white">buildLLM</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div className="ml-8 lg:ml-16">
                <span className="text-purple-400">console</span>
                <span className="text-gray-400">.</span>
                <span className="text-white">log</span>
                <span className="text-gray-400">{'( ) => '}</span>
                <span className="text-cyan-300">'Fine-tuning advanced language models...'</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="ml-4 lg:ml-8 text-gray-400">{'}'}</div>

              {/* Deploy Method */}
              <div className="ml-4 lg:ml-8 mt-4">
                <span className="text-white">deploy</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div className="ml-8 lg:ml-16">
                <span className="text-purple-400">return</span>
                <span className="ml-2 text-cyan-300">'Production-Ready AI Solutions'</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="text-gray-400">{'  }'}</div>
              <div className="text-gray-400">{'}'}</div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;