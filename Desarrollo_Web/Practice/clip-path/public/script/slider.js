const slider= document.getElementById('slider');
let sliderSection = document.querySelectorAll('.card');
let sliderSectionLast = sliderSection[sliderSection.length -1];
slider.insertAdjacentElement("afterbegin", sliderSectionLast);