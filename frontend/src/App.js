import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home";


const App = () => {
    return (
        <div>
            <Switch>
                <Route exact={true} path={'/'} render={()=> <Home/> } />
            </Switch>
        </div>
    )
}


export default App;