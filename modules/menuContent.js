
const content = document.querySelector('#content');
const element = document.createElement('div');

function menuContent() {

    element.innerHTML = `<img class="headerImg" src="../pr-food.jpg" alt="puerto rican food">
    <div class="title">Welcome to an hour of escape</div>
   
    <img class="menuItem" src="../Alcapurria.jpg.webp" alt="Alcapurria">
    <div class="menuTitle">Alcapurria</div>
    <div class="menuText">These beachside appetizers are made from a combination of the masa of green plantains, and yautía, a taro root. The dish is filled with stewed crab meat or ground beef. </div>
   
    <img class="menuItem" src="../mofongo.webp" alt="Mofongo">
    <div class="menuTitle">Mofongo</div>
    <div class="menuText">Mofongo is a ‘volcano’ of fried plantain, it is a dish that has roots in both the African and Taíno influences on Puerto Rican cuisine. Served with chicken, fried meat, or shrimp.  </div>

    <img class="menuItem" src="" alt="">
    <div class="menuTitle"></div>
    <div class="menuText"></div>

    <img class="menuItem" src="" alt="">
    <div class="menuTitle"></div>
    <div class="menuText"></div>
    `;

    content.appendChild(element);
}

export {
    menuContent,
}