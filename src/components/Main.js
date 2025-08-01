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


