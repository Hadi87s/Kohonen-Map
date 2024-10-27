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

        const cellSize = Math.floor(canvas.width / gridSize);

        grid.forEach((row, i) => {
            row.forEach((cell, j) => {
                ctx.fillStyle = `rgb(${cell.r}, ${cell.g}, ${cell.b})`;
                ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
            });
        });
    }, [grid, gridSize]);

    return (
        <div className="relative bg-slate-800 p-4 rounded-xl shadow-xl">
            <canvas
                ref={canvasRef}
                width={400}
                height={400}
                className="bg-slate-900 rounded-lg"
            />
        </div>
    );
}