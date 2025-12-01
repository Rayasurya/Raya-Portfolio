import React, { useState, useRef, useEffect } from 'react';
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
        { name: 'Passport', value: 3.5 / 4.5, size: '1.4" x 1.8"' },
        { name: 'Square', value: 1 / 1, size: '1:1' },
        { name: 'ID', value: 3 / 4, size: '3" x 4"' },
    ];

    const [originalImage, setOriginalImage] = useState(null);
    const [croppedImageUrl, setCroppedImageUrl] = useState(null);
    const [selectedRatio, setSelectedRatio] = useState(aspectRatios[2]); // Default to ID
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setOriginalImage(url);
            // Clear the file input value to allow re-uploading the same file
            e.target.value = '';
        }
    };

    const generateCrop = async (imageSrc, aspect) => {
        if (!imageSrc) return;

        try {
            const image = await new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.src = imageSrc;
            });

            const { width, height } = image;
            let cropWidth, cropHeight, x, y;

            // Calculate center crop maintaining aspect ratio
            if (width / height > aspect) {
                // Image is wider than aspect ratio
                cropHeight = height;
                cropWidth = height * aspect;
                x = (width - cropWidth) / 2;
                y = 0;
            } else {
                // Image is taller than aspect ratio
                cropWidth = width;
                cropHeight = width / aspect;
                x = 0;
                y = (height - cropHeight) / 2;
            }

            const pixelCrop = { x, y, width: cropWidth, height: cropHeight };
            const { url } = await import('./ui/avatar-uploader').then(mod =>
                mod.getCroppedImg(imageSrc, pixelCrop)
            );
            setCroppedImageUrl(url);
        } catch (error) {
            console.error('Failed to crop image:', error);
            setCroppedImageUrl(null); // Clear cropped image on error
        }
    };

    useEffect(() => {
        if (originalImage) {
            generateCrop(originalImage, selectedRatio.value);
        } else {
            setCroppedImageUrl(null); // Clear cropped image if original is null
        }
    }, [originalImage, selectedRatio]);

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
            <div className="flex gap-2 mb-6 flex-wrap">
                {aspectRatios.map((ratio) => (
                    <button
                        key={ratio.name}
                        onClick={() => setSelectedRatio(ratio)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${selectedRatio.name === ratio.name
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <span>{ratio.name}</span>
                        <span className={`text-xs ${selectedRatio.name === ratio.name ? 'text-gray-300' : 'text-gray-500'}`}>
                            {ratio.size}
                        </span>
                    </button>
                ))}
            </div>

            {/* Main Content Area - Preview Only with Fixed Height */}
            <div className="mb-6">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept="image/*"
                    className="hidden"
                />

                <div
                    className="relative group cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 transition-colors bg-gray-50 flex items-center justify-center overflow-hidden"
                        style={{
                            height: '280px', // Fixed height
                            width: '100%'
                        }}
                    >
                        {croppedImageUrl ? (
                            <img
                                src={croppedImageUrl}
                                alt="Preview"
                                className="max-w-full max-h-full object-contain"
                                style={{
                                    aspectRatio: selectedRatio.value
                                }}
                            />
                        ) : (
                            <div className="text-center">
                                <Upload className="mx-auto text-gray-400 mb-2" size={40} />
                                <p className="text-sm text-gray-500 font-medium">Click to upload</p>
                                <p className="text-xs text-gray-400 mt-1">Image will be cropped to selected ratio</p>
                            </div>
                        )}
                    </div>
                    {croppedImageUrl && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl">
                            <div className="bg-white rounded-full p-3">
                                <Upload className="text-blue-600" size={20} />
                            </div>
                        </div>
                    )}
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
