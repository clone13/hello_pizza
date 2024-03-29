import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.page__content}>
        <div className={styles.page__logo_box}>
          <img
            className={styles.page__logo}
            src="/icons/hola-logo.svg"
            alt=""
          />
        </div>
        <div className={styles.page__info}>
          <img className={styles.page__img} src="/images/output_image.jpeg" />
          <div>
            <h1 className={styles.page__title}>Мы не нашли эту страницу</h1>
            <p className={styles.page__text}>
              Но знаем, где найти много всего вкусного
            </p>
            <Link to="/" className={styles.page__button}>
              Back to menu
            </Link>
          </div>
          <div className={styles.page__details}>404 Error</div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
