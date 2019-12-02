import React, { Component, useState, useEffect } from 'react';
import {hot} from "react-hot-loader";
import Heroes from "./components/Heroes"

class App extends Component {
  render() {
        return (
            <Heroes heroes={this.state.heroes} />
        )
    }

    state = {
        heroes: []
    };

    componentDidMount() {
        fetch('https://api.opendota.com/api/heroStats')
            .then(res => res.json())
            .then((data) => {
                this.setState({ heroes: data })
            })
            .catch(console.log)
    }
}


export default hot(module)(App);
