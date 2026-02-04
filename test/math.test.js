// math.test.js

const { expect } = require("chai");
const { add, isEven, hexToRgb } = require("../src/math");

/**
 * Unit tests for math.js
 *
 * @module test/math
 */
describe("math.js", () => {
  /**
   * Tests for the add() function
   */
  describe("add()", () => {
    /**
     * It should correctly add two numbers.
     */
    it("should add two numbers correctly", () => {
      expect(add(2, 3)).to.equal(5);
    });

    /**
     * It should throw an error if inputs are not numbers.
     */
    it("should throw an error if inputs are not numbers", () => {
      expect(() => add(2, "a")).to.throw("Inputs must be numbers");
    });
  });

  /**
   * Tests for the isEven() function
   */
  describe("isEven()", () => {
    /**
     * It should return true for even numbers.
     */
    it("should return true for even numbers", () => {
      expect(isEven(4)).to.be.true;
    });

    /**
     * It should return false for odd numbers.
     */
    it("should return false for odd numbers", () => {
      expect(isEven(5)).to.be.false;
    });

    /**
     * It should throw an error if the input is not a number.
     */
    it("should throw an error if input is not a number", () => {
      expect(() => isEven("test")).to.throw("Input must be a number");
    });
  });

  /**
   * Tests for the hexToRgb() function
   */
  describe("hexToRgb()", () => {
    it("should convert 6-digit hex to rgb", () => {
      expect(hexToRgb("#ff00aa")).to.deep.equal({ r: 255, g: 0, b: 170 });
    });

    it("should convert 3-digit hex to rgb", () => {
      expect(hexToRgb("#f0a")).to.deep.equal({ r: 255, g: 0, b: 170 });
    });

    it("should throw on invalid hex", () => {
      expect(() => hexToRgb("zzzzzz")).to.throw("Invalid hex color");
    });
  });
});
