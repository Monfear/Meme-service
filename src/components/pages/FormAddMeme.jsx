import styles from "./FormAddMemes.module.css";

import { useContext, useRef } from "react";
import { MemesContext } from "./../../App";
import { Button } from "./../UI/Button";

export const FormAddMeme = () => {
    const nameRef = useRef(null);
    const imgRef = useRef(null);

    const memeCtx = useContext(MemesContext);

    const createMeme = (e) => {
        e.preventDefault();

        const [file] = imgRef.current.files;
        const name = nameRef.current.value;

        if (!file || !name) {
            console.log("no file or name");
            return;
        }

        const imgSrc = URL.createObjectURL(file);

        const uniqid = require("uniqid");

        memeCtx.setMemes([
            ...memeCtx.memes,
            {
                id: uniqid(),
                title: name,
                imgSrc: imgSrc,
                upvotes: 0,
                downvotes: 0,
                isStar: false,
            },
        ]);

        nameRef.current.value = null;
        imgRef.current.value = null;
    };

    return (
        <form onSubmit={createMeme} className={styles.form}>
            <h2>You can add your meme here</h2>
            <h3>Just enter name and choose the file</h3>

            <input type="text" ref={nameRef} id="name" className={styles.nameInput} placeholder="Name" />

            <input type="file" ref={imgRef} id="file" className={styles.fileInput} />
            <Button>Create</Button>
        </form>
    );
};
