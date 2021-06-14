import styles from "./RegularMemes.module.css";
import { Meme } from "./../Meme/Meme";
import { Line } from "./../UI/Line";

export const RegularMemes = ({ memes }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Regular memes</h2>
            <Line></Line>

            {memes.map((meme) => (
                <Meme meme={meme} key={meme.id}></Meme>
            ))}
        </div>
    );
};
