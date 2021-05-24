import styles from "./RegularMemes.module.css";
import { useState } from "react";
import { memesList } from "./../data/db.js";
import loaderImg from "./../img/loader.svg";
import { Meme } from "../components/Meme";

export const RegularMemes = () => {
    const [memes, setMemes] = useState(memesList);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Regular memes</h2>
            <div className="line"></div>
            {/* <img src={loaderImg} alt="loader" className={styles.loader} /> */}

            {memes.map((meme) => (
                // <Meme memeX={meme} title={meme.title} imgSrc={meme.img} key={meme.title} upvotes={meme.upvotes} downvotes={meme.downvotes} memes={memes} setMemes={setMemes}></Meme>
                <Meme memeX={meme} key={meme.title} setMemes={setMemes} memes={memes}></Meme>
            ))}
        </div>
    );
};
