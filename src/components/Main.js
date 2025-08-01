const display = document.getElementById('display');
const cal = document.getElementById('calculator');

// Loading animation
cal.style.transform = 'scale(0.1)';

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    cal.style.transform = 'scale(1)';
    cal.style.transition = 'transform 0.7s';
  }, 100);
}
);

//display
function appendSymbol(symbol) {
  if (display.textContent.length >= 14 && display.textContent !== '0') return;

  if (symbol === '.') {
    // Prevent multiple dots in the current number
    const parts = display.textContent.split(/[\+\-\*\/]/);
    if (parts[parts.length - 1].includes('.')) return;
  }

  // Prevent two operators in a row
  if (['+', '-', '*', '/'].includes(symbol)) {
    const lastChar = display.textContent.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) return;
  }

  if (display.textContent === '0' && symbol !== '.') {
    display.textContent = symbol;
  } else {
    display.textContent += symbol;
  }
}

//clear display
function clearDisplay() {
  display.textContent = '0';
}

//calculation
function calculate() {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = 'Error';
      }
    }

//key press animation
function hoverButtonByKey(key) {
  let selector;
  if (key === 'Escape') selector = 'button[onclick="clearDisplay()"]';
  else if (key === 'Enter' || key === '=') selector = 'button[onclick="calculate()"]';
  else if (['+', '-', '*', '/'].includes(key)) selector = `button[onclick="appendSymbol('${key}')"]`;
  else if (key === '.') selector = 'button[onclick="appendSymbol(\'.\')"]';
  else if (key >= '0' && key <= '9') selector = `button[onclick="appendSymbol('${key}')"]`;
  else return;

  const btn = document.querySelector(selector);
  if (!btn) return;
  btn.classList.add('scale-105', 'shadow-lg');
  setTimeout(() => {
    btn.classList.remove('scale-105', 'shadow-lg');
  }, 150);
}

//key press 
document.addEventListener('keydown', (e) => {
 
  if (e.key === 'Escape') {
    clearDisplay();
    hoverButtonByKey('Escape');
  }
  else if (e.key === 'Backspace') {
    if (display.textContent.length > 1) {
      display.textContent = display.textContent.slice(0, -1);
    } else {
      display.textContent = '0';
    }
  }

  if(e.key >= '0' && e.key <='9'){
    appendSymbol(e.key);
    hoverButtonByKey(e.key);
  }

  if (e.key === '.') {
    appendSymbol('.');
    hoverButtonByKey('.');
  }
 
 if( ['+', '-', '*', '/'].includes(e.key)) {
    appendSymbol(e.key);
    hoverButtonByKey(e.key);
  }

  if (e.key === 'Enter' || e.key === '=') {
    if (typeof calculate === 'function') calculate();
    hoverButtonByKey('Enter');

  }
});


