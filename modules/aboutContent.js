

const content = document.querySelector('#content');
const element = document.createElement('div');

function aboutContent() {

    element.innerHTML = `<img class="headerImg" src="../pr-food.jpg" alt="puerto rican food">
    <div class="title">Who are we?</div>
    <div class="aboutResto">god knows</div>`;;
    content.appendChild(element);
}

export {
    aboutContent,
}