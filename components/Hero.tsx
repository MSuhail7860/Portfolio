"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 bg-slate-950 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Hi, I&apos;m <span className="text-blue-400">{portfolioData.personalInfo.name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-400 mb-10">
                        {portfolioData.personalInfo.role}
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/#projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-colors border border-slate-700"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
