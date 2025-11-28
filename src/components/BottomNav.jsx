import React from 'react';
import { Home, Briefcase, User, FileText } from 'lucide-react';

const BottomNav = ({ currentView, onNavigate }) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'components', label: 'Components', icon: Briefcase }, // Using Briefcase for Components as per user request context implies "Components" is a main section
        { id: 'about', label: 'About', icon: User },
        { id: 'resume', label: 'Resume', icon: FileText },
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full z-[999] bg-white/80 backdrop-blur-lg border-t border-gray-200 pb-[env(safe-area-inset-bottom)] md:hidden">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentView === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-black' : 'text-gray-400'
                                }`}
                        >
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomNav;
