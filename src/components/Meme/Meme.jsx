import styles from "./Meme.module.css";
import { useContext } from "react";

import { MemesContext } from "./../../App";

export const Meme = ({ meme }) => {
    // const { memes, setMemes } = useContext(MemesContext);
    const memeCtx = useContext(MemesContext);

    const upvotingHandler = (memeId) => {
        memeCtx.setMemes(
            memeCtx.memes.map((meme) => {
                if (meme.id === memeId) {
                    return {
                        ...meme,
                        upvotes: meme.upvotes + 1,
                    };
                } else {
                    return meme;
                }
            })
        );
    };

    const downvotingHandler = (memeId) => {
        memeCtx.setMemes(
            memeCtx.memes.map((meme) => {
                if (meme.id === memeId) {
                    return {
                        ...meme,
                        downvotes: meme.downvotes + 1,
                    };
                } else {
                    return meme;
                }
            })
        );
    };

    const starringHandler = (memeId) => {
        memeCtx.setMemes(
            memeCtx.memes.map((meme) => {
                if (meme.id === memeId) {
                    return {
                        ...meme,
                        isStar: !meme.isStar,
                    };
                } else {
                    return meme;
                }
            })
        );
    };

    const iconStar = meme.isStar ? "fas fa-star" : "far fa-star";

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{meme.title}</h2>
            <img src={meme.imgSrc} alt={meme.title} key={meme.id} className={styles.meme}></img>

            <div className={styles.icons}>
                <i className={`fas fa-thumbs-up ${styles.icon} ${styles.up}`} onClick={() => upvotingHandler(meme.id)}>
                    {meme.upvotes}
                </i>
                <i className={`fas fa-thumbs-down ${styles.icon} ${styles.down}`} onClick={() => downvotingHandler(meme.id)}>
                    {meme.downvotes}
                </i>
                <i className={`${iconStar} ${styles.icon} ${styles.star}`} onClick={() => starringHandler(meme.id)}></i>
            </div>
        </div>
    );
};
