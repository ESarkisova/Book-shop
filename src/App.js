import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Grid} from "semantic-ui-react";
import MainMenu from "./components/MainMenu";
import Books from "./components/BooksContainer";
import Book from "./components/BookContainer";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";


const App = () => {
    return (
        <Grid container>
            <Grid.Column width={16}>
                <MainMenu/>
            </Grid.Column>
            <Grid.Column width={16}>
                <Switch>
                    <Redirect exact from = "/" to = "/books" />
                    <Route path = "/books" render = {() => <Books />} />
                    <Route path = "/book/:bookID" render = {() => <Book />} />
                </Switch>
            </Grid.Column>
        </Grid>


    );
};

export default withRouter(App);
