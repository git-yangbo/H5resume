function refreshRem() {
    var desW = 750;
    var winW = document.documentElement.clientWidth,
        ratdio = winW / desW;
    document.documentElement.style.fontSize = ratdio * 100 + 'px';

}
refreshRem();

window.addEventListener('resize', refreshRem);
var myAudio = document.getElementById('auto1');
var $mp3 = $('.music');

$mp3.click(function () {
    if (myAudio.paused) {
        myAudio.play();
        $mp3.addClass("musicMove");
        $mp3.removeClass("music2");
    } else {
        myAudio.pause();
        $mp3.removeClass("musicMove");
        $mp3.addClass("music2");

    }
});

var mySwiper = new Swiper(' .swiper-container', {
    direction: 'vertical',
    loop: true,
    onTransitionEnd: function (swiper) {
        var slides = swiper.slides,
            curIndex = swiper.activeIndex;


        total = slides.length;

        targetId = 'page0';
        switch (curIndex) {
            case 0:
                targetId += (total - 2);
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slides, function (item, index) {
            if (curIndex == index) {
                item.id = targetId
            } else {
                item.id = null;
            }
        });
    }
});