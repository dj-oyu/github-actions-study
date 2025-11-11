import { describe, it, expect } from 'bun:test';
import { isEven } from "./isEven";

describe("isEven", () => {
  it("should return 'Even' for even numbers", () => {
    expect(isEven(2)).toBe("Even");
    expect(isEven(4)).toBe("Even");
    expect(isEven(6)).toBe("Even");
  });

  it("should return 'Odd' for odd numbers", () => {
    expect(isEven(1)).toBe("Odd");
    expect(isEven(3)).toBe("Odd");
    expect(isEven(5)).toBe("Odd");
  });
});