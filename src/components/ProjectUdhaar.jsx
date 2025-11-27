import React, { useEffect } from 'react';
import { ArrowLeft, Check, Smartphone, WifiOff, ShieldCheck, Users, TrendingUp } from 'lucide-react';
import AudioPlayer from './ui/AudioPlayer';

import udhaarPaying from '../assets/udhaar_paying.png';
import udhaarNoInternet from '../assets/udhaar_no_internet.png';
import udhaarSuccess from '../assets/udhaar_success.png';

const ProjectUdhaar = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen w-full relative z-10 pb-32">
            {/* Navigation */}
            <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none flex justify-between items-center">
                <button
                    onClick={onBack}
                    className="pointer-events-auto bg-white/90 backdrop-blur-md border border-gray-200 text-gray-900 px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all font-medium text-sm shadow-sm"
                >
                    <ArrowLeft size={16} />
                    Back
                </button>
            </div>

            {/* Hero Section - Centered & Editorial */}
            <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-bold tracking-wider mb-8 border border-orange-100">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    FINTECH • UX STRATEGY
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                    Designing Trust When the <br className="hidden md:block" />
                    <span className="text-[#E67E22]">Internet Fails.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Bridging the "Connectivity Gap" for India's 60M+ Offline Merchants with a sensory-first payment protocol.
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-100 py-8 max-w-4xl mx-auto text-left md:text-center">
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Role</div>
                        <div className="font-medium text-gray-900">Product Designer</div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Timeline</div>
                        <div className="font-medium text-gray-900">4 Weeks</div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Status</div>
                        <div className="font-medium text-gray-900">Concept Project</div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Focus</div>
                        <div className="font-medium text-gray-900">Offline Protocols</div>
                    </div>
                </div>
            </header>

            {/* Hero Image - Wide & Impactful */}
            <div className="px-6 max-w-6xl mx-auto mb-32">
                <div className="bg-gray-100 rounded-3xl overflow-hidden relative shadow-sm p-8 md:p-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

                    {/* Image Composition */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        {/* 1. Paying Screen (Left, slightly back) */}
                        <div className="w-64 md:w-72 transform md:translate-y-12 md:-rotate-6 transition-transform hover:z-20 hover:scale-105 duration-500">
                            <img
                                src={udhaarPaying}
                                alt="Payment Screen"
                                className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]"
                            />
                        </div>

                        {/* 2. No Internet Modal (Center, prominent) */}
                        <div className="w-64 md:w-72 z-10 transform md:-translate-y-4 transition-transform hover:scale-105 duration-500">
                            <img
                                src={udhaarNoInternet}
                                alt="No Internet Modal"
                                className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]"
                            />
                        </div>

                        {/* 3. Success Screen (Right, slightly back) */}
                        <div className="w-64 md:w-72 transform md:translate-y-12 md:rotate-6 transition-transform hover:z-20 hover:scale-105 duration-500">
                            <img
                                src={udhaarSuccess}
                                alt="Orange Success Screen"
                                className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]"
                            />
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-8 italic">
                    The "Orange Screen" - A sensory confirmation of offline payment success.
                </p>
            </div>

            {/* Content Container - Narrow for readability */}
            <div className="max-w-3xl mx-auto px-6">

                {/* 2. The Context */}
                <section className="mb-32">
                    <h2 className="text-sm font-bold text-[#E67E22] uppercase tracking-widest mb-4">01 — The Context</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The "Bharat" Problem</h3>

                    <div className="prose prose-lg prose-gray text-gray-600 leading-relaxed mb-12">
                        <p className="mb-6">
                            In India, UPI is the backbone of commerce, processing over 10 billion transactions a month. However, network failure rates at Point of Sale (POS) in crowded areas (markets, basements, rural towns) remain a major friction point.
                        </p>
                        <p>
                            When a payment fails at a busy counter, it isn't just a technical error—it is <span className="text-gray-900 font-semibold bg-orange-100 px-1">Social Embarrassment</span>. The user feels like a thief, the queue behind them gets angry, and the shopkeeper loses time.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 md:p-10 my-12">
                        <h4 className="text-xl font-bold mb-6">The Insight</h4>
                        <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-8 leading-tight">
                            "We don't need 'Real-Time' payments. We need 'Real-Time' Trust."
                        </blockquote>
                        <AudioPlayer
                            title="Merchant Interview • Ramesh, Bangalore"
                            src="/src/assets/merchant_interview.m4a"
                        />

                        <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Transcript Summary</div>
                            <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                                <p className="font-semibold text-gray-700">Interviewer: "Brother, why isn't the internet working properly here lately?"</p>

                                <p><span className="font-semibold text-gray-700">Merchant:</span> "Since Vinayaka Chavithi... from September 1st until now, the Jio SIM hasn't worked here. I got calls from Customer Care about 10 times asking 'When will you subscribe to the 3-month plan?' but when I tell them that here in Marathahalli, there is absolutely no internet, calls are breaking, and the voice isn't clear... they just say 'Okay, we will solve it, which area are you in?'"</p>

                                <p>"I told them 'Marathahalli, Chowdeshwari Temple Street road'... I must have told about 10 people. After that, no one called back."</p>

                                <p>"Since the customers coming to the shop don't have internet either, I switched to Airtel, recharged it, and I am connecting them to WiFi... turning on my hotspot and providing them internet. So, it is difficult for me too."</p>

                                <p>"Customers aren't coming properly because of this. Saying 'If we go there, the net won't work'... the number of customers has decreased because of this. That is our trouble."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. The Strategy */}
                <section className="mb-32">
                    <h2 className="text-sm font-bold text-[#E67E22] uppercase tracking-widest mb-4">02 — The Strategy</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Defining the Logic</h3>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mt-1">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">The "Relationship Score"</h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We cannot offer offline credit to everyone. I designed an eligibility algorithm that runs locally on the device to prevent fraud.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Recency &gt; 5 txns</span>
                                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Device Trust &gt; 6mo</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mt-1">
                                <Users size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">The "One-Way" Pivot</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Observation showed shopkeepers are too busy during peak hours to touch a phone. I pivoted from a two-way handshake to a <span className="font-semibold text-gray-900">Sensory Verification Model</span> (Visual + Audio) that requires zero merchant action.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 4. The Solution - Wide Section */}
            <section className="bg-gray-50 py-32 mb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-sm font-bold text-[#E67E22] uppercase tracking-widest mb-4">03 — The Solution</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">The User Journey</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Step 1 */}
                        <div className="group">
                            <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-shadow duration-300 mb-8 border border-gray-100">
                                <div className="aspect-[9/16] bg-gray-100 rounded-[3.5rem] overflow-hidden relative flex items-center justify-center p-4">
                                    <img
                                        src={udhaarPaying}
                                        alt="Paying Screen"
                                        className="w-full h-full object-contain drop-shadow-lg"
                                    />
                                </div>
                            </div>
                            <h4 className="text-lg font-bold mb-2">1. The Initiation</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">User initiates the payment of ₹200 normally, but the network is unstable.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="group">
                            <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-shadow duration-300 mb-8 border border-gray-100">
                                <div className="aspect-[9/16] bg-gray-100 rounded-[3.5rem] overflow-hidden relative flex items-center justify-center p-4">
                                    <img
                                        src={udhaarNoInternet}
                                        alt="No Internet Screen"
                                        className="w-full h-full object-contain drop-shadow-lg"
                                    />
                                </div>
                            </div>
                            <h4 className="text-lg font-bold mb-2">2. The Intervention</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">System detects failure and instantly prompts the "Pay Offline" option.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="group">
                            <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-shadow duration-300 mb-8 border border-gray-100">
                                <div className="aspect-[9/16] bg-gray-100 rounded-[3.5rem] overflow-hidden relative flex items-center justify-center p-4">
                                    <img
                                        src={udhaarSuccess}
                                        alt="Success Screen"
                                        className="w-full h-full object-contain drop-shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mb-2">
                                <h4 className="text-lg font-bold">3. The Proof</h4>
                                <button
                                    onClick={() => {
                                        const audio = new Audio('/src/assets/success_sound.mp3');
                                        audio.play().catch(e => alert("Please upload 'success_sound.mp3' to assets folder first!"));
                                    }}
                                    className="w-full py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all shadow-md flex items-center justify-center gap-2 group-hover:scale-105"
                                    title="Play Success Sound"
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                                    </div>
                                    <span className="font-bold text-sm uppercase tracking-wider">Play Success Chime</span>
                                </button>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mt-4">High-contrast Orange screen + Audio cue signals "Conditional Success".</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Validation & Conclusion */}
            <div className="max-w-3xl mx-auto px-6">
                <section className="mb-32">
                    <h2 className="text-sm font-bold text-[#E67E22] uppercase tracking-widest mb-4">04 — Validation</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Did it work?</h3>

                    <p className="text-lg text-gray-600 leading-relaxed mb-12">
                        I took the "Orange Screen" prototype back to the shopkeepers I interviewed to test their reaction to the new sensory cues. The feedback was overwhelmingly positive regarding the visual confirmation.
                    </p>

                    <div className="border-l-4 border-orange-500 pl-8 py-2 mb-12">
                        <p className="text-xl italic text-gray-800 mb-4">
                            "Yes, if the screen turns Orange and makes a 'Tring' sound, that works. I just need the assurance that money will come."
                        </p>
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
                            <span>Merchant Feedback</span>
                        </div>
                        <AudioPlayer
                            title="Feedback • Shopkeeper 2"
                            src="/src/assets/merchant_feedback.mp3"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        <div className="bg-green-50 p-6 rounded-2xl">
                            <div className="text-4xl font-bold text-green-600 mb-2">15%</div>
                            <div className="text-sm font-medium text-green-900">Reduction in Drop-offs</div>
                            <div className="text-xs text-green-700 mt-1">Targeted impact during peak hours</div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-sm font-medium text-blue-900">Digital Ledger</div>
                            <div className="text-xs text-blue-700 mt-1">Migration from manual "Khata"</div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-gray-200 pt-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflection</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Designing for "The Next Billion Users" isn't just about translating apps into Hindi—it's about building resilience against chaos. This project taught me that <span className="text-gray-900 font-semibold">Trust</span> is a design element just as important as Color or Typography.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ProjectUdhaar;
