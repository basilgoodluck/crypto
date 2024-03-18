window.addEventListener('DOMContentLoaded', function() {
    var contents = document.querySelectorAll('.content');
    var currentIndex = 0;
    var timer;

    function showContent(index) {
        for (var i = 0; i < contents.length; i++) {
            contents[i].classList.remove('visible');
        }
        contents[index].classList.add('visible');
    }

    function nextContent() {
        currentIndex = (currentIndex + 1) % contents.length;
        showContent(currentIndex);
    }

    function prevContent() {
        currentIndex = (currentIndex - 1 + contents.length) % contents.length;
        showContent(currentIndex);
    }

    function startTimer() {
        timer = setInterval(nextContent, 10000); // Change content every 10 seconds
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function handleVisibilityChange() {
        if (isElementInViewport(document.getElementById('contentContainer'))) {
            startTimer();
        } else {
            stopTimer();
        }
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    document.getElementById('contentContainer').addEventListener('touchstart', handleTouchStart, false);
    document.getElementById('contentContainer').addEventListener('touchmove', handleTouchMove, false);
    var xDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
    };

    function handleTouchMove(evt) {
        if (!xDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var xDiff = xDown - xUp;

        if (xDiff > 0) {
            nextContent();
        } else {
            prevContent();
        }

        xDown = null;
    };

    document.addEventListener('scroll', handleVisibilityChange);
    window.addEventListener('resize', handleVisibilityChange);
    handleVisibilityChange();
});
