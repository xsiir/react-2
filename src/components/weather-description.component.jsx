import React from 'react';

const WeatherDescriptionComponent = (props) => {
    const { weather: { show, data } } = props;

    if (!show)
        return '';

    return (
        <div className="weather-description">
            <p>Description: <strong>{data.weather[0].description}</strong></p>
            <table className="table">
                <tbody>
                    {
                        renderMain(data.main)
                    }
                </tbody>
            </table>
        </div>
    );
}

const renderMain = (main) => {
    const uiArray = [];
    for (const key in main) {
        if (main.hasOwnProperty(key)) {
            const element = main[key];

            uiArray.push(
                <tr key={key}>
                    <td>{key}</td>
                    <td>{element}</td>
                </tr>
            );
        }
    }
    return uiArray;
}

export default WeatherDescriptionComponent;