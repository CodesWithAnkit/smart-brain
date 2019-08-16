import React, { Component} from 'react'
import Particles from 'react-particles-js';
import Navigation from "./component/Navigation/Navigation";
import Logo from './component/Logo/Logo'
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import Rank from './component/Rank/Rank'
import './App.css'

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
    render() {
        return (
            <div className="App">
                <Particles  className='particles'
                    params={particleOptions}
                 />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />
                {/* <FaceRecognition /> */}
            </div>
        )
    }
}

export default App;