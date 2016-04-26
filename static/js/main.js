(function() {
  if (document.getElementById('bg')) {
    particlesJS.load('bg', rootURI + '/assets/particlesjs-config.json', function() {
        console.log('particles.js config loaded');
    });
  }
})()
