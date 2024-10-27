import { create } from 'zustand';

interface Color {
    r: number;
    g: number;
    b: number;
}

interface KohonenState {
    grid: Color[][];
    gridSize: number;
    learningRate: number;
    iterations: number;
    isLearning: boolean;
    setLearningRate: (rate: number) => void;
    setIterations: (iterations: number) => void;
    setGridSize: (size: number) => void;
    startLearning: () => Promise<void>;
    resetGrid: () => void;
    clearGrid: () => void;
    saveImage: () => void;
}

const createRandomGrid = (size: number): Color[][] => {
    return Array(size)
        .fill(0)
        .map(() =>
            Array(size)
                .fill(0)
                .map(() => ({
                    r: Math.floor(Math.random() * 256),
                    g: Math.floor(Math.random() * 256),
                    b: Math.floor(Math.random() * 256),
                }))
        );
};

// Calculate Euclidean distance between two colors
const colorDistance = (c1: Color, c2: Color): number => {
    return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) +
        Math.pow(c1.g - c2.g, 2) +
        Math.pow(c1.b - c2.b, 2)
    );
};

// Calculate grid distance between two positions
const gridDistance = (x1: number, y1: number, x2: number, y2: number): number => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

// Calculate neighborhood function value
const neighborhoodFunction = (distance: number, radius: number): number => {
    return Math.exp(-(distance * distance) / (2 * radius * radius));
};

// Generate random input color
const getRandomColor = (): Color => ({
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
});

export const useKohonenStore = create<KohonenState>((set, get) => ({
    grid: createRandomGrid(20),
    gridSize: 20,
    learningRate: 0.5,
    iterations: 500,
    isLearning: false,

    setLearningRate: (rate) => set({ learningRate: rate }),
    setIterations: (iterations) => set({ iterations }),
    setGridSize: (size) => set({ gridSize: size, grid: createRandomGrid(size) }),

    startLearning: async () => {
        set({ isLearning: true });
        const { gridSize, learningRate: initialLearningRate, iterations } = get();

        // Learning process
        for (let iteration = 0; iteration < iterations; iteration++) {
            // Calculate current learning rate and radius (both decrease over time)
            const progress = iteration / iterations;
            const currentLearningRate = initialLearningRate * (1 - progress);
            const radius = Math.max(1, Math.floor((gridSize / 2) * (1 - progress)));

            // Generate random input
            const inputColor = getRandomColor();

            // Find Best Matching Unit (BMU)
            const { grid } = get();
            let bmuX = 0;
            let bmuY = 0;
            let minDistance = Infinity;

            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    const distance = colorDistance(grid[i][j], inputColor);
                    if (distance < minDistance) {
                        minDistance = distance;
                        bmuX = i;
                        bmuY = j;
                    }
                }
            }

            // Update weights (colors) in the neighborhood of BMU
            const newGrid = grid.map((row, i) =>
                row.map((cell, j) => {
                    const distance = gridDistance(i, j, bmuX, bmuY);
                    const influence = neighborhoodFunction(distance, radius);

                    return {
                        r: Math.floor(
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    cell.r + currentLearningRate * influence * (inputColor.r - cell.r)
                                )
                            )
                        ),
                        g: Math.floor(
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    cell.g + currentLearningRate * influence * (inputColor.g - cell.g)
                                )
                            )
                        ),
                        b: Math.floor(
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    cell.b + currentLearningRate * influence * (inputColor.b - cell.b)
                                )
                            )
                        ),
                    };
                })
            );

            set({ grid: newGrid });

            // Add small delay to show the visualization
            if (iteration % 5 === 0) {
                await new Promise((resolve) => setTimeout(resolve, 50));
            }
        }

        set({ isLearning: false });
    },

    resetGrid: () => set({ grid: createRandomGrid(get().gridSize) }),

    clearGrid: () =>
        set({
            grid: Array(get().gridSize)
                .fill(0)
                .map(() =>
                    Array(get().gridSize).fill({ r: 0, g: 0, b: 0 })
                ),
        }),

    saveImage: () => {
        const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = 'kohonen-map.png';
        link.href = canvas.toDataURL();
        link.click();
    },
}));
