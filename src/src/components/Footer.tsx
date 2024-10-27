import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-800 border-t border-slate-700 py-8 px-4">
            <div className="container mx-auto text-center">
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Kohonen Self-Organizing Maps (SOMs) are a type of artificial neural network that create a low-dimensional
                    representation of high-dimensional data while preserving topological properties. They're particularly useful
                    for visualization and clustering tasks.
                </p>
                <a
                    href="https://en.wikipedia.org/wiki/Self-organizing_map"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                    Learn more about Kohonen Maps →
                </a>
            </div>
        </footer>
    );
}