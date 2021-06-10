import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

import logo from "./../img/Logo.png";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/">
                <img className={styles.logo} src={logo} alt="logo" />
            </NavLink>
            <ul className={styles.ul}>
                <li>
                    <NavLink to="/hot" className={styles.link} activeStyle={{ color: "gold" }}>
                        Hot
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/regular" className={styles.link} activeStyle={{ color: "gold" }}>
                        Regular
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/form" className={`${styles.link} ${styles.form}`} activeStyle={{ color: "gold" }}>
                        Add meme
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
