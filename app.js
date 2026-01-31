const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
const box = document.getElementById('box');

const handleSliderChange = _.debounce((event) => {
  const value = event.target.value;
  const newSize = 100 + value * 3;
  
  image.style.width = newSize + 'px';
  image.style.height = newSize + 'px';
  
  console.log(`Slider value: ${value}, Image size: ${newSize}px`);
}, 300);

slider.addEventListener('input', handleSliderChange);

const handleMouseMove = _.debounce((event) => {
  box.style.left = event.clientX + 'px';
  box.style.top = event.clientY + 'px';
}, 100);

document.addEventListener('mousemove', handleMouseMove);

