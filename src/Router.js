import {Route, Switch, BrowserRouter} from "react-router-dom"
import Image from "./Image"
import App from "./App"
import React from "react";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={App}/>
            <Route exact path={"./Image"} component={Image}/>
        </Switch>
    </BrowserRouter>

)

export default Router