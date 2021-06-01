import styles from "./RegularMemes.module.css";
import { Meme } from "../components/Meme";

// import loaderImg from "./../img/loader.svg";

export const RegularMemes = ({ memes }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Regular memes</h2>
            <div className="line"></div>
            {/* <img src={loaderImg} alt="loader" className={styles.loader} /> */}

            {memes.map((meme) => (
                <Meme meme={meme} key={meme.id}></Meme>
            ))}
        </div>
    );
};
