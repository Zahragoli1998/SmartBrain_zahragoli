import React,{Component} from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';
import Register from './Component/Register/Register';
import Singin from './Component/Singin/Singin';
import Rank from './Component/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({ apiKey: "3054abc2823047b2b08506861d4e3f7e", apiEndpoint: "https://api.clarifai.com",});

const particleOption ={
  particles: {
    number:{
      value:30,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component{
   constructor(){
     super()
     this.state={
       input:'',
       imageUrl:'',
       box:{},
       route:'singin',
       isSingedin:false
     }
   }


  calculateFaceLocation=(data)=>{
    const clarifaiFace =data.outputs[0].data.regions;
    const image = document.getElementById('inputimage');
          const width = Number(image.width);
          const height = Number(image.height);
    return(
          clarifaiFace.map((item,i)=>{
          return{
            leftCol :clarifaiFace[i].region_info.bounding_box.left_col * width,
            topRow :clarifaiFace[i].region_info.bounding_box.top_row *height,
            rigthCol :width-(clarifaiFace[i].region_info.bounding_box.right_col * width),
            bottomRow : height-(clarifaiFace[i].region_info.bounding_box.bottom_row * height)
          }
        }
      )
    )
  }


  diplayFacebox=(box)=>{
    console.log(box);
    this.setState({box})
  }

  onInputChange=(e)=>{
    this.setState({input:e.target.value});
  }
  onButtonSumbit=()=>{
    console.log('click');
    this.setState({imageUrl:this.state.input})
    app.models.predict( Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response => this.diplayFacebox(this.calculateFaceLocation(response)))
     .catch(err=> console.log(err));
  }

  onRouteChange=(route)=>{
    if(route==='singout'){
      this.setState({isSingedin:false})
    }else if(route==='home'){
      this.setState({isSingedin:true})
    }
    this.setState({route:route})
  }

  render(){
    return(
    <div className='App'>
    <Particles className='particles' 
        params={particleOption}/>
      <Navigation isSingedin={this.state.isSingedin} onRouteChange={this.onRouteChange}/>
      { this.state.route === 'home'
      ?<div>
      <Logo/>
      <Rank/>
      <ImageLinkForm
      onInputChange={this.onInputChange}
      onButtonSumbit={this.onButtonSumbit}/>
      <FaceRecognition
        imageUrl={this.state.imageUrl}
        box={this.state.box}/>
    </div>
      :(this.state.route === 'singin'
        ?<Singin onRouteChange={this.onRouteChange}/>
        :<Register onRouteChange={this.onRouteChange}/>
      )
    }
    </div>
    )
  }
}


export default App;
