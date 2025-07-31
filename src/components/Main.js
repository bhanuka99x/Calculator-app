    const display = document.getElementById('display');

    function appendSymbol(symbol) {
      if (display.textContent === '0' && symbol !== '.') {
        display.textContent = symbol;
      } else {
        display.textContent += symbol;
      }
    }

    