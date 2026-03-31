import React from "react";

export default function Skills() {
    return (

        <>
            {/* Skills Section */}
            <section className="py-20 bg-gray-900 ">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center mb-12">
                        My Skills
                    </h2>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Java */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2">Java</h3>
                            <p className="text-gray-600">
                                Object-oriented programming and backend development.
                            </p>
                        </div>

                        {/* C# */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2">C#</h3>
                            <p className="bg-white ">
                                Application development using .NET framework.
                            </p>
                        </div>

                        {/* React */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2">React</h3>
                            <p className="bg-white ">
                                Building modern responsive front-end web applications.
                            </p>
                        </div>

                        {/* Angular */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2">Angular</h3>
                            <p className="bg-white ">
                                Creating dynamic and scalable web applications.
                            </p>
                        </div>

                        {/* Spring Boot */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2">Spring Boot</h3>
                            <p className="bg-white ">
                                Backend development and REST API creation.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}