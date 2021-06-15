import styles from "./FormAddMemes.module.css";

import { useContext, useRef, useState } from "react";
import { MemesContext } from "./../../App";
import { Button } from "./../UI/Button";
import { Modal } from "../Layout/Modal";

export const FormAddMeme = () => {
    const [isFormValid, setIsFormValid] = useState(null);
    const [isFormInvalid, setIsFormInvalid] = useState(null);

    const nameRef = useRef(null);
    const imgRef = useRef(null);

    const memeCtx = useContext(MemesContext);

    const createMeme = (e) => {
        e.preventDefault();
        const uniqid = require("uniqid");

        const [file] = imgRef.current.files;
        const name = nameRef.current.value;

        if (!file || file.type !== "image/jpeg" || !name || name.length > 25 || name.length < 5) {
            setIsFormInvalid(true);
            return;
        } else {
            setIsFormValid(true);
        }

        const imgSrc = URL.createObjectURL(file);

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
        <>
            {isFormValid && <Modal></Modal>}

            <form onSubmit={createMeme} className={styles.form}>
                <h2>You can add your meme here</h2>
                <h3>Just enter name and choose the file</h3>

                <input type="text" ref={nameRef} id="name" className={styles.nameInput} placeholder="Name" />

                <input type="file" ref={imgRef} id="file" className={styles.fileInput} />
                {isFormInvalid && <p style={{ color: "red" }}>Something went wrong, incorrect/missing name or file.</p>}
                <Button>Create</Button>
            </form>
        </>
    );
};
