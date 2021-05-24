import { NavLink } from "react-router-dom";
import styles from "./WelcomeScreen.module.css";
import laughImg from "./../img/laugh.jpg";

export const WelcomeScreen = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Welcome on best memes page</h2>
            <div className="line"></div>
            <img src={laughImg} alt="laugh" className={styles.img} />
            <NavLink to="/regular">
                <button className={styles.btn}>Explore memes</button>
            </NavLink>
        </div>
    );
};
