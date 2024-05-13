type GenerateSizes = { [key: string]: number };

function generateSizes(numLevels: number, spacing: number) {
  const sizes: GenerateSizes = {};
  for (let i: number = 1; i <= numLevels; i++) {
    sizes[`level_${i}`] = i * spacing;
  }
  return sizes;
}

export { generateSizes };
