import styles from "./RegularMemes.module.css";
import { useContext, useState } from "react";
import { Meme } from "../components/Meme";

import { MemesContext } from "./../App.jsx";
// import loaderImg from "./../img/loader.svg";

export const RegularMemes = () => {
    const memesCtx = useContext(MemesContext);

    const regulars = memesCtx.regularMemes;
    console.log(regulars);

    const [regularMemes, setRegularMemes] = useState(regulars);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Regular memes</h2>
            <div className="line"></div>
            {/* <img src={loaderImg} alt="loader" className={styles.loader} /> */}

            {regularMemes.map((meme) => (
                <Meme memeX={meme} key={meme.id}></Meme>
            ))}
        </div>
    );
};
