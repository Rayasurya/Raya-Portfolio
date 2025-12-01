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

    const [photo, setPhoto] = useState('https://avatar.vercel.sh/tools');
    const [selectedRatio, setSelectedRatio] = useState(aspectRatios[0]);
    const [croppedFile, setCroppedFile] = useState(null);

    const handleUpload = async (file) => {
        setPhoto(URL.createObjectURL(file));
        setCroppedFile(file);
        return { success: true };
    };

    const handleDownload = () => {
        if (!croppedFile) {
            alert('Please upload and crop an image first');
            return;
        }

        const url = URL.createObjectURL(croppedFile);
        const link = document.createElement('a');
        link.href = url;
        link.download = `cropped-${selectedRatio.name.toLowerCase()}-${Date.now()}.${croppedFile.type.split('/')[1]}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            {/* Tool Header */}
            <div className="flex items-start justify-between mb-4">
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
            <div className="flex gap-2 mb-4">
                {aspectRatios.map((ratio) => (
                    <button
                        key={ratio.name}
                        onClick={() => setSelectedRatio(ratio)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedRatio.name === ratio.name
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {ratio.name}
                    </button>
                ))}
            </div>

            {/* Upload and Preview */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Upload */}
                <div className="flex flex-col items-center">
                    <AvatarUploader onUpload={handleUpload} aspect={selectedRatio.value}>
                        <button className="group relative">
                            <Avatar className="size-24 cursor-pointer transition-opacity hover:opacity-80 border-2 border-gray-200">
                                <AvatarImage src={photo} />
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                                    <Upload size={24} />
                                </AvatarFallback>
                            </Avatar>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-black/50 rounded-full p-2">
                                    <Upload className="text-white" size={16} />
                                </div>
                            </div>
                        </button>
                    </AvatarUploader>
                    <p className="text-xs text-gray-500 mt-2 text-center">Upload</p>
                </div>

                {/* Preview */}
                <div className="flex flex-col items-center">
                    <div
                        className="border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50"
                        style={{
                            width: '96px',
                            aspectRatio: selectedRatio.value,
                            maxHeight: '96px',
                        }}
                    >
                        <img src={photo} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">Preview</p>
                </div>
            </div>

            {/* Download Button */}
            <Button
                onClick={handleDownload}
                variant="default"
                size="sm"
                className="w-full"
                disabled={!croppedFile}
            >
                <Download size={14} className="mr-2" />
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
