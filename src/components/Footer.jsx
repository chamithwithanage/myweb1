import { Linkedin, Instagram, Github, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                {/* Name */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">Chamith Miuran</h2>
                    <p className="text-gray-400">
                        FullStack Developer specializing in React & Tailwind CSS.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Contact</h3>

                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Mail size={18}/>
                        <span>chamithmiuran@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400">
                        <Phone size={18}/>
                        <span>+94 70 504 7261</span>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Follow Me</h3>

                    <div className="flex gap-4">
                        <a href="#" className="hover:text-blue-500">
                            <Linkedin />
                        </a>

                        <a href="#" className="hover:text-pink-500">
                            <Instagram />
                        </a>

                        <a href="#" className="hover:text-gray-400">
                            <Github />
                        </a>

                        <a href="#" className="hover:text-blue-600">
                            <Facebook />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © 2026 Chamith Miuran. All rights reserved.
            </div>
        </footer>
    );
}