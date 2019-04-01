import React from 'react'
import DropDownListComponent from './drop-down-list.component'

export const Languages = [
    {
        id: "pl", name: "Polish"
    },
    {
        id: "eng", name: "English"
    },
    {
        id: "de", name: "German"
    }
]




export default class Application extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cityName: "",
        }

    this.callAPI = this.callAPI.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)

    }


    callAPI(){
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=7f90f3e7d39cac4f85fc329bb73ac5c5`)
        .then(response => response.json())
        .then(res => 
                this.setState({
                ...this.state,
                res
                })
            )
    }

    onChangeHandler(sender){
        this.setState({
            [sender.target.name]: sender.target.value
        })
    }


    render(){  

        return(
            <div className="weather-component">
                <div className="row">
                    <div className="col-md-5">
                        <input name="cityName" value={this.state.cityName} onChange={this.onChangeHandler}/>
                    </div>
                    <div className="col-md-5">
                        <DropDownListComponent options={Languages}/>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={this.callAPI}>Ok</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>

                Pogoda dla: <b>{this.state.cityName}</b>
            </div>
        )
    }
}