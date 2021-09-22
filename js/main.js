$(function () {
    let degree  = 1;
    let speed = 0.1;
    let spinAnimation;
    let isStarted = true;

    let spin = () => {
        if(isStarted) {
            spinAnimation = setInterval(() => {
                $('.spinner-wrapper').css('transform', `rotate(${degree += (speed += 0.1)}deg)`);
            }, 10);
            isStarted = false;
        }
        else {
            speed = 0.1;
            clearInterval(spinAnimation);
            isStarted = true;
        }
    }

    $(document).keypress(spin);
    $(document).click(spin);
})