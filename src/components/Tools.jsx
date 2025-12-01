import React, { useState } from 'react';
import { AvatarUploader } from './ui/avatar-uploader';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { Button } from './ui/button';
import { Download, Upload, Image as ImageIcon, Scissors, ArrowRight } from 'lucide-react';
import { PxToRemConverter } from './tools/PxToRemConverter';
import { SocialMediaPreviewer } from './tools/SocialMediaPreviewer';
import { SvgOptimizer } from './tools/SvgOptimizer';

// Image Cropper Tool Component
const ImageCropperTool = () => {
    const aspectRatios = [
        { name: 'Passport', value: 3.5 / 4.5 },
        { name: 'Square', value: 1 / 1 },
        { name: 'ID', value: 3 / 4 },
    ];

    const [originalImage, setOriginalImage] = useState(null);
    const [croppedImageUrl, setCroppedImageUrl] = useState(null);
    const [selectedRatio, setSelectedRatio] = useState(aspectRatios[2]); // Default to ID

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setOriginalImage(URL.createObjectURL(file));
        }
    };

    const handleUploadComplete = async (file) => {
        if (file) {
            setCroppedImageUrl(URL.createObjectURL(file));
        }
        return { success: true };
    };

    const handleDownload = () => {
        if (!croppedImageUrl) {
            alert('Please upload an image first');
            return;
        }

        const link = document.createElement('a');
        link.href = croppedImageUrl;
        link.download = `cropped-${selectedRatio.name.toLowerCase()}-${Date.now()}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            {/* Tool Header */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Scissors className="text-blue-600" size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Image Cropper</h3>
                        <p className="text-sm text-gray-500">Crop images for passport, ID, etc.</p>
                    </div>
                </div>
            </div>

            {/* Aspect Ratio Pills */}
            <div className="flex gap-2 mb-6">
                {aspectRatios.map((ratio) => (
                    <button
                        key={ratio.name}
                        onClick={() => setSelectedRatio(ratio)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedRatio.name === ratio.name
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {ratio.name}
                    </button>
                ))}
            </div>

            {/* Main Content Area - Upload and Preview Side by Side */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Upload Section */}
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-700 mb-3">Upload</p>
                    <AvatarUploader
                        onUpload={handleUploadComplete}
                        aspect={selectedRatio.value}
                    >
                        <div className="relative group cursor-pointer">
                            <div
                                className="border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 transition-colors bg-gray-50 flex items-center justify-center"
                                style={{
                                    aspectRatio: selectedRatio.value,
                                    minHeight: '160px'
                                }}
                            >
                                {originalImage || croppedImageUrl ? (
                                    <img
                                        src={originalImage || croppedImageUrl}
                                        alt="Upload"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                ) : (
                                    <div className="text-center">
                                        <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                                        <p className="text-sm text-gray-500">Click to upload</p>
                                    </div>
                                )}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl">
                                <div className="bg-white rounded-full p-3">
                                    <Upload className="text-blue-600" size={20} />
                                </div>
                            </div>
                        </div>
                    </AvatarUploader>
                </div>

                {/* Preview Section */}
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-700 mb-3">Preview</p>
                    <div
                        className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center"
                        style={{
                            aspectRatio: selectedRatio.value,
                            minHeight: '160px'
                        }}
                    >
                        {croppedImageUrl ? (
                            <img
                                src={croppedImageUrl}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="text-center text-gray-400">
                                <ImageIcon size={32} className="mx-auto mb-2" />
                                <p className="text-xs">Preview appears here</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <Button
                onClick={handleDownload}
                variant="default"
                size="default"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!croppedImageUrl}
            >
                <Download size={16} className="mr-2" />
                Download
            </Button>
        </div>
    );
};

// Placeholder for future tools
const PlaceholderTool = ({ title, description, icon: Icon }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 opacity-60">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                    <Icon className="text-gray-400" size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
        </div>
        <div className="text-center py-8 text-gray-400 text-sm">
            Coming Soon
        </div>
    </div>
);

const Tools = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Tools</h1>
                    <p className="text-lg text-gray-600">Free utilities to make your life easier</p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ImageCropperTool />
                    <PxToRemConverter />
                    <SvgOptimizer />
                    <SocialMediaPreviewer />
                    <PlaceholderTool
                        title="Image Compressor"
                        description="Reduce image file sizes"
                        icon={ImageIcon}
                    />
                    <PlaceholderTool
                        title="More Tools"
                        description="Coming soon..."
                        icon={ArrowRight}
                    />
                </div>
            </div>
        </div>
    );
};

export default Tools;
