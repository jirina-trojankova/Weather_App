import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class WheatherApp extends React.Component {
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

