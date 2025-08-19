import { useState } from "react";

export default function NoiseBackground() {
  const [noiseLevel, setNoiseLevel] = useState(0.2); // default opacity

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Noise overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: noiseLevel }}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.15"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-4xl font-bold mb-4">Hello with Noise</h1>

        {/* Slider to control noise level */}
        <input
          type="range"
          min="0"
          max="100"
          step="0.01"
          value={noiseLevel}
          onChange={(e) => setNoiseLevel(parseFloat(e.target.value))}
          className="w-64"
        />
        <p className="mt-2">Noise Level: {noiseLevel}</p>
      </div>
    </div>
  );
}
