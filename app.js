const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
const box = document.getElementById('box');

function handleSliderChange(event) {
    const value = event.target.value;
    console.log(value);
    image.style.width = value + 'px';
}

function mousePos(event) {
    console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
    box.style.left = event.clientX + 'px';
    box.style.top = event.clientY + 'px';
    box.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

slider.addEventListener('input', _.debounce(handleSliderChange, 500));
document.addEventListener('mousemove', _.debounce(mousePos, 100));