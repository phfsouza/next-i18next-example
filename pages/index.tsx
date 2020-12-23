import styles from "../styles/Home.module.css";

import React from "react";
import { TFunction } from "next-i18next";
import { Link, i18n, withTranslation } from "../i18n";

function Page({ t }: { readonly t: TFunction }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("click-to-change-language")}</h1>

      <div className={styles.clickables}>
        <button
          className={styles.btn1}
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
          }
        >
          {t("change-language")}
        </button>

        <Link href="/secondPage">
          <button className={styles.btn2} type="button">
            {t("second-page")}
          </button>
        </Link>
      </div>
    </div>
  );
}

Page.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Page);
