import {render} from "./renderer";
import * as Data from "./data.json";

const things = ["Kraken Dark Rum", "OVD Rum", "Absolute Vodka", "Absolute Lime Vodka"];
let content = "";

render(content);

for(let i=0; 1 < things.length; i++)
{
    console.log(things[i]);
    content += things[i].name;
}