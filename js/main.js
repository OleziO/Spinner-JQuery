$(function () {
    let i = 1;
    let speed = 0.1;
    let anim;
    let start = true;
    $(document).keypress(function(event) {
        if(start) {
            anim = setInterval(() => {
                $('.spinner-wrapper').css('transform', `rotate(${i+=(speed+=0.1)}deg)`);
            }, 10);
            start = false;
        }
        else {
            speed = 2;
            clearInterval(anim);
            start = true;
        }
    });

})