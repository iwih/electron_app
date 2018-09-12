import {Route, Switch, BrowserRouter} from "react-router-dom"
import Image from "./Image.js"
import App from "./App"
import React from "react";


const ErrorRoute = () => (
    <div>
        Got fucked!... Error 404
    </div>
)

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/Image" exact component={Image}/>
            <Route component={App}/>
        </Switch>
    </BrowserRouter>

)

export default Router