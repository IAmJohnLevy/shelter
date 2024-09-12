const BTN_LEFT = document.querySelector('#button-left');
const BTN_RIGHT = document.querySelector('#button-right');
let arrayPets = [];

const moveLeft = () => { 
    CAROUSEL.classList.add(TRANSITION_LEFT_CLASS);
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
};
const moveRight = () => { 
    CAROUSEL.classList.add(TRANSITION_RIGHT_CLASS);
    BTN_RIGHT.removeEventListener('click', moveRight);
    BTN_LEFT.removeEventListener('click', moveLeft);
};


document.addEventListener('DOMContentLoaded', () => {
    alert('Прошу проверить работу ближе к дедлайну - приходится восстанавливать работу... Претендую на 74 балла(пагинацию не делал)');
    BTN_LEFT.addEventListener('click', moveLeft);
    

    BTN_RIGHT.addEventListener('click', moveRight);
    

    const iframe = document.getElementById('secondPageFrame');

    iframe.addEventListener('load', () => {
        const iframeDocument = iframe.contentWindow;
        arrayPets = Array.from(iframeDocument.document.body.querySelectorAll('.card'));

    });
    
});
