import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";

import LanguageSwitcher from "../components/LanguageSwitcher";

beforeEach(() => {
  vi.clearAllMocks();
  vi.resetModules(); // Clears module cache
});

test("render component with buttons", () => {
  render(<LanguageSwitcher />);
  const englishElement = screen.getByAltText("English");
  expect(englishElement).toBeInTheDocument();

  const psuedoElement = screen.getByAltText("Pseudolocalize");
  expect(psuedoElement).toBeInTheDocument();
});