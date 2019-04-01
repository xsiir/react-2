import React from 'react'
import Application from '../components/Application';


export default class HomeContainer extends React.Component {
    render() {
        return (
            <div className="home-container container">
                <Application></Application>
            </div>
        );
    }
}