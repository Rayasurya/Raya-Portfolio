import React from 'react';
import { MapPin, ArrowUpRight, Star, Globe, Instagram, Twitter } from 'lucide-react';

const IDCard = () => {
    return (
        <div className="w-full flex justify-center mt-32 mb-16 px-4 font-['Inter',sans-serif]">
            {/* Lanyard Strap & Clip */}
            <div className="relative w-full max-w-[420px]">
                {/* Blue Strap */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#2563EB] z-0 rounded-b-2xl opacity-20 blur-xl"></div> {/* Glow effect */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-12 h-32 bg-[#2563EB] z-0"></div>

                {/* Black Clip Mechanism */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 z-10 flex flex-col items-center">
                    <div className="w-16 h-12 bg-[#111] rounded-lg shadow-lg relative flex items-center justify-center">
                        <div className="w-10 h-1.5 bg-[#333] rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 bg-white/90 backdrop-blur rounded-full -mt-4 shadow-md border border-gray-100 z-20"></div>
                </div>

                {/* Card Container */}
                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 z-20 overflow-hidden">

                    {/* Top Progress Bar */}
                    <div className="flex gap-2 mb-10">
                        <div className="h-1.5 w-1/3 bg-[#86EFAC] rounded-full"></div> {/* Green */}
                        <div className="h-1.5 w-1/3 bg-[#86EFAC] rounded-full"></div> {/* Green */}
                        <div className="h-1.5 w-1/3 bg-gray-100 rounded-full"></div> {/* Gray */}
                    </div>

                    {/* Header: Profile & Status */}
                    <div className="flex justify-between items-start mb-10">
                        <div className="flex gap-4 items-center">
                            <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden grayscale">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 leading-tight">Andrew Parker</h3>
                                <p className="text-gray-500 text-sm">Web-designer, developer</p>
                                <div className="flex gap-3 mt-2 text-gray-400">
                                    <Twitter size={14} className="hover:text-black cursor-pointer transition-colors" />
                                    <Instagram size={14} className="hover:text-black cursor-pointer transition-colors" />
                                    <Globe size={14} className="hover:text-black cursor-pointer transition-colors" />
                                </div>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="flex flex-col items-end">
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#86EFAC]"></span>
                                    </span>
                                    <span className="text-xs font-bold text-gray-900">2 open slots</span>
                                </div>
                                <span className="text-[10px] text-gray-500 font-medium">for December</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="mb-10">
                        <h2 className="text-[2.75rem] font-bold text-gray-900 leading-[0.95] mb-6 tracking-tight">
                            I create<br />
                            websites that<br />
                            work as hard<br />
                            as you do
                        </h2>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex text-gray-900 gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <span className="text-xs text-gray-900 font-bold bg-gray-100 px-2 py-1 rounded-full">50+ customers</span>
                        </div>

                        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-[90%]">
                            I build designs that solve problems, inspire action, and drive success.
                        </p>

                        <div className="flex gap-3">
                            <a href="#contact" className="flex-1 bg-[#2563EB] text-white font-medium py-3 px-2 rounded-full flex items-center justify-between pl-6 pr-2 hover:bg-blue-700 transition-all group">
                                <span>Get started</span>
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2563EB]">
                                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </a>
                            <a href="#work" className="flex-1 bg-[#F3F4F6] text-gray-900 font-medium py-3 px-6 rounded-full text-center hover:bg-gray-200 transition-all flex items-center justify-center">
                                My work
                            </a>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-[11px] text-gray-400 font-medium">
                        <div className="flex items-center gap-1.5">
                            <MapPin size={12} />
                            <span>Located in <span className="text-gray-900">London</span>, available worldwide.</span>
                        </div>
                        <a href="#" className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors">
                            <span>Templifica</span>
                            <ArrowUpRight size={10} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default IDCard;
