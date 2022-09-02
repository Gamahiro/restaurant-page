import headerImg from '../pr-food.jpg'


const content = document.querySelector('#content');
const element = document.createElement('div');

function landingContent() {

    if(content.hasChildNodes) {
        content.removeChild(content.firstChild);
    }
    element.className = 'contentDiv';

    element.innerHTML = `<img id="headerImg" src=${headerImg} alt="puerto rican food">
    <div class="title">A meal from paradise</div>
    <div class="menuText" style="text-align: center;">We strive to create an experience that will give our guests an escape to a Puerto Rican food experience</div>`;;
    content.appendChild(element);
}

export {
    landingContent,
}