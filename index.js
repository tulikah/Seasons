import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {


    state = {
        lat: null,
        long: null,
        errorMessage: null
    };
    componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
         position => {
         this.setState({
             lat: position.coords.latitude,
             long: position.coords.longitude
         })
     },
         err => {
         this.setState({
             erroMessage: err.message
         })
     }

 );
}

renderContent =() => {
    if(this.state.errorMessage && !this.state.lat && !this.state.long){
    return (<div>
        Error : {this.state.errorMessage}
        </div>
    ) 
    } else if (!this.state.errorMessage && this.state.lat && this.state.long) {
    return (<div>
        <SeasonDisplay lat={this.state.lat}/>
                {/* Latitude :{this.state.lat} <br/>
                Longitude :{this.state.long} <br/> */}
            </div>
    ) 
    } else {
         return (<div> <Spinner message='Please accept location request'/> </div>
    ) 
    } 
}


render() {  
return(
    <div className='border red'>{this.renderContent()}</div>
)
}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);