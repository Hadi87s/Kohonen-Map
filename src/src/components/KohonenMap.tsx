import React, { useEffect, useRef } from 'react';
import { useKohonenStore } from '../store/kohonenStore';

export default function KohonenMap() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { grid, gridSize } = useKohonenStore();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size based on grid size
        const maxSize = 600; // Maximum canvas size
        const minCellSize = 2; // Minimum cell size in pixels
        const cellSize = Math.max(minCellSize, Math.floor(maxSize / gridSize));
        const canvasSize = cellSize * gridSize;

        // Update canvas dimensions
        canvas.width = canvasSize;
        canvas.height = canvasSize;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw grid
        grid.forEach((row, i) => {
            row.forEach((cell, j) => {
                ctx.fillStyle = `rgb(${cell.r}, ${cell.g}, ${cell.b})`;
                ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
            });
        });
    }, [grid, gridSize]);

    return (
        <div className="relative bg-slate-800 p-4 rounded-xl shadow-xl overflow-auto">
            <canvas
                ref={canvasRef}
                className="bg-slate-900 rounded-lg max-w-full"
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '70vh',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
}