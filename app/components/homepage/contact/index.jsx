// // @flow strict
// import { personalData } from '@/utils/data/personal-data';
// import Link from 'next/link';
// import { BiLogoLinkedin } from "react-icons/bi";
// import { CiLocationOn } from "react-icons/ci";
// import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoGithub, IoMdCall } from "react-icons/io";
// import { MdAlternateEmail } from "react-icons/md";
// import ContactForm from './contact-form';

// function ContactSection() {
//   return (
//     <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
//       <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
//         <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
//           CONTACT
//         </span>
//         <span className="h-36 w-[2px] bg-[#1a1443]"></span>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//         <ContactForm />
//         <div className="lg:w-3/4 ">
//           <div className="flex flex-col gap-5 lg:gap-9">
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <MdAlternateEmail
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>{personalData.email}</span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <IoMdCall
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>
//                 {personalData.phone}
//               </span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <CiLocationOn
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>
//                 {personalData.address}
//               </span>
//             </p>
//           </div>
//           <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
//             <Link target="_blank" href={personalData.github}>
//               <IoLogoGithub
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalData.linkedIn}>
//               <BiLogoLinkedin
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             {/* <Link target="_blank" href={personalData.twitter}>
//               <FaXTwitter
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link> */}
//             {/* <Link target="_blank" href={personalData.stackOverflow}>
//               <FaStackOverflow
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               /> */}
//             {/* </Link> */}
//             {/* <Link target="_blank" href={personalData.facebook}>
//               <FaFacebook
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;










////////////////////////////////////////////////////////////////////


// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub, IoMdCall } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative my-16 text-white px-5 lg:px-0"
    >
      {/* 
        Decorative Background with subtle gradient animations.
        You can replace or remove these as needed.
      */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-2/3 h-2/3 bg-gradient-to-br from-purple-500 to-blue-900 rounded-full mix-blend-screen blur-3xl opacity-30 -top-20 -left-20 animate-pulse" />
        <div className="absolute w-2/3 h-2/3 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full mix-blend-screen blur-3xl opacity-30 -bottom-20 -right-20 animate-pulse animation-delay-2000" />
      </div>

      {/* Section Title */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-5">
          Get in touch
        </h2>
        <p className="text-sm lg:text-base text-gray-300 max-w-2xl mx-auto">
          Have a question, or want to collaborate on AI &amp; futuristic ideas?
          Drop me a message and let's connect.
        </p>
      </div>

      {/* Grid Container for Form + Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
        {/* LEFT: Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
          <ContactForm />
        </div>

        {/* RIGHT: Contact / Socials */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Info Items */}
          <div className="grid grid-cols-1 gap-6">
            <ContactInfoItem
              Icon={MdAlternateEmail}
              label={personalData.email}
            />
            <ContactInfoItem
              Icon={IoMdCall}
              label={personalData.phone}
            />
            <ContactInfoItem
              Icon={CiLocationOn}
              label={personalData.address}
            />
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-5 lg:gap-8">
            <SocialIcon href={personalData.github} Icon={IoLogoGithub} />
            <SocialIcon href={personalData.linkedIn} Icon={BiLogoLinkedin} />
            {/* Uncomment or add more as desired */}
            {/* 
            <SocialIcon href={personalData.twitter} Icon={FaXTwitter} />
            <SocialIcon href={personalData.stackOverflow} Icon={FaStackOverflow} />
            <SocialIcon href={personalData.facebook} Icon={FaFacebook} />
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * A small helper component for consistent styling of each contact info row.
 */
function ContactInfoItem({ Icon, label = '' }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-white/20 p-3 rounded-xl hover:bg-gradient-to-br from-cyan-300 to-cyan-400 hover:scale-110 transition-transform duration-300 cursor-pointer">
        <Icon className="text-gray-800" size={30} />
      </div>
      <span className="text-sm md:text-base">{label}</span>
    </div>
  );
}

/**
 * A small helper component for consistent styling of social icons.
 */
function SocialIcon({ href = '#', Icon }) {
  return (
    <Link
      target="_blank"
      href={href}
      className="bg-white/20 p-3 rounded-xl hover:bg-gradient-to-br from-pink-400 to-pink-600 hover:scale-110 transition-transform duration-300 cursor-pointer"
    >
      <Icon className="text-gray-800" size={28} />
    </Link>
  );
}
