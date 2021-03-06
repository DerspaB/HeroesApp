import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../dc/DcScreen'
import { HeroScreen } from '../heroes/HeroesScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen'
import { Navbar } from '../ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} /> 
                    <Route exact path="/dc/" component={DcScreen} /> 
                    <Route exact path="/search/" component={SearchScreen} /> 
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
