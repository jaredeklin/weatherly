import { apiKey } from './apikey';

const root = "http://api.wunderground.com/api/";
let currentCity = 'Denver';
let currentState = 'CO';

function getData() {
  // return fetch("http://api.wunderground.com/api/112de9b93dfefe1f/conditions/forecast10day/hourly/q/CO/Denver.json") 
  return fetch(`${root}/${apiKey}/conditions/forecast10day/hourly/q/${currentState}/${currentCity}.json`);
}

export default getData;
