import React, { useEffect } from 'react';
import { ArrowLeft, Check, Smartphone, WifiOff, ShieldCheck, Users, TrendingUp } from 'lucide-react';
import AudioPlayer from './ui/AudioPlayer';

import udhaarPaying from '../assets/udhaar_paying.png';
import udhaarNoInternet from '../assets/udhaar_no_internet.png';
import udhaarSuccess from '../assets/udhaar_success.png';
import udhaarPivotComparison from '../assets/udhaar_pivot_comparison.png';

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
                            variant="ambient-card"
                        />

                        <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Transcript Summary</div>
                            <div className="text-sm text-gray-600 leading-relaxed space-y-3 transcription-text">
                                <p className="font-semibold text-gray-700">Customer: "Brother, why isn't the internet working properly here lately?"</p>

                                <p><span className="font-semibold text-gray-700">Merchant:</span> "Since Vinayaka Chavithi... from September 1st until now, the Jio SIM hasn't worked here. I got calls from Customer Care about 10 times asking 'When will you subscribe to the 3-month plan?' but when I tell them that here in Marathahalli, there is absolutely no internet, calls are breaking, and the voice isn't clear... they just say 'Okay, we will solve it, which area are you in?'"</p>

                                <p>"I told them 'Marathahalli, Chowdeshwari Temple Street road'... I must have told about 10 people. After that, no one called back."</p>

                                <p>"Since the customers coming to the shop don't have internet either, I switched to Airtel, recharged it, and I am connecting them to WiFi... turning on my hotspot and providing them internet. So, it is difficult for me too."</p>

                                <p>"Customers aren't coming properly because of this. Saying 'If we go there, the net won't work'... the number of customers has decreased because of this. That is our trouble."</p>
                            </div>
                            <style>{`
                                .transcription-text {
                                    font-size: 16px !important;   /* Reduce from current large size */
                                    color: #4b5563 !important;    /* Dark Grey (easier on eyes than black) */
                                }
                            `}</style>
                        </div>
                    </div>
                </section>

                {/* 2. The Strategy - Unified Section */}
                <section className="mb-32">
                    <h2 className="text-sm font-bold text-[#E67E22] uppercase tracking-widest mb-8">02 — The Strategy</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Defining the Logic</h3>

                    {/* Trust Score Algorithm Table */}
                    <div className="mb-16">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6">The "Trust Score" Algorithm</h4>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            We cannot offer offline credit to everyone. The "Pay Offline" button is only triggered if the user passes these real-time local checks:
                        </p>

                        {/* Trust Score Table */}
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white" style={{ WebkitOverflowScrolling: 'touch' }}>
                            <table className="w-full text-left border-collapse" style={{ tableLayout: 'fixed' }}>
                                <colgroup>
                                    <col style={{ width: '25%' }} />
                                    <col style={{ width: '35%' }} />
                                    <col style={{ width: '40%' }} />
                                </colgroup>
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Signal</th>
                                        <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Logic</th>
                                        <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Why?</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-4 font-medium text-gray-900">Device Integrity</td>
                                        <td className="py-4 px-4">
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono text-xs font-bold inline-block">SafetyNet API = Pass</span>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-600">Ensures the device is not rooted/jailbroken to bypass security.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-4 font-medium text-gray-900">Geo-Fencing</td>
                                        <td className="py-4 px-4">
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-mono text-xs font-bold inline-block">GPS &lt; 50m of Merchant</span>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-600">Verifies physical presence at the registered Store ID location.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-4 font-medium text-gray-900">Spending Pattern</td>
                                        <td className="py-4 px-4">
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-mono text-xs font-bold inline-block">Amount &lt; Avg. Historical Txn</span>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-600">Anomaly detection: High-value spikes trigger a risk block.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* The Pivot Comparison */}
                    <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-6">The Pivot: Why I Scrapped the "Merchant Scan"</h4>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            My initial hypothesis relied on a standard digital handshake. However, field observation revealed a critical friction point that forced a complete redesign.
                        </p>

                        {/* Comparison Table */}
                        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                            <div className="grid md:grid-cols-2">
                                {/* Left Column: Failed Solution */}
                                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 bg-red-50/30">
                                    <div className="flex items-start gap-3 mb-6">
                                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm flex-shrink-0">✕</span>
                                        <h4 className="text-lg font-bold text-gray-900 leading-tight">
                                            The Initial Solution (Failed)
                                        </h4>
                                    </div>

                                    <div className="mb-6">
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mechanism</div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            User generates Offline QR → <span className="font-semibold text-gray-900">Merchant unlocks their phone</span> → Merchant scans user's code.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">The Friction</div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Requires the shopkeeper to stop working, dry their hands, find their phone, and unlock it. Unusable during peak hours.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column: Final Solution */}
                                <div className="p-8 bg-green-50/30">
                                    <div className="flex items-start gap-3 mb-6">
                                        <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm flex-shrink-0">✓</span>
                                        <h4 className="text-lg font-bold text-gray-900 leading-tight">
                                            The Pivot (Final Solution)
                                        </h4>
                                    </div>

                                    <div className="mb-6">
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mechanism</div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            User generates Offline Token → <span className="font-semibold text-orange-600">Phone plays unique Sound & turns Orange</span> → Merchant verifies via Sight/Sound.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">The Fix</div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Zero merchant action required. Uses "Sensory Verification" (Ambient Cues) to mimic the speed of the Paytm Soundbox.
                                        </p>
                                    </div>
                                </div>
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

                    <div className="grid md:grid-cols-3 gap-12 items-start">
                        {/* Step 1 */}
                        <div className="group">
                            <img
                                src={udhaarPaying}
                                alt="Paying Screen"
                                className="w-full h-auto rounded-[3.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 mb-8"
                            />
                            <h4 className="text-lg font-bold mb-2">1. The Initiation</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">User initiates the payment of ₹200 normally, but the network is unstable.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="group">
                            <img
                                src={udhaarNoInternet}
                                alt="No Internet Screen"
                                className="w-full h-auto rounded-[3.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 mb-8"
                            />
                            <h4 className="text-lg font-bold mb-2">2. The Intervention</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">System detects failure and instantly prompts the "Pay Offline" option.</p>
                        </div>

                        {/* Step 3 */}
                        <div
                            className="group relative"
                            onMouseMove={(e) => {
                                const tooltip = e.currentTarget.querySelector('.tooltip-cursor');
                                if (tooltip) {
                                    // Use clientX/Y for fixed positioning relative to viewport
                                    tooltip.style.left = `${e.clientX + 15}px`;
                                    tooltip.style.top = `${e.clientY + 15}px`;
                                }
                            }}
                        >
                            <div className="relative mb-8">
                                <img
                                    src={udhaarSuccess}
                                    alt="Success Screen"
                                    className="w-full h-auto rounded-[3.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300"
                                />
                                {/* Color Theory Cursor-Following Tooltip */}
                                <div className="tooltip-cursor fixed z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-gray-900 text-white p-3 rounded-lg shadow-2xl max-w-[180px] border border-gray-700">
                                    <div className="relative z-10">
                                        <div className="text-[10px] font-mono text-orange-400 uppercase tracking-wider mb-1">Color Theory</div>
                                        <p className="text-xs leading-tight">Amber indicates 'Pending but Safe', distinguishing it from immediate Bank Settlement (Green).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mb-2">
                                <h4 className="text-lg font-bold">3. The Proof</h4>
                                <button
                                    onClick={() => {
                                        const audio = new Audio('/src/assets/success_sound.mp3');
                                        audio.play().catch(e => alert("Please upload 'success_sound.mp3' to assets folder first!"));
                                    }}
                                    className="inline-flex items-center gap-2 bg-transparent border border-gray-200 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-50 transition-colors mt-3 w-fit cursor-pointer"
                                    title="Play Success Sound"
                                >
                                    <div className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                        <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-orange-500 border-b-[3px] border-b-transparent ml-0.5"></div>
                                    </div>
                                    <span>Play Success Chime</span>
                                </button>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mt-4">High-contrast Orange screen + Audio cue signals "Conditional Success".</p>
                        </div>
                    </div>

                    {/* Design Note - Mobile Optimized */}
                    <div className="max-w-3xl mx-auto mt-24 px-6">
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                                    💡
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-orange-900 uppercase tracking-wider mb-2">Design Note</h5>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        I chose Amber/Orange to signal "Pending but Safe," visually distinguishing it from the immediate "Settlement Success" (Green) standard in UPI apps.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accessibility Audit */}
                        <div className="mt-6 flex items-center gap-2 flex-wrap">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-xs font-medium border border-green-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Tested for Deuteranopia
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium border border-blue-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Contrast Ratio 4.5:1
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4.1 Unhappy Paths (Edge Cases) */}
                <div className="max-w-5xl mx-auto px-6 mt-20 mb-32">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Designing for Failure (Edge Cases)</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Edge Case 1 */}
                        <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-48 flex-shrink-0 bg-white rounded-xl shadow-sm p-2 border border-gray-200">
                                {/* Mockup of Bottom Sheet */}
                                <div className="bg-gray-100 aspect-[9/16] rounded-lg relative overflow-hidden flex items-end">
                                    <div className="w-full bg-white p-3 rounded-t-xl shadow-lg">
                                        <div className="w-8 h-1 bg-gray-300 rounded-full mx-auto mb-2"></div>
                                        <div className="text-[10px] font-bold text-gray-900 mb-1">Offline Pay Unavailable</div>
                                        <div className="text-[8px] text-gray-500 leading-tight">You need 2 more successful transactions with this merchant to unlock Trust Token.</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">1. The "Rejection" State</h4>
                                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                    Shows strict adherence to the Trust Score. We don't just fail; we explain <em>why</em> to build long-term behavior.
                                </p>
                                <span className="text-xs font-mono bg-gray-200 text-gray-700 px-2 py-1 rounded">UI: Non-intrusive Bottom Sheet</span>
                            </div>
                        </div>

                        {/* Edge Case 2 */}
                        <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-48 flex-shrink-0 bg-white rounded-xl shadow-sm p-2 border border-gray-200">
                                {/* Mockup of Notification */}
                                <div className="bg-gray-900 aspect-[9/16] rounded-lg relative overflow-hidden flex items-center justify-center">
                                    <div className="w-[90%] bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                                        <div className="flex gap-2 items-center mb-1">
                                            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                                            <div className="text-[8px] text-white font-bold">Payment Synced</div>
                                        </div>
                                        <div className="text-[8px] text-gray-300 leading-tight">₹200 paid to Sharma General Store. Trust Score increased +5.</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">2. "Sync Complete" Notification</h4>
                                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                    Closes the feedback loop when internet returns. Gamifies the experience by showing Trust Score increase.
                                </p>
                                <span className="text-xs font-mono bg-gray-200 text-gray-700 px-2 py-1 rounded">UI: Lock Screen Notification</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* 5. Validation & Conclusion */}
            < div className="max-w-3xl mx-auto px-6" >
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

                <section className="mb-32">
                    <h2 className="text-sm font-bold text-[#E67E22] uppercase tracking-widest mb-8">05 — Engineering</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Technical Architecture (Under the Hood)</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">
                        I collaborated with engineering constraints to define how this system remains secure without a live server connection.
                    </p>

                    <div className="bg-[#0F172A] rounded-3xl p-8 md:p-12 text-gray-300 font-mono text-sm shadow-2xl overflow-hidden relative border border-gray-800">
                        {/* Decorative header */}
                        <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-gray-500 text-xs">secure_protocol_v2.json</div>
                        </div>

                        <div className="space-y-12">
                            {/* 1. Secure Enclave */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                    <span className="text-green-400">01.</span> The Secure Enclave
                                </h4>
                                <p className="leading-relaxed opacity-80 pl-8 border-l border-gray-800">
                                    Transaction payloads are cryptographically signed and stored in the <span className="text-yellow-300">Android Keystore System</span> (Hardware-backed security), making them immutable.
                                </p>
                            </div>

                            {/* 2. Payload Structure */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                    <span className="text-green-400">02.</span> The Payload
                                </h4>
                                <div className="pl-8 border-l border-gray-800">
                                    <div className="bg-black/50 p-6 rounded-xl border border-gray-800 overflow-x-auto">
                                        <code className="text-blue-300 block">
                                            {`{`}
                                            <br />&nbsp;&nbsp;{`"Amount": "₹200",`}
                                            <br />&nbsp;&nbsp;{`"Timestamp": "14:02",`}
                                            <br />&nbsp;&nbsp;{`"DeviceID": "X99",`}
                                            <br />&nbsp;&nbsp;{`"Nonce": "8821"`}
                                            <br />{`}`}
                                        </code>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Sync Mechanism */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                    <span className="text-green-400">03.</span> The Sync (WorkManager)
                                </h4>
                                <p className="leading-relaxed opacity-80 pl-8 border-l border-gray-800">
                                    We use Android's <span className="text-yellow-300">WorkManager API</span>. It passively listens for <span className="text-purple-300">CONNECTIVITY_CHANGE</span> and silently pushes the signed payload to the server as soon as a stable packet is detected.
                                </p>
                            </div>

                            {/* 4. Failure Logic */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                    <span className="text-green-400">04.</span> Failure Logic
                                </h4>
                                <div className="pl-8 grid gap-4">
                                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                        <div className="text-red-400 font-bold mb-1">Zero Balance at Sync</div>
                                        <div className="text-gray-400 text-xs">Bank authorizes <span className="text-white">Micro-Overdraft</span> (up to ₹500).</div>
                                    </div>
                                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                        <div className="text-red-400 font-bold mb-1">App Uninstall</div>
                                        <div className="text-gray-400 text-xs">Token linked to IMEI. Debt recorded server-side; user <span className="text-white">blacklisted</span>.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Impact Banner (Updated) */}
                <section className="bg-gray-900 text-white py-12 mb-32 -mx-6 md:-mx-0 md:rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                    </div>

                    <div className="max-w-5xl mx-auto px-8 md:px-12 relative z-10">
                        <div className="mb-16">
                            <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-4">06 — The Results</h2>
                            <h3 className="text-3xl md:text-5xl font-bold mb-6">Projected Impact</h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
                            <div>
                                <div className="text-5xl font-bold text-white mb-2">15%</div>
                                <div className="text-lg font-medium text-gray-300 mb-2">Reduction in Drop-offs</div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Targeted decrease in checkout abandonment during peak congestion.
                                </p>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-white mb-2">&lt; 10%</div>
                                <div className="text-lg font-medium text-gray-300 mb-2">Merchant Rejection Rate</div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Expected pushback from merchants due to "Sensory Verification" cues.
                                </p>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-white mb-2">0.5%</div>
                                <div className="text-lg font-medium text-gray-300 mb-2">Default Risk (Fraud)</div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Estimated loss rate due to strict "Trust Score" eligibility criteria.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-gray-200 pt-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflection</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Designing for "The Next Billion Users" isn't just about translating apps into Hindi—it's about building resilience against chaos. This project taught me that <span className="text-gray-900 font-semibold">Trust</span> is a design element just as important as Color or Typography.
                    </p>
                </section>
            </div >

            {/* Mobile Responsive Styles */}
            < style > {`
                /* Mobile: 320px - 640px */
                @media (max-width: 640px) {
                    /* Hero Section */
                    header {
                        padding-top: 6rem !important;
                        padding-bottom: 3rem !important;
                        padding-left: 1.5rem !important;
                        padding-right: 1.5rem !important;
                    }

                    header h1 {
                        font-size: 2rem !important;
                        margin-bottom: 1.5rem !important;
                    }

                    header p {
                        font-size: 1.1rem !important;
                        margin-bottom: 2rem !important;
                    }

                    /* Metadata Grid - Stack to 2 columns on mobile */
                    header .grid {
                        gap: 1rem !important;
                        padding: 1.5rem 0 !important;
                    }

                    /* Tables - Make scrollable */
                    table {
                        display: block;
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                    }

                    table th,
                    table td {
                        white-space: nowrap;
                        padding: 0.75rem 1rem !important;
                        font-size: 0.875rem !important;
                    }

                    /* Phone Mockup Grid - Stack vertically */
                    .grid.md\\:grid-cols-3 {
                        grid-template-columns: 1fr !important;
                    }

                    /* Pivot Comparison Table - Already stacks, just adjust padding */
                    .grid.md\\:grid-cols-2 > div {
                        padding: 1.5rem !important;
                    }

                    /* Impact Banner */
                    .bg-gray-900 .grid {
                        gap: 2rem !important;
                    }

                    /* Technical Architecture - Code blocks */
                    .bg-\\[\\#0F172A\\] {
                        padding: 1.5rem !important;
                        font-size: 0.75rem !important;
                    }

                    /* General Section Padding */
                    section {
                        padding-left: 1.5rem !important;
                        padding-right: 1.5rem !important;
                    }

                    /* Reduce large text sizes */
                    h2 {
                        font-size: 1.75rem !important;
                    }

                    h3 {
                        font-size: 1.5rem !important;
                    }

                    h4 {
                        font-size: 1.25rem !important;
                    }

                    /* Back button - Make it more compact */
                    .fixed button {
                        padding: 0.5rem 1rem !important;
                        font-size: 0.875rem !important;
                    }
                }

                /* Very Small Screens: 320px - 375px */
                @media (max-width: 375px) {
                    header h1 {
                        font-size: 1.75rem !important;
                    }

                    header p {
                        font-size: 1rem !important;
                    }

                    /* Even smaller text for readability */
                    table th,
                    table td {
                        font-size: 0.75rem !important;
                        padding: 0.5rem 0.75rem !important;
                    }

                    h2 {
                        font-size: 1.5rem !important;
                    }

                    h3 {
                        font-size: 1.25rem !important;
                    }
                }

                /* Tablet: 641px - 1024px */
                @media (min-width: 641px) and (max-width: 1024px) {
                    header h1 {
                        font-size: 3rem !important;
                    }

                    header p {
                        font-size: 1.25rem !important;
                    }

                    /* Tables remain scrollable for safety */
                    table {
                        display: block;
                        overflow-x: auto;
                    }
                }

                /* Ensure no horizontal scroll */
                * {
                    max-width: 100%;
                }

                /* Touch-friendly targets */
                @media (max-width: 1024px) {
                    button,
                    a {
                        min-height: 44px;
                        min-width: 44px;
                    }
                }

                /* Fix for Amputated Phone Image */
                .journey-step-image-container {
                    height: auto !important;
                    min-height: 0 !important;
                    overflow: visible !important;
                    flex-shrink: 0;
                    border-radius: 2.5rem !important;
                    padding: 0 !important;
                    display: inline-block !important;
                    line-height: 0 !important;
                }

                .journey-step-image {
                    object-fit: contain !important;
                    width: 100%;
                    height: auto;
                    display: block !important;
                }
            `}</style>
        </div>
    );
};

export default ProjectUdhaar;
