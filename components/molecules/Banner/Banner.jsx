import React from "react";

import styles from "./banner.module.css";

const Banner = ({ buttonLabel, buttonHandler }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.whiteHeading}>Coffee</span>{" "}
        <span className={styles.purpleHeading}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={buttonHandler}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Banner;
