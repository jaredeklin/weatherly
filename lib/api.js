import {apikey} from './apikey';
import App from './App';

const root = "http://api.wunderground.com/api/";

function getData(currentLocation) {
  return fetch(`${root}/${apikey}/conditions/forecast10day/hourly/q/${currentLocation[1]}/${currentLocation[0]}.json`);
}

export default getData;
