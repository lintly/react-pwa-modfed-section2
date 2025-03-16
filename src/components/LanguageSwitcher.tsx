import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        children={
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/English_language.svg"
            alt="English"
            width="50px"
            height="25px"
          />
        }
        onClick={() => changeLanguage("en")}
        disabled={i18n.language === "en"}
        name="English"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        children={
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Zulu_flag.svg"
            alt="Pseudolocalize"
            width="50px"
            height="25px"
          />
        }
        onClick={() => changeLanguage("zu")}
        disabled={i18n.language === "zu"}
        name="Pseudolocalize"
      />
    </div>
  );
};

export default LanguageSwitcher;
