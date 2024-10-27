import React, { useState } from 'react';
import { Play, RefreshCw, Trash2, Download } from 'lucide-react';
import { useKohonenStore } from '../store/kohonenStore';

export default function Controls() {
    const {
        isLearning,
        startLearning,
        resetGrid,
        clearGrid,
        saveImage,
        setLearningRate,
        setIterations,
        setGridSize
    } = useKohonenStore();

    return (
        <div className="w-full max-w-2xl bg-slate-800 rounded-xl p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Learning Rate
                        </label>
                        <input
                            type="range"
                            min="0.1"
                            max="1"
                            step="0.1"
                            defaultValue="0.5"
                            onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Iterations
                        </label>
                        <input
                            type="range"
                            min="100"
                            max="1000"
                            step="100"
                            defaultValue="500"
                            onChange={(e) => setIterations(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Grid Size
                        </label>
                        <select
                            onChange={(e) => setGridSize(parseInt(e.target.value))}
                            className="w-full bg-slate-700 rounded-lg px-3 py-2 text-slate-200"
                            defaultValue="20"
                        >
                            <option value="10">10 x 10</option>
                            <option value="20">20 x 20</option>
                            <option value="30">30 x 30</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-3 justify-center">
                    <button
                        onClick={startLearning}
                        disabled={isLearning}
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Play className="w-4 h-4" />
                        Start Learning
                    </button>

                    <button
                        onClick={resetGrid}
                        className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Reset Grid
                    </button>

                    <button
                        onClick={clearGrid}
                        className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                        Clear Grid
                    </button>

                    <button
                        onClick={saveImage}
                        className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Save Image
                    </button>
                </div>
            </div>

            {isLearning && (
                <div className="mt-6 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-400"></div>
                </div>
            )}
        </div>
    );
}