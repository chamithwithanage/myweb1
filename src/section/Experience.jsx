import React from "react";

export default function  Experience(){
    return(

        <>
            {/* Experience / Timeline Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl  text-white font-bold mb-10 text-center">Experience</h2>

                    <div className="space-y-10">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="md:w-1/3 text-white  font-semibold">2020 - Present</div>
                            <div className="md:w-2/3">
                                <h3 className="font-bold text-xl text-white">Front-End Developer </h3>
                                <p className="text-white ">Developed responsive web applications using React and Tailwind CSS.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="md:w-1/3 text-white font-semibold">2022 - 2025</div>
                            <div className="md:w-2/3">
                                <h3 className="font-bold text-xl text-white">Spring boot Developer</h3>
                                <p className="text-white">Created user-centered designs and prototypes for web projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    );
}