import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const PxToRemConverter = () => {
    const [px, setPx] = useState('');
    const [rem, setRem] = useState('');
    const [rootSize, setRootSize] = useState('16');

    const handlePxChange = (value) => {
        setPx(value);
        if (value && rootSize) {
            const remValue = parseFloat(value) / parseFloat(rootSize);
            setRem(remValue.toFixed(4));
        } else {
            setRem('');
        }
    };

    const handleRemChange = (value) => {
        setRem(value);
        if (value && rootSize) {
            const pxValue = parseFloat(value) * parseFloat(rootSize);
            setPx(pxValue.toFixed(2));
        } else {
            setPx('');
        }
    };

    const handleRootSizeChange = (value) => {
        setRootSize(value);
        // Recalculate based on px if available
        if (px && value) {
            const remValue = parseFloat(px) / parseFloat(value);
            setRem(remValue.toFixed(4));
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            {/* Tool Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                        <Calculator className="text-purple-600" size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">PX to REM</h3>
                        <p className="text-sm text-gray-500">Stop doing math in your head</p>
                    </div>
                </div>
            </div>

            {/* Root Size Input */}
            <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-2">Root Font Size (px)</label>
                <input
                    type="number"
                    value={rootSize}
                    onChange={(e) => handleRootSizeChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    placeholder="16"
                />
            </div>

            {/* Converter */}
            <div className="flex items-center gap-3">
                <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700 mb-2">Pixels (PX)</label>
                    <input
                        type="number"
                        value={px}
                        onChange={(e) => handlePxChange(e.target.value)}
                        className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-2xl font-bold text-center"
                        placeholder="0"
                    />
                </div>

                <div className="text-2xl font-bold text-gray-400 mt-6">=</div>

                <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700 mb-2">REM</label>
                    <input
                        type="number"
                        value={rem}
                        onChange={(e) => handleRemChange(e.target.value)}
                        className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-2xl font-bold text-center"
                        placeholder="0"
                    />
                </div>
            </div>

            {/* Formula Info */}
            <div className="mt-4 text-xs text-gray-500 text-center">
                REM = PX ÷ {rootSize || '16'} | PX = REM × {rootSize || '16'}
            </div>
        </div>
    );
};
