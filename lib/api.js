import {apikey} from './apikey';
import App from './App';

const root = "http://api.wunderground.com/api/";

function getData(locationArray) {
  return fetch(`${root}/${apikey}/conditions/forecast10day/hourly/q/${locationArray[1]}/${locationArray[0]}.json`);
}

export default getData;
