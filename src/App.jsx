import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { ErrorScreen } from "./pages/ErrorScreen";
import { FormAddMeme } from "./pages/FormAddMeme";
import { WelcomeScreen } from "./pages/WelcomeScreen";
import { HotMemes } from "./pages/HotMemes";
import { RegularMemes } from "./pages/RegularMemes";

import { memesList } from "./data/db.js";

export const MemesContext = React.createContext({
    memes: [],
    setMemes: () => {},
});

function App() {
    const [memes, setMemes] = useState(memesList);

    const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);
    const regularMemes = memes.filter((meme) => meme.upvotes - meme.downvotes <= 5);

    return (
        <>
            <Router>
                <Navbar></Navbar>

                <div>
                    <Switch>
                        <Route path="/" exact>
                            <WelcomeScreen></WelcomeScreen>
                        </Route>

                        <MemesContext.Provider value={{ memes, setMemes }}>
                            <Route path="/hot">
                                <HotMemes memes={hotMemes}></HotMemes>
                            </Route>

                            <Route path="/regular">
                                <RegularMemes memes={regularMemes}></RegularMemes>
                            </Route>

                            <Route path="/form">
                                <FormAddMeme></FormAddMeme>
                            </Route>
                        </MemesContext.Provider>

                        <Route path="*">
                            <ErrorScreen></ErrorScreen>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
