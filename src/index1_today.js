import React from 'react'
import ReactDOM from 'react-dom'

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            'items':{
               weather : []
            }
        };
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch('http://api.openweathermap.org/data/2.5/weather?lat=49.9415967&lon=14.3316786&appid=ed62e370682cc9e4144620905eff37e4')
        .then(results => results.json())
        .then(results => this.setState({ 'items': results }));
    }

    render() {
        console.log(this.state.items.weather);
        return (
            <div>
                <h1>hi</h1>
                {this.state.items.weather.map(function(weather, i) {
                    return <h3 key={i}>{weather.icon}</h3>
                })}
            </div>
        );
    }
}


ReactDOM.render(
    <Weather />,
    document.getElementById('root')
);