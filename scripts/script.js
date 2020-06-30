(function(){
    if(document.querySelectorAll('.slide')){
        function goToSlide(slideNumber){
            var slides = document.querySelectorAll('.slide');
            
            if(slideNumber >= slides.length || slideNumber < 0){
                slideNumber = 0;
            }
            
            slides.forEach(x => x.classList.remove('active'));
            slides[slideNumber].classList.add('active');

            var markers = document.querySelectorAll('.slideshow > .marker > i');
            markers.forEach(x => x.classList.remove('active'));
            markers[slideNumber].classList.add('active');
        }

        function getCurrentSlideNumber(){
            var slides = document.querySelectorAll('.slide');
            for(var i = 0; i < slides.length; i++){
                if(slides[i].classList.contains('active')){
                    return i;
                }
            }

            return 0;
        }

        setInterval(function(){

            goToSlide(getCurrentSlideNumber() + 1);

        }, 4000);

        var prev = document.querySelector('.slideshow > .prev');
        if(prev){
            prev.onclick = function(){
                goToSlide(getCurrentSlideNumber() - 1);
            }
        }

        var next = document.querySelector('.slideshow > .next');
        if(next){
            next.onclick = function(){
                goToSlide(getCurrentSlideNumber() + 1);
            }
        }    
        
        var markers = document.querySelectorAll('.slideshow > .marker > i');
        if(markers){
            markers.forEach(m => {
                m.onclick = function(){
                    goToSlide(m.dataset.pg);
                }
            });            
        }
    }
})();