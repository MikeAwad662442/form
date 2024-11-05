import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <main>
      <h1>{t("title")}</h1>
      <p>Mike Awad</p>
    </main>
  );
};

export default HomePage;
