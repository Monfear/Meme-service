import { useState } from "react";
import styles from "./Meme.module.css";

export const Meme = ({ memeX, memes, setMemes }) => {
    const { title, imgSrc, upvotes, downvotes } = memeX;

    const [meme, setMeme] = useState(memeX);
    const [upV, setupV] = useState(memeX.upvotes);

    const action = () => {
        setMeme({ ...meme, upvotes: upvotes + 1 });
        setMemes(memes);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <img src={imgSrc} alt={title} key={title} className={styles.meme}></img>

            <div className={styles.icons}>
                <i className={`fas fa-thumbs-up ${styles.icon} ${styles.up}`} onClick={action}>
                    {upvotes}
                </i>
                <i className={`fas fa-thumbs-down ${styles.icon} ${styles.down}`} onClick={() => console.log(meme)}>
                    {downvotes}
                </i>
            </div>
        </div>
    );
};

// <Meme memeX={meme} title={meme.title} imgSrc={meme.img} key={meme.title} upvotes={meme.upvotes} downvotes={meme.downvotes} memes={memes} setMemes={setMemes}></Meme>
