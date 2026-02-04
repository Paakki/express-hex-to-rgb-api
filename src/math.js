// math.js

/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of `a` and `b`.
 * @throws {Error} If either argument is not a number.
 */
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  return a + b;
}

/**
 * Checks if a number is even.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} `true` if the number is even, otherwise `false`.
 * @throws {Error} If the argument is not a number.
 */
function isEven(n) {
  if (typeof n !== "number") {
    throw new Error("Input must be a number");
  }
  return n % 2 === 0;
}

/**
 * Converts a hex color (e.g. "#ff00aa" or "ff00aa" or "#f0a") to an RGB object.
 *
 * Supports:
 * - 6-digit hex: #RRGGBB
 * - 3-digit hex: #RGB (expanded to #RRGGBB)
 *
 * @param {string} hex - Hex color string.
 * @returns {{ r: number, g: number, b: number }} RGB values (0-255).
 * @throws {Error} If hex format is invalid.
 */
function hexToRgb(hex) {
  if (typeof hex !== "string") {
    throw new Error("Input must be a string");
  }

  let cleaned = hex.trim();
  if (cleaned.startsWith("#")) cleaned = cleaned.slice(1);

  // Expand shorthand (#RGB -> #RRGGBB)
  if (cleaned.length === 3) {
    cleaned = cleaned
      .split("")
      .map((c) => c + c)
      .join("");
  }

  if (!/^[0-9a-fA-F]{6}$/.test(cleaned)) {
    throw new Error("Invalid hex color");
  }

  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);

  return { r, g, b };
}

/**
 * Math utility functions.
 *
 * @module math
 * @property {function(number, number): number} add - Adds two numbers.
 * @property {function(number): boolean} isEven - Checks if a number is even.
 */
module.exports = { add, isEven, hexToRgb };
