import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class WheatherApp extends React.Component { 
    render() {
       return(
        <React.Fragment>
            <Moderator />
            <ModeratorsName />
            <div className="row">
                <Day day="Monday" />
                <Day day="Tuesday"/>
                <Day day="Wednesday"/>
                <Day day="Thursday"/>
                <Day day="Friday"/>
                <Day day="Saturday"/>
                <Day day="Sunday"/>
            </div>
        </React.Fragment>
       );
   }
}

class Moderator extends React.Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=1')
    .then(results => {
        return results.json();
    }).then(data => {
    let pictures = data.results.map((pic) =>{
        return(
            <div key={0}>
                <img src={pic.picture.large} alt=""/>
            </div>
            )
        })
        this.setState({pictures: pictures});
        })
    } 

    render () {
        return (<div>
                    {this.state.pictures}
                </div>
        )  
    }
}

class ModeratorsName extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [],
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=1')
    .then(results => {
        return results.json();
    }).then(data => {
    let names = data.results.map((name) =>{
        return(
                <a key={1}>
                    {name.name.first}
                </a>
            )
        })
        this.setState({names: names});
        })
    } 

    render () {
        return (<div> 
                Hi, I am {this.state.names}. The forecast is:
                </div>
        )  
    }
}

class Day extends React.Component {
    render() {
        return(
            <div className="day">
            <div>It's.. {this.props.day}</div>
            <Weather />
            </div>
        );
    }
}

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            'items': {
                weather: []
            }
        };
    }

    componentDidMount() {
        // fetch('//api.openweathermap.org/data/2.5/forecast?lat=49.9415967&lon=14.3316786&appid=ed62e370682cc9e4144620905eff37e4')
        fetch('http://api.openweathermap.org/data/2.5/weather?lat=49.9415967&lon=14.3316786&appid=ed62e370682cc9e4144620905eff37e4')
        .then((results) => results.json())
        .then(results => this.setState({ 'items': results }));
    }

    render() {
        console.log(this.state.items.weather);
        return (
            <div>
                Hi, I am weather..
                {this.state.items.weather.map(function(weather, i) {
                    return <h3 key={i}>{weather.icon}</h3>
                })}
            </div>
        );
    }
}


ReactDOM.render(
        <WheatherApp />,
        document.getElementById('root')
);
