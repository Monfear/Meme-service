import { NavLink } from "react-router-dom";
import styles from "./WelcomeScreen.module.css";
import laughImg from "./../img/laugh.jpg";
import { Button } from "../components/UI/Button";
import { Line } from "./../components/UI/Line";

export const WelcomeScreen = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Welcome on best memes page</h2>
            <Line></Line>
            <img src={laughImg} alt="laugh" className={styles.img} />
            <NavLink to="/regular">
                <Button>Explore memes</Button>
            </NavLink>
        </div>
    );
};
