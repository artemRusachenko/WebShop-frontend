import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Electronic Store</h2>
      <p>
      At our store, we have a unique concept and a clear vision. We distinguish ourselves from other tech retailers by emphasizing Ukrainian products. This commitment aligns with the expectations of our society, as sociological studies indicate that a majority of Ukrainians prefer tech products with Ukrainian-language support.
      </p>
    </section>
  );
};

export default PromoText;
