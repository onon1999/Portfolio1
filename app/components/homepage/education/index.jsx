// @flow strict
// import { educations } from "@/utils/data/educations";
// import Image from "next/image";
// import { BsPersonWorkspace } from "react-icons/bs";
// import lottieFile from '../../../assets/lottie/study.json';
// import AnimationLottie from "../../helper/animation-lottie";
// import GlowCard from "../../helper/glow-card";

// function Education() {
//   return (
//     <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
//       <Image
//         src="/section.svg"
//         alt="Hero"
//         width={1572}
//         height={795}
//         className="absolute top-0 -z-10"
//       />
//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
//         </div>
//       </div>

//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex  items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
//             Educations
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
//           <div className="flex justify-center items-start">
//             <div className="w-3/4 h-3/4">
//               <AnimationLottie animationPath={lottieFile} />
//             </div>
//           </div>

//           <div>
//             <div className="flex flex-col gap-6">
//               {
//                 educations.map(education => (
//                   <GlowCard key={education.id} identifier={`education-${education.id}`}>
//                     <div className="p-3 relative text-white">
//                       <Image
//                         src="/blur-23.svg"
//                         alt="Hero"
//                         width={1080}
//                         height={200}
//                         className="absolute bottom-0 opacity-80"
//                       />
//                       <div className="flex justify-center">
//                         <p className="text-xs sm:text-sm text-[#16f2b3]">
//                           {education.duration}
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-x-8 px-3 py-5">
//                         <div className="text-violet-500  transition-all duration-300 hover:scale-125">
//                           <BsPersonWorkspace size={36} />
//                         </div>
//                         <div>
//                           <p className="text-base sm:text-xl mb-2 font-medium uppercase">
//                             {education.title}
//                           </p>
//                           <p className="text-sm sm:text-base">{education.institution}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </GlowCard>
//                 ))
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;


// ///////////////// Adding new Info////////////////..

import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { FaGraduationCap, FaMicrochip, FaBrain } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-cyan-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-4/5">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full shadow-[0_0_12px] shadow-cyan-400" />
        </div>
      </div>

      <div className="flex justify-center my-8 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-600"></span>
          <div className="bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text flex items-center gap-2">
            <FaGraduationCap className="text-3xl" />
            <span className="text-2xl font-bold">Academic Journey</span>
          </div>
          <span className="w-12 h-[2px] bg-gradient-to-r from-purple-600 to-cyan-400"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start relative">
            <div className="w-full h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <p className="text-sm text-cyan-300">Continuous Learning in AI</p>
              <div className="flex justify-center gap-2 mt-2">
                <FaMicrochip className="text-cyan-400 animate-pulse" />
                <FaBrain className="text-purple-400 animate-pulse delay-100" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {educations.map((education) => (
              <GlowCard 
                key={education.id} 
                identifier={`education-${education.id}`}
                className="hover:scale-[1.015] transition-transform duration-300"
              >
                <div className="relative p-6 bg-[#0d1224]/80 backdrop-blur-sm">
                  <div className="absolute -top-3 -right-3">
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center">
                      {education.id === 1 ? (
                        <Image 
                          // src="./app/components/education/favicon-nus.png" 
                          src="/favicon-nus32.png" 
                          alt="NUS" 
                          width={32} 
                          height={32} 
                          className="grayscale hover:grayscale-0 transition-all"
                        />
                      ) : (
                        <Image 
                          // src="./favicon-gbu.png" 
                          src="/favicon-gbu32.png" 
                          alt="GBU" 
                          width={32} 
                          height={32} 
                          className="grayscale hover:grayscale-0 transition-all"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="text-cyan-400 mt-2">
                      <FaGraduationCap size={28} />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-bold text-cyan-300 mb-1">
                        {education.title}
                      </p>
                      <p className="text-sm text-purple-300 mb-2">
                        {education.institution}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-cyan-100">
                        <span className="px-2 py-1 bg-cyan-900/30 rounded">
                          {education.duration}
                        </span>
                        {education.gpa && (
                          <span className="px-2 py-1 bg-purple-900/30 rounded">
                            GPA: {education.gpa}
                          </span>
                        )}
                      </div>
                      {education.courses && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {education.courses.map((course) => (
                            <span 
                              key={course}
                              className="px-2 py-1 text-xs bg-cyan-900/20 rounded-full border border-cyan-400/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;