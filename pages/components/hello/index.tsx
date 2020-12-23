import styles from "./hello.module.css";

import { TFunction } from "next-i18next";
import { Link, withTranslation } from "../../../i18n";

const Page = ({ t }: { readonly t: TFunction }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{t("example")}</h1>

    <Link href="/">
      <button className={styles.link} type='button'>{t("home")}</button>
    </Link>
  </div>
);

Page.getInitialProps = async () => ({
  namespacesRequired: ["secondPage"],
});

export default withTranslation("secondPage")(Page);
