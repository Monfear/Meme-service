import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { ErrorScreen } from "./pages/ErrorScreen";
import { FormAddMeme } from "./pages/FormAddMeme";
import { WelcomeScreen } from "./pages/WelcomeScreen";
import { HotMemes } from "./pages/HotMemes";
import { RegularMemes } from "./pages/RegularMemes";

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
