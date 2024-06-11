const roundBox = document.getElementById('round_input');
const size = document.getElementById('size_input');
const blur = document.getElementById('blur_input');
const opacity = document.getElementById('opacity_input');

const x_input = document.getElementById('x_input');
const y_input = document.getElementById('y_input');

const box = document.getElementById('box');
const deleteShadow = document.getElementById('delete');

const code = document.getElementById('output_code');

const one = document.getElementById('shadow1');
const two = document.getElementById('shadow2');
const three = document.getElementById('shadow3');
const four = document.getElementById('shadow4');
const five = document.getElementById('shadow5');
const six = document.getElementById('shadow6');

const shadowColor = document.getElementById('shadow_color');
const blockColor = document.getElementById('block_color');

function hexToRgb(hex) {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
}

function updateShadow() {
    const valueSize = size.value || 0;
    const valueBlur = blur.value || 0;
    const valueOpacity = opacity.value || 1;
    const valueX = x_input.value || 0;
    const valueY = y_input.value || 0;
    let shadowColorValue = shadowColor.value;
    let [r, g, b] = hexToRgb(shadowColorValue);

    box.style.boxShadow = `${valueX}px ${valueY}px ${valueBlur}px ${valueSize}px rgba(${r}, ${g}, ${b}, ${valueOpacity})`;
    code.innerHTML = `box-shadow: ${valueX}px ${valueY}px ${valueBlur}px ${valueSize}px rgba(${r}, ${g}, ${b}, ${valueOpacity})`;
}


one.addEventListener('click', function() { 
    size.value = -5; 
    blur.value = 5; 
    opacity.value = 0.6; 
    x_input.value = 0; 
    y_input.value = 5; 
    // [r, g, b] = [0, 0, 0];   
    updateShadow(); 
});

two.addEventListener('click', function() { 
    size.value = -5; 
    blur.value = 5; 
    opacity.value = 0.6; 
    x_input.value = 5; 
    y_input.value = 5; 
    updateShadow(); 
});

three.addEventListener('click', function() { 
    size.value = 0; 
    blur.value = 4; 
    opacity.value = 0.2; 
    x_input.value = -10; 
    y_input.value = 4; 
    updateShadow(); 
});

four.addEventListener('click', function() { 
    size.value = 0; 
    blur.value = 4; 
    opacity.value = 0.2; 
    x_input.value = -4; 
    y_input.value = 4; 
    updateShadow(); 
});

five.addEventListener('click', function() { 
    size.value = 0; 
    blur.value = 4; 
    opacity.value = 0.2; 
    x_input.value = -10; 
    y_input.value = 10; 
    updateShadow(); 
});

six.addEventListener('click', function() { 
    size.value = 0; 
    blur.value = 4; 
    opacity.value = 0.2; 
    x_input.value = -1; 
    y_input.value = 10; 
    updateShadow(); 
});

deleteShadow.addEventListener('click', function() {
    window.location.reload();
});

size.addEventListener('input', updateShadow);
blur.addEventListener('input', updateShadow);
opacity.addEventListener('input', updateShadow);
x_input.addEventListener('input', updateShadow);
y_input.addEventListener('input', updateShadow);

shadowColor.addEventListener('input', updateShadow);


updateShadow();

roundBox.addEventListener('input', function() {
    box.style.borderRadius = `${roundBox.value}px`;
});

blockColor.addEventListener('input', function() {
    box.style.backgroundColor = blockColor.value;
});