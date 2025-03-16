# React Template

Create repository based on `React-Template` template in GitHub.

Once cloned, update the following files to your apps names and configurations.

## package.json update

- First update the name:

```json
"name": "react-template",
```

- Next update the scripts for your new port...verify it won't collide...need to know that later.

```json
"scripts": {
    "dev": "vite --port 8081",                                <== Update port here
    "build": "tsc && vite build",
    "preview": "npm run build && vite preview --port 8081",   <== Update port here
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier -c .",
    "format:all": "npm run format && npm run lint",
    "format:fix": "prettier --write .",
    "test": "jest",
    "prepare": "husky init"                                   <== Update to have "prepare" to have "husky init", run it once to set up husky for your project
  },
```

## vite.config.ts update

```js
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "test",
      filename: "remoteEntry.js",
      exposes: {
        "./MyComponent": "./src/export/MyComponentMain.tsx",              <== Update to expose your module
      },
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
```

## Update app for Localization

The current application runs localization internally but will break once you federate this site into another site. To fix this, we need to do the following:

- Create a "Main" component; example `MyComponentMain.tsx`. This will be a basic pass-thru component to the one we really want to expose. This is due to the `I18nextProvider` piece.

```js
export default function MyComponentMain() {
  useEffect(() => {
    console.log("MyComponent component mounted");
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <MyComponent />
    </I18nextProvider>
  );
}
```

This allows for the main application to help control the localization within the PHP world. Once, we are out of the PHP world, we will not need to do this at all

- Create a basic component: example `MyComponent.tsx` inside of the components folder. This will be the true component. the Main component will be removed later, once we are 100% out of the PHP application.

- Update your `App.tsx` file to include your new component for testing locally.

```js
export default () => {
  return (
    <div>
      <h1>Fullbay Test Site</h1>
      <div>
        <MyComponentMain />
      </div>
    </div>
  );
};
```

- Will need to install @fullbay/forge at a later date since we don't have a fully functioning version in production yet.

# Resources

- [Vite](https://vite.dev/guide/)
- [Vitest](https://vitest.dev/)
- [Vite + Vitest](https://johnsmilga.com/articles/2024/10/15)
- [PWA](https://www.saurabhmisra.dev/setup-react-pwa-using-vite/)
- [ModFed](https://module-federation.io/guide/basic/vite.html)
