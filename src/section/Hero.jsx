
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import HeroImg from "../assets/images/Heroimg/web1.jpg";
import HeroImg2 from "../assets/images/Heroimg/web2.jpg";
import HeroImg3 from "../assets/images/Heroimg/web3.jpg";
import HeroImg4 from "../assets/images/Heroimg/web4.jpg";
import AboutPage from "../pages/About.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import ContactPage from "../pages/Contact.jsx";
import { ReactTyped } from "react-typed";



export default function Hero() {
    const images=[HeroImg,HeroImg2, HeroImg3, HeroImg4]

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // change image every 4 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <>

            <section
                className="h-screen flex flex-col justify-center items-center text-white px-6 text-center relative"
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundSize: "cover",        // Cover the entire section
                    backgroundPosition: "center",   // Center the image
                    backgroundRepeat: "no-repeat",  // Prevent repetition
                }}
            >
                {/* Optional overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl">
                   
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Hi, I’m <span className="text-yellow-400">Chamith</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                     <ReactTyped
    strings={[
      "I’m a Software Engineer specializing in building modern web applications.",
      "I build full-stack apps with React & Spring bootFirebase.",
      
    ]}
    typeSpeed={70}
    
    loop
  />
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            to="/projects"
                            className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-blue-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
                        >
                            View Projects <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-500 transition"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>
            <AboutPage/>
            <Skills/>
            <Experience/>
            <ContactPage/>

        </>


    );
}