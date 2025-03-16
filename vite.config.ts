import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const deps = require("./package.json").dependencies;

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Check if we're in test mode
  const isTest = mode === "test";

  return {
    plugins: [
      react(),
      // Only use federation plugin when not testing
      ...(!isTest
        ? [
            federation({
              name: "section2",
              filename: "remoteEntry.js",
              exposes: {
                "./MyComponent": "./src/exports/MyComponentMain.tsx",
              },
              shared: {
                react: { singleton: true, requiredVersion: deps.react },
                "react-dom": {
                  singleton: true,
                  requiredVersion: deps["react-dom"],
                },
                i18next: {
                  singleton: true,
                  requiredVersion: deps.i18next,
                },
              },
            }),
          ]
        : []),
    ],
    build: {
      target: "esnext",
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
      deps: {
        moduleDirectories: ["node_modules", path.resolve("../../packages")],
      },
    },
  };
});
