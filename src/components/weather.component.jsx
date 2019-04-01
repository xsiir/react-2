import React from 'react';
import DropDownListComponent from './drop-down-list.component';
import WeatherDescriptionComponent from './weather-description.component';

const initialState = {
    lang: 'pl',
    cityName: '',
    weather: {
        data: {},
        show: false
    }
}

export default class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.validate = this.validate.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    onLanguageChange(sender) {
        const { value } = sender.target;
        this.onFieldChange({
            target: {
                id: 'lang',
                value
            }
        });
    }

    onFieldChange(sender) {
        const { id, value } = sender.target;
        this.setState({
            ...this.state,
            [id]: value
        })
    }

    promptStateChanged(state) {
        console.log(`Current state:`);
        console.log(state);
    }

    getWeather() {
        this.setState({ ...this.state, weather: { show: false } });
        const { lang, cityName } = this.state;
        const api = this.props.API;
        api.OpenWeatherMapAPI.getByCityName({ cityName, lang }).then(
            (result) => {
                this.setState({
                    ...this.state,
                    weather: {
                        data: result.data,
                        show: true
                    }
                });
            },
            (err) => {
                alert(err.message)
            }
        );
    }

    validate() {
        const { cityName } = this.state;

        if (!cityName || cityName == '')
            return false;

        return true;
    }

    render() {
        const { Languages } = this.props.API;
        const { lang, cityName, weather } = this.state;
        this.promptStateChanged(this.state);
        return (
            <div className="weather-component">
                <div className="row">
                    <div className="col-md-5">
                        <input value={cityName} id="cityName" className="form-control" placeholder="City name" onChange={this.onFieldChange} />
                    </div>
                    <div className="col-md-5">
                        <DropDownListComponent selected={lang} options={Languages} onChange={this.onLanguageChange} />
                    </div>
                    <div className="col-md-2">
                        <button onClick={this.getWeather} disabled={!this.validate()} className="btn btn-success">Ok</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <WeatherDescriptionComponent weather={weather} />
                    </div>
                </div>
            </div>
        );
    }
}