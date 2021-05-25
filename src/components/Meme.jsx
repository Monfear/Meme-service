import styles from "./Meme.module.css";
import { useContext, useEffect, useState } from "react";

import { MemesContext } from "./../App.jsx";

export const Meme = ({ memeX }) => {
    const [meme, setMeme] = useState(memeX);

    const memesCtx = useContext(MemesContext);

    const upvotingHandler = () => {
        console.log(meme);
        setMeme({ ...meme, upvotes: meme.upvotes + 1 });

        console.log(memesCtx.memes);
    };

    const downvotingHandler = () => {
        console.log(meme);
        setMeme({ ...meme, downvotes: meme.downvotes + 1 });
        console.log(meme);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{meme.title}</h2>
            <img src={meme.imgSrc} alt={meme.title} key={meme.id} className={styles.meme}></img>

            <div className={styles.icons}>
                <i className={`fas fa-thumbs-up ${styles.icon} ${styles.up}`} onClick={upvotingHandler}>
                    {meme.upvotes}
                </i>
                <i className={`fas fa-thumbs-down ${styles.icon} ${styles.down}`} onClick={downvotingHandler}>
                    {meme.downvotes}
                </i>
            </div>
        </div>
    );
};
