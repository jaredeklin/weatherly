
import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Button from './Button';
import TenDay from './TenDay';
// import CurrentWeatherProps from './getCurrentWeatherData';
import FetchData from './getCurrentWeatherData';
import '../Styles/App.css';


// console.log(FetchData)

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       data: ''
//     }
//   }

//   getData() {
//     fetch("http://api.wunderground.com/api/112de9b93dfefe1f/conditions/forecast10day/hourly/q/CO/Denver.json")
//       .then(datas => datas.json())
//       .then(datas => this.setState({data: datas} , () => console.log(this.state.data)))
//       .catch(err => alert("Wrong!!!!!!"))
//   }
  

//   render() {
//     // this.getData()
//     console.log(this.state.data)
//     return (
//       <div className="App">
//         <div className="left-section">
//           <Search />
//         </div>
        
//         <div className="right-section">
//           <CurrentWeather CurrentWeatherProps={CurrentWeatherProps} />
//           <Button />

//             <TenDay/>
          
//         </div>
     
//       </div>
//     )
//   }
// }

// export default App;


const App = () => {
  // console.log(tenDayProps)
  // console.log(CurrentWeatherProps)
  return (
    <div className="App">
    <FetchData />
      <div className="left-section">
        <Search />
      </div>
      
      <div className="right-section">
       {/*<CurrentWeather CurrentWeatherProps={CurrentWeatherProps} />*/}
        <Button />

          <TenDay/>
        
      </div>
   
    </div>
  )
}



export default App;
