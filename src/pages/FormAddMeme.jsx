import { useState } from "react";

import { Meme } from "./../components/Meme";

export const FormAddMeme = () => {
    const [meme, setMeme] = useState("");

    const createMeme = (e) => {
        e.preventDefault();

        const [file] = e.target.children[2].files;
        setMeme(URL.createObjectURL(file));

        console.log(e.target.children[2].files);
        console.log(URL.createObjectURL(file));
    };

    return (
        <form onSubmit={createMeme}>
            <h2>Form</h2>

            <input type="text" />
            <input type="file" />
            <button>Create</button>

            {meme ? <img src={meme} alt="meme" style={{ width: "500px" }} /> : null}
        </form>
    );
};
