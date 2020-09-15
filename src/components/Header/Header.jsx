import React from "react";
import styles from "./Header.module.css";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.title_block}>
        <Link className={styles.logo_link} to="/">
        <img src="https://occ-0-3666-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e" alt="logo" width='12%' height='12%'/>
        </Link>
      </div>
      <div className={styles.nav_block}>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
