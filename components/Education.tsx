"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My academic background and qualifications.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500" />
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                    <GraduationCap className="text-blue-400 flex-shrink-0 ml-4" size={24} />
                                </div>
                                <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                                <div className="flex justify-between items-center text-sm text-slate-400">
                                    <span>{edu.year}</span>
                                    {edu.details && <span>{edu.details}</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
