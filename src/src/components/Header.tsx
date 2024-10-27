import React from 'react';
import { Brain } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-slate-800 py-6 px-4 border-b border-slate-700">
            <div className="container mx-auto flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                    <Brain className="w-8 h-8 text-indigo-400" />
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Kohonen Map Solver
                    </h1>
                </div>
                <p className="text-slate-400 text-center max-w-2xl">
                    Explore the power of Self-Organizing Maps for unsupervised learning through interactive visualization
                </p>
            </div>
        </header>
    );
}