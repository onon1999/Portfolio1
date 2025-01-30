import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Rishabh - AI/ML Engineer",
  description:
    "I'm an AI/ML Engineer currently pursuing a Master's in Computer Science (AI) at NUS. With hands-on experience in building intelligent systems, I specialize in computer vision, NLP, and generative AI. My technical arsenal includes Python, PyTorch, Kubernetes, and cloud platforms. I thrive on solving real-world problems through projects like 3D chatbot avatars, medical QA automation, and AI-powered decor visualization. Passionate about full-cycle development from research to deployment, I'm always eager to explore cutting-edge technologies and contribute to impactful AI solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
