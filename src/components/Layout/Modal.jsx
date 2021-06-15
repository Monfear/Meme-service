import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import styles from "./Modal.module.css";

import { Button } from "./../UI/Button";

const portal = document.getElementById("overlays");

const Backdrop = () => {
    return (
        <>
            <div className={styles.backdrop}></div>
        </>
    );
};

const ModalOverlay = () => {
    return (
        <>
            <div className={styles.modalOverlay}>
                <h2>Mem added succesfully!</h2>
                <NavLink to="/regular">
                    <Button>Explore memes</Button>
                </NavLink>
            </div>
        </>
    );
};

export const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop></Backdrop>, portal)}
            {ReactDOM.createPortal(<ModalOverlay></ModalOverlay>, portal)}
        </>
    );
};
