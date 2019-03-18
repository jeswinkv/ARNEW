    AFRAME.registerComponent('clickhandler1', {
    
        init: function() {
            const animatedMarker = document.querySelector("#button1");
    
            animatedMarker.addEventListener('click', function(ev){
              alert('clicked');
            });
    }});