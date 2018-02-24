
import { apiKey } from './apikey';


const root = "http://api.wunderground.com/api/";
let currentCity = 'Denver';
let currentState = 'CO';

function getData() {

 
  return fetch(`${root}/${apiKey}/conditions/forecast10day/hourly/q/${currentState}/${currentCity}.json`);


export default getData;
