export default function Projects() {
    const projects = [
        {
            title: "Travel Website",
            description: "A responsive travel website built with React and Tailwind CSS.",
            image: "src/assets/images/project/img1.jpg",
            github: "https://github.com/chamithwithanage/tourism-website1",
            demo: "#",
        },
        {
            title: "E-Commerce App",
            description: "Online shopping web application with React and API integration.",
            image: "src/assets/images/project/img2.jpg",
            github: "#",
            demo: "#",
        },
        {
            title: "Portfolio Website",
            description: "Personal developer portfolio with modern UI design.",
            image: "src/assets/images/project/img3.jpg",
            github: "#",
            demo: "#",
        },
    ];

    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    My Projects
                </h2>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
                        >

                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}