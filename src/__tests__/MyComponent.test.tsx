import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";

import MyComponent from "../components/MyComponent";

beforeEach(() => {
  vi.clearAllMocks();
  vi.resetModules(); // Clears module cache
});

test("renders MyComponent", () => {
  render(<MyComponent />);
  const element = screen.getByText("section2.welcome");
  expect(element).toBeInTheDocument();
});
