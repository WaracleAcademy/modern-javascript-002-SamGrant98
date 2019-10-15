import {render} from "./renderer";
import * as data from "./data.json";

function getThingTemplate(things)
{
    return `<li>${things.Name} - ${things.Type}</li>`;
}

function sortMyStuff(first, second)
{
    if(parseInt(first.Rating) < parseInt(second.Rating))
    {
        return -1;
    }
    if(parseInt(first.Rating) > parseInt(second.Rating))
    {
        return 1;
    }
    if(parseInt(first.Rating) == parseInt(second.Rating))
    {
        return 0;
    }
}

const things = data.Spirits.sort(sortMyStuff);
let content = "";

for(let i=0; i < things.length; i++)
{
    console.log(things[i]);
    content += getThingTemplate(things[i]);
}
content += `</ul>`
render(content);
console.log("Branch");