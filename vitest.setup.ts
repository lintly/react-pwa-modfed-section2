import * as matchers from "@testing-library/jest-dom/matchers";
import { configure } from "@testing-library/react";
import { expect, vi } from "vitest";

expect.extend(matchers);

// Configure custom test ID attribute
configure({
  testIdAttribute: "data-fb-id",
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Ensure i18n resources are mocked globally if needed
vi.mock("react-i18next", async () => {
  const actual = await vi.importActual("react-i18next");
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        changeLanguage: vi.fn(),
        language: "en",
      },
    }),
  };
});
