import {apikey} from './apikey';
import App from './App';

const root = "http://api.wunderground.com/api/";
// let currentCity = 'Denver';
let currentState = 'IL';

function getData(currentCity) {
  return fetch(`${root}/${apikey}/conditions/forecast10day/hourly/q/${currentState}/${currentCity}.json`);
}

export default getData;
