import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Countries} from "../components/Countries/Countries";
export function RootRouter() {
    return (
        <BrowserRouter>
        <Switch>
            <Route
                path="/id"
                component={Countries}
                exact>
            </Route>
            <Route
                path="/form"
                component={Countries}
                exact>
            </Route>
        </Switch>
        </BrowserRouter>
    );
}