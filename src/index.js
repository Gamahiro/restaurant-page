import { landingContent } from "../modules/landingContent";
import { aboutContent } from "../modules/aboutContent";
import { menuContent } from "../modules/menuContent";

landingContent();

document.querySelector('#mainBtn').addEventListener('click', landingContent);

document.querySelector('#menuBtn').addEventListener('click', menuContent);

document.querySelector('#aboutBtn').addEventListener('click', aboutContent);