document.addEventListener('DOMContentLoaded', function() {
    var changingText = document.getElementById('changing-text');
  
    changingText.addEventListener('click', function() {
      changingText.classList.toggle('move');
    });
  
    document.addEventListener('mousemove', function(event) {
      var mouseX = event.pageX;
      var mouseY = event.pageY;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var centerX = windowWidth / 2;
      var centerY = windowHeight / 2;
  
      var distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
      var maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
  
      var percentage = distance / maxDistance;
      var hue = Math.round(120 * percentage);
      var saturation = '70%';
      var lightness = '50%';
  
      var color = 'hsl(' + hue + ', ' + saturation + ', ' + lightness + ')';
      changingText.style.color = color;
    });
  });