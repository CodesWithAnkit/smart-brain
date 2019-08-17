import React, { Component} from 'react'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './component/FaceRecognition/FaceRecognition'
import Navigation from "./component/Navigation/Navigation";
import Logo from './component/Logo/Logo'
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import Rank from './component/Rank/Rank'
import './App.css'


const app = new Clarifai.App ({
    apikey: 'd6b7ad3d8a6a4214a20ff94dac01bb55'
});

const particleOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            imageUrl: ''
        }
    }

    onInputChange = (event) => {
            this.setState({input: event.target.value});
    } 

    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input})
        app.models
        .predict(
            Clarifai.FACE_DETECT_MODEL, 
            this.state.input).then(
            function(response) {
            console.log(response.output[0].data.regions[0].regions_info.bounding_box)
            },
            function(err) {
            // there was an error
            }
        );
    }
    render() {
        return (
            <div className="App">
                <Particles  className='particles'
                    params={particleOptions}
                 />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm  
                    onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition imageUrl={this.state.imageUrl}/>
            </div>
        )
    }
}

export default App;