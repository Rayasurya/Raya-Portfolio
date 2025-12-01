import React, { useState } from 'react';
import { Eye } from 'lucide-react';

export const SocialMediaPreviewer = () => {
    const [title, setTitle] = useState('Your Amazing Title Here');
    const [description, setDescription] = useState('A compelling description that makes people want to click.');
    const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=630');

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:col-span-2 lg:col-span-2">
            {/* Tool Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                        <Eye className="text-green-600" size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Social Previewer</h3>
                        <p className="text-sm text-gray-500">Preview link cards</p>
                    </div>
                </div>
            </div>

            {/* Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side - Inputs */}
                <div className="space-y-3">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-green-500 focus:border-transparent"
                            placeholder="Your title..."
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs resize-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
                            rows={2}
                            placeholder="Your description..."
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-green-500 focus:border-transparent"
                            placeholder="https://..."
                        />
                    </div>
                </div>

                {/* Right Side - Stacked Previews */}
                <div className="space-y-3">
                    {/* Twitter Preview */}
                    <div className="border border-gray-200 rounded overflow-hidden bg-white">
                        <div className="aspect-[2/1] bg-gray-100 relative overflow-hidden">
                            <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-2 border-t border-gray-200">
                            <div className="text-[10px] text-gray-500 mb-0.5">example.com</div>
                            <div className="font-semibold text-xs text-gray-900 line-clamp-1">{title}</div>
                            <div className="text-[10px] text-gray-600 line-clamp-1">{description}</div>
                        </div>
                    </div>

                    {/* WhatsApp Preview */}
                    <div className="border border-gray-200 rounded overflow-hidden bg-white flex gap-2 p-3">
                        <div className="w-14 h-14 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                            <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold text-xs text-gray-900 line-clamp-1">{title}</div>
                            <div className="text-[10px] text-gray-600 line-clamp-2 mt-0.5">{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
