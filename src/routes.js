import { CarrinhoContext, CarrinhoProvider } from 'common/contexts/Carrinho'
import { UsuarioProvider } from 'common/contexts/Usuario'
import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function MyRoutes() {
    return (
        <BrowserRouter>

            <Switch>
                <UsuarioProvider>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    
                    <CarrinhoProvider>
                        <Route exact path="/feira">
                            <Feira />
                        </Route>
                        </CarrinhoProvider>
                </UsuarioProvider>

                <CarrinhoProvider>
                <Route exact path="/carrinho">
                    <Carrinho />
                </Route>
                </CarrinhoProvider>
        
        </Switch>
        </BrowserRouter >
    )
}
