
const content = document.querySelector('#content');
const element = document.createElement('div');

function landingContent() {

    if(content.hasChildNodes) {
        content.removeChild(content.firstChild);
    }

    element.innerHTML = `<img class="headerImg" src="../pr-food.jpg" alt="puerto rican food">
    <div class="title">Welcome to an hour of escape</div>
    <div class="aboutResto">At PR foods we strive to create an experience that will give our guests an escape to a Puerto Rican food experience</div>`;;
    content.appendChild(element);
}

export {
    landingContent,
}