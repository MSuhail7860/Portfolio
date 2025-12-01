import { Github, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a
                        href={portfolioData.personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={`mailto:${portfolioData.personalInfo.email}`}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
