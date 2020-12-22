import styles from "../styles/Home.module.css";
import PropTypes from 'prop-types'

import React from "react";
import { TFunction } from "next-i18next";
import { Link, i18n, withTranslation } from "../i18n";

function Page({ t }: { readonly t: TFunction }) {
  return (
    <div className={styles.container}>
      {t("language")}

      <button
        className={styles.btn1}
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
        }
      >
        {t("change-language")}
      </button>
    </div>
  );
}

Page.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Page);
