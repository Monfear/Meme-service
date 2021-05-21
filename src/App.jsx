import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ErrorScreen } from "./components/ErrorScreen";
import { FormAddMeme } from "./components/FormAddMeme";
import { Navbar } from "./components/Navbar";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { HotMemes } from "./components/HotMemes";
import { RegularMemes } from "./components/RegularMemes";

function App() {
    return (
        <>
            <Router>
                <Navbar></Navbar>

                <div>
                    <Switch>
                        <Route path="/" exact>
                            <WelcomeScreen></WelcomeScreen>
                        </Route>

                        <Route path="/hot">
                            <HotMemes></HotMemes>
                        </Route>

                        <Route path="/regular">
                            <RegularMemes></RegularMemes>
                        </Route>

                        <Route path="/form">
                            <FormAddMeme></FormAddMeme>
                        </Route>

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
