import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

import MyComponent from "../components/MyComponent";
import i18n from "../i18n";

/*
 * This is the main component for the Integrations module.
 * It initializes the i18n provider and renders the Integrations component.
 * This is only used for federating into the PHP application.
 */
export default function MyComponentMain() {
  useEffect(() => {
    console.log("MyComponentMain component mounted");
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <MyComponent />
    </I18nextProvider>
  );
}
