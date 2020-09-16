import React from "react";
import Spinner from "../Spinner";
import styles from "./body.module.css";

export default function Body() {
  const f = "fffff";
  if (!f) {
    return <Spinner />;
  }

  return (
    <div className={styles.Body}>
      <div className={styles.textBody}>
        <div>
          <img
            src="https://occ-0-3666-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e"
            alt="logo"
            width="100%"
            height="100%"
          />
        </div>
        <h1>Rick and Morty</h1>
        <div className={styles.infoBlocks}>
          <span className={styles.infoBlock}>2013</span>
          <span className={styles.infoBlock}>18+</span>
          <span className={styles.infoBlock}>4 Seasons</span>
          <span className={styles.lastInfoBlock}>TV Sci-Fi & Fantasy</span>
        </div>
        <p className={styles.descriptionBlock}>
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
        <p className={styles.creatorBlock}>
          <span className={styles.creatorNameBlock}>Starring:</span>
          Justin Roiland, Chris Parnell, Spencer Grammer
        </p>
        <p className={styles.creatorBlock}>
          <span className={styles.creatorNameBlock}>Creators:</span>
          Dan Harmon, Justin Roiland
        </p>
      </div>
    </div>
  );
}
