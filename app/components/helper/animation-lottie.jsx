// "use client"

// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: '95%',
//     }
//   };

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;


"use client";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  // Ensure the component only renders on the client side
  if (typeof window === "undefined") {
    return null;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;