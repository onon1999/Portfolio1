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
  title: "Portfolio of Mahir Tagwar - AI/ML Engineer",
  description:
    "I'm an AI/ML Engineer with a Bachelor's in Computer Science from East West University, currently driving innovation at Bizz N Tek IT LTD. With hands-on experience in building scalable AI systems, I specialize in natural language processing, generative AI, and data-driven automation. My toolkit includes Python, TensorFlow, PyTorch, and cloud platforms like AWS and Microsoft Copilot Studio. From developing hybrid news recommender systems to automating medical insights and chatbot optimization, I thrive in full-cycle AI development — from research to real-world deployment. I'm passionate about ethical, impactful AI and constantly exploring the edge of what's possible in machine learning and intelligent systems.",
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
