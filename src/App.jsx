import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { ErrorScreen } from "./pages/ErrorScreen";
import { FormAddMeme } from "./pages/FormAddMeme";
import { WelcomeScreen } from "./pages/WelcomeScreen";
import { HotMemes } from "./pages/HotMemes";
import { RegularMemes } from "./pages/RegularMemes";

import { memesList } from "./data/db.js";

export const MemesContext = React.createContext();

function App() {
    const [memes, setMemes] = useState(memesList);

    const filteredRegularMemes = memes.filter((meme) => meme.upvotes - meme.downvotes <= 5);
    const filteredHotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);

    const [regularMemes, setRegularMemes] = useState(filteredRegularMemes);
    const [hotMemes, setHotMemes] = useState(filteredHotMemes);

    return (
        <>
            <Router>
                <Navbar></Navbar>

                <div>
                    <Switch>
                        <Route path="/" exact>
                            <WelcomeScreen></WelcomeScreen>
                        </Route>

                        <MemesContext.Provider value={{ memes, setMemes, regularMemes, setRegularMemes }}>
                            <Route path="/hot">
                                <HotMemes></HotMemes>
                            </Route>

                            <Route path="/regular">
                                <RegularMemes></RegularMemes>
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
