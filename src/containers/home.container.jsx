import React from 'react'
import WeatherComponent from './../components/weather.component';
import { Languages, OpenWeatherMapAPI } from './../api/open-weather-map.api';


export default class HomeContainer extends React.Component {
    render() {
        return (
            <div className="home-container container">
                <WeatherComponent
                    API={{ Languages, OpenWeatherMapAPI }}
                />
            </div>
        );
    }
}