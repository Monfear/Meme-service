import styles from "./RegularMemes.module.css";
import { Meme } from "./../Meme/Meme";
import { Line } from "./../UI/Line";

export const HotMemes = ({ memes }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Hot memes</h2>
            <Line></Line>

            {memes.map((meme) => (
                <Meme meme={meme} key={meme.id}></Meme>
            ))}
        </div>
    );
};
