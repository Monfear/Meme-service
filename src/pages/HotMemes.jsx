import styles from "./RegularMemes.module.css";
import { useContext, useState } from "react";
import { Meme } from "../components/Meme";

import { MemesContext } from "./../App.jsx";
// import loaderImg from "./../img/loader.svg";

export const HotMemes = () => {
    const memesCtx = useContext(MemesContext);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Hot memes</h2>
            <div className="line"></div>
            {/* <img src={loaderImg} alt="loader" className={styles.loader} /> */}

            {memesCtx.hotMemes.map((meme) => (
                <Meme memeX={meme} key={meme.id} memes={memesCtx.memes} setMemes={memesCtx.setMemes}></Meme>
            ))}
        </div>
    );
};
