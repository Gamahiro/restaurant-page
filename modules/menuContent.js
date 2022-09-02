import headerImg from '../pr-food.jpg'
import alcapurria from '../Alcapurria.jpg';
import mofongo from '../mofongo.jpg';
import pasteles from '../pastales.jpg'
import tembleque from '../tembleque.jpg'


const content = document.querySelector('#content');
const element = document.createElement('div');

function menuContent() {

    if(content.hasChildNodes) {
        content.removeChild(content.firstChild);
    }
    element.className = 'contentDiv';

    element.innerHTML = 
    
    `<img id="headerImg" src=${headerImg} alt="puerto rican food">
    
    <div class="title">Menu</div>
   
    <div class="menuDiv">

    <div class="menuItem"> 

    <img class="menuImg" src="${alcapurria}" alt="Alcapurria">
    <div class="menuTitle">Alcapurria</div>
    <div class="menuText">These beachside appetizers are made from a combination of the masa of green plantains, and yautía, a taro root. The dish is filled with stewed crab meat or ground beef. </div>
    
    </div>

    <div class="menuItem"> 

    <img class="menuImg" src="${mofongo}" alt="Mofongo">
    <div class="menuTitle">Mofongo</div>
    <div class="menuText">Mofongo is a ‘volcano’ of fried plantain, it is a dish that has roots in both the African and Taíno influences on Puerto Rican cuisine. Served with chicken, fried meat, or shrimp.  </div>
    
    </div>

    <div class="menuItem"> 

    <img class="menuImg" src=${pasteles} alt="Pasteles">
    <div class="menuTitle">Pasteles</div>
    <div class="menuText">Pasteles are one of the three dishes you simply can’t do without in a Puerto Rican Christmas meal, with the other two being pernil and arroz con gandules.</div>
    
    </div>

    <div class="menuItem"> 

    <img class="menuImg" src=${tembleque} alt="Tembleque">
    <div class="menuTitle">Tembleque</div>
    <div class="menuText">The name tembleque comes from the words ‘temblequeo’ and ‘temblor’, which means ‘to jitter’ and ‘tremble’ respectively. As a staple Christmas dessert, coconut milk is the star ingredient of this rich, jiggly Puerto Rican pudding. </div>
    
    </div>
    </div>
    
    `;

    content.appendChild(element);
}

export {
    menuContent,
}