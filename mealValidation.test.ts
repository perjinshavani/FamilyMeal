import { describe, expect, it } from "vitest";

describe("meal validation", () => {
  it("rejects a meal containing only spaces", () => {
    const meal = "     ";

    expect(meal.trim()).toBe("");
  });
});


it("accepts a valid meal", () => {
  const meal = "Fish";

  expect(meal.trim()).not.toBe("");
});

it("accepts a meal with spaces around the text", () => {
  const meal = "   Fish   ";

  expect(meal.trim()).not.toBe("");
});
