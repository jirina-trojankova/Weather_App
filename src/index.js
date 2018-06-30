import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class WheatherApp extends React.Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=5')
    //fetch('//http://api.openweathermap.org/data/2.5/forecast?lat=49.9415967&lon=14.3316786&appid=ed62e370682cc9e4144620905eff37e4')
    .then(results => {
        return results.json();
    }).then(data => {
    let pictures = data.results.map((pic) =>{
        return(
            <div key={pic.results}>
                <img src={pic.picture.medium} alt=""/>
            </div>
        )
    })
    this.setState({pictures: pictures});
    console.log('state', this.state.pictures);
})
}    

    render() {
       return(
        <React.Fragment>
            <div className="row">
                <Day day="Monday" />
                <Day day="Tuesday"/>
                <Day day="Wednesday"/>
                <Day day="Thursday"/>
                <Day day="Friday"/>
                <Day day="Saturday"/>
                <Day day="Sunday"/>
            </div>
            <div className="row">
                {this.state.pictures}
            </div>
        </React.Fragment>
       );
   }
}

class Day extends React.Component {
    render() {
        return(
            <div className="day">I'm.. {this.props.day}</div>
        );
    }
}



ReactDOM.render(
        <WheatherApp />,
        document.getElementById('root')
);
