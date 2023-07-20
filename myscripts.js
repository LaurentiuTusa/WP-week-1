// script.js

// Function to update the displayed value
function updateSliderValue() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("sliderValue");
    output.textContent = slider.value;
  }
  
  // Add an event listener to the slider to trigger the update when the value changes
  document.getElementById("myRange").addEventListener("input", updateSliderValue);
  
  // Call the function initially to display the default value
  updateSliderValue();


//   // Function to update the slider values
//   document.addEventListener("DOMContentLoaded", function () {
//     let uislider = document.getElementById("uislider");
//     let min = document.getElementById("min-slider");
//     let max = document.getElementById("max-slider");
  
//     noUiSlider.create(uislider, {
//       start: [5, 25],
//       connect: true,
//       range: {
//         min: 0,
//         max: 50,
//       },
//     });
  
//     uislider.noUiSlider.on("update", function (values) {
//       min.textContent = "$" + values[0];
//       max.textContent = "$" + values[1];
//     });
  
//     uislider.noUiSlider.on("update", filterFood);
//   });

//Slider

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

var range = document.getElementById('range');

noUiSlider.create(range, {

    range: {
        'min': 1300,
        'max': 3250
    },

    step: 150,

    // Handles start at ...
    start: [1450, 2050, 2350, 3000],

    // ... must be at least 300 apart
    margin: 300,

    // ... but no more than 600
    limit: 600,

    // Display colored bars between handles
    connect: true,

    // Put '0' at the bottom of the slider
    direction: 'rtl',
    orientation: 'vertical',

    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
        decimals: 0
    }),

    // Show a scale with the slider
    pips: {
        mode: 'steps',
        stepped: true,
        density: 4
    }
});

// Give the slider dimensions
range.style.height = '400px';
range.style.margin = '0 auto 30px';

var valuesDivs = [
    document.getElementById('range-value-1'),
    document.getElementById('range-value-2'),
    document.getElementById('range-value-3'),
    document.getElementById('range-value-4')
];

var diffDivs = [
    document.getElementById('range-diff-1'),
    document.getElementById('range-diff-2'),
    document.getElementById('range-diff-3')
];

// When the slider value changes, update the input and span
range.noUiSlider.on('update', function (values, handle) {
    valuesDivs[handle].innerHTML = values[handle];
    diffDivs[0].innerHTML = values[1] - values[0];
    diffDivs[1].innerHTML = values[2] - values[1];
    diffDivs[2].innerHTML = values[3] - values[2];
});