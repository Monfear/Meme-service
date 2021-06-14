import styles from "./ErrorScreen.module.css";
import errorImg from "./../../img/error.jpg";

import { NavLink } from "react-router-dom";

import { Button } from "./../UI/Button";

export const ErrorScreen = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={errorImg} alt="error" />
            <NavLink to="/regular">
                <Button>Back to memes</Button>
            </NavLink>
        </div>
    );
};
