import {BrowserRouter, Route, Routes as Switch} from 'react-router-dom'
import { Cadastro } from '../app/pages'
import { Login } from '../app/pages'
import { Home } from '../app/pages'


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/*" element={<Login />} />
            </Switch>
        </BrowserRouter>
    );
}