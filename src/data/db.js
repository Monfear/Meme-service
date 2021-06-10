import img1 from "./../img/memes/01. autosave.jpg";
import img2 from "./../img/memes/02. koszmary.jpg";
import img3 from "./../img/memes/03. polaczone_sily.jpg";

const uniqid = require("uniqid");

export const memesList = [
    {
        id: uniqid(),
        title: "autosave",
        imgSrc: img1,
        upvotes: 7,
        downvotes: 1,
        isStar: false,
    },
    {
        id: uniqid(),
        title: "nightmares",
        imgSrc: img2,
        upvotes: 2,
        downvotes: 5,
        isStar: false,
    },
    {
        id: uniqid(),
        title: "combined forces",
        imgSrc: img3,
        upvotes: 1,
        downvotes: 3,
        isStar: false,
    },
];
