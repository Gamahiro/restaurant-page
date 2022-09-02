import headerImg from '../pr-food.jpg'


const content = document.querySelector('#content');
const element = document.createElement('div');

function aboutContent() {

    if(content.hasChildNodes) {
        content.removeChild(content.firstChild);
    }
    element.className = 'contentDiv';
    element.innerHTML = `<img id="headerImg" src=${headerImg} alt="puerto rican food">
    <div class="title">Who are we?</div>
    <div class="menuText" style="text-align: center;">god knows</div>`;;
    content.appendChild(element);
}

export {
    aboutContent,
}