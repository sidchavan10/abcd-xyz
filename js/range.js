const settings={
  fill: '#f9df4b',
  background: '#032b5d'
}

// First find all our sliders
const sliders = document.querySelectorAll('.range_slider');
Array.prototype.forEach.call(sliders,(slider)=>{
  slider.querySelector('input').addEventListener('input', (event)=>{
    slider.querySelector('span').innerHTML = event.target.value;
    applyFill(event.target);
  });
  applyFill(slider.querySelector('input'));
});

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}