import React from "react";
import pimage1 from "../assets/images/pimage/chamith1.png"
import Projects from "./Projects.jsx";

export default function AboutPage() {
    return (
        <div className="font-sans ">

            {/* Hero / Page Title */}
            <section className="h-64 md:h-60 bg-gradient-to-r bg-gray-900  flex items-center justify-center text-center">
                <div>
                    <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-white/80 text-lg md:text-xl">
                        Full Stack Developer & Designer
                    </p>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-20 bg-gray-900 ">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 ">
                    <img
                        src={pimage1}
                        alt="Chamith"
                        className="w-50 md:w-80  shadow-lg rounded-full "
                    />
                    <div>
                        <p className="text-white text-lg leading-relaxed">
                            Hello! My name is <span className="font-semibold">Chamith Miuran</span>.
                            I am a passionate FullStack  developer currently following the
                            <span className="font-semibold"> Higher Diploma in Software Engineering</span> at
                            <span className="font-semibold"> NIBM</span>.
                            I enjoy building modern web applications and continuously improving my programming skills.
                            My main interests include front-end development using React and Angular,
                            as well as backend development with Spring Boot.
                            I am always eager to learn new technologies and create responsive,
                            user-friendly web applications.
                        </p>


                        <a
                            href="/cv.pdf"
                            download
                            className="px-4 py-2  text-white rounded-lg hover:bg-teal-200 mt-16 bg-teal-400 rounded-xl"
                        >
                            ⬇️ Download CV
                        </a>



                    </div>
                </div>

            </section>






        </div>
    );
}