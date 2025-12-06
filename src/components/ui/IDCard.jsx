import React from 'react';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import centerImg from '../../assets/center_image.png';

export default function IDCard({ className = '' }) {
    return (
        <div className={`w-full flex justify-center items-center py-10 ${className}`}>
            {/* Card Container */}
            <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 w-full max-w-[500px] overflow-hidden">

                {/* 1. Header: Profile & Status */}
                <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                            <img
                                src={centerImg}
                                alt="Raya Surya"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-900 leading-tight">Raya Surya</h3>
                            <p className="text-gray-500 text-sm font-medium">Product Designer</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wide">Open to Work</span>
                        </div>
                    </div>
                </div>

                {/* 2. Main Content (Pitch) */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                        I create digital <br />
                        products that <br />
                        <span className="text-gray-400">feel human.</span>
                    </h2>

                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                        Blending <span className="font-semibold text-gray-900">Psychology</span>, <span className="font-semibold text-gray-900">AI</span>, and <span className="font-semibold text-gray-900">Storytelling</span> to design intuitive interfaces that drive growth.
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {['UX Research', 'Interaction Design', 'Generative AI', 'Motion'].map((skill) => (
                            <span key={skill} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-semibold rounded-lg border border-gray-100">
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <a href="mailto:raya.work.ux@gmail.com" className="flex-1 bg-black text-white font-medium py-3 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-black/20 text-sm">
                            <span>Get in Touch</span>
                            <ArrowUpRight size={16} />
                        </a>
                        <button className="flex-1 bg-gray-50 text-gray-900 font-medium py-3 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all border border-gray-200 text-sm">
                            <span>View Work</span>
                        </button>
                    </div>
                </div>

                {/* 3. Footer */}
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-medium">
                    <div className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        <span>Based in <span className="text-gray-900">India</span></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-green-500" />
                        <span>Available Worldwide</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
