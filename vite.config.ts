import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "fs";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const selfEnv = loadEnv(mode, process.cwd());
  return {
    server: {
      fs: {
        allow: [".", "../shared"],
      },
    },
    build: {
      target: "chrome89",
    },
    plugins: [
    //   {
    //     name: "generate-environment",
    //     options: function () {
    //       console.info("selfEnv", selfEnv);
    //       writeFileSync(
    //         "./src/environment.ts",
    //         `export default ${JSON.stringify(selfEnv, null, 2)};`
    //       );
    //     },
    //   },
      federation({
        filename: "remoteEntry.js",
        name: "soApp",
        exposes: {
          "./so-app": "./src/SO.tsx",
        },
        remotes: {},
        shared: {
          react: {
            singleton: true,
          },
          "react/": {
            singleton: true,
          },
        },
      }),
      react(),
    ],
  };
});
