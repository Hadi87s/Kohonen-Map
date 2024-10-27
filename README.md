# Kohonen Map Solver

![Interactive Neural Network Visualization](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000)

A sophisticated interactive visualization tool for exploring Self-Organizing Maps (SOMs), also known as Kohonen Maps. This application demonstrates neural network learning in real-time through color space organization.

## ✨ Features

- **Interactive Learning Visualization**
  - Watch neural network adaptation in real-time
  - Color-based pattern recognition
  - Dynamic grid updates

- **Customizable Parameters**
  - Learning rate adjustment (0.1 - 1.0)
  - Iteration count control (100 - 1000)
  - Flexible grid sizes (10x10 - 30x30)

- **User Controls**
  - Start/Stop learning process
  - Reset to random state
  - Clear visualization
  - Export as PNG

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🧠 How It Works

The Kohonen Map Solver implements a self-organizing map algorithm that:

1. Initializes with random color values
2. Iteratively processes input patterns
3. Updates neurons based on neighborhood functions
4. Creates a topologically ordered representation

The result is a visual map where similar colors naturally cluster together, demonstrating the power of unsupervised learning.

## 🎨 Color Space Organization

The visualization represents a 3D color space (RGB) mapped to a 2D grid where:
- Each cell represents a neuron
- Colors indicate learned patterns
- Proximity reflects similarity
- Transitions show topological preservation

## 🔧 Configuration

Adjust learning parameters through the intuitive UI:

- **Learning Rate**: Controls adaptation speed
- **Iterations**: Determines learning duration
- **Grid Size**: Sets visualization resolution

## 📚 Learn More

- [Self-Organizing Maps (Wikipedia)](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Neural Networks Overview](https://en.wikipedia.org/wiki/Neural_network)
- [Color Space Theory](https://en.wikipedia.org/wiki/Color_space)

## 📝 License

MIT License - feel free to use this project for learning, modification, and distribution.

---

<div align="center">
  Built with 💜 using React and TypeScript
</div>

 ```bash
[Visit The Website](https://hadi78s.netlify.app/)

