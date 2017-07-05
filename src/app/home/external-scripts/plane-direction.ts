export default function planeDirection (): void {
  (function(){
    var plane = document.getElementById('plane'),
      header = plane.parentElement,
      mainNavbarHeight = document.getElementById('main-navbar').offsetHeight,
      direction = 1;

    plane.addEventListener('load', function (event) {
      plane.style.left = plane.getBoundingClientRect().left + 'px';
      plane.style.top = plane.getBoundingClientRect().top + 'px';
    });

    header.addEventListener('touchstart', function (event) {
      if ((plane.getBoundingClientRect().left + plane.offsetWidth / 2) > event.touches[0].clientX) {
        plane.style.transform = "scaleX(-1)";
      } else plane.style.transform = "";
      if (event.touches[0].pageX > this.offsetWidth - plane.offsetWidth) {
        plane.style.left = this.offsetWidth - plane.offsetWidth + 'px';
        plane.style.top = event.touches[0].pageY - mainNavbarHeight - plane.offsetHeight/2 + 'px';
        return false;
      } else if (event.touches[0].pageY > this.offsetHeight - plane.offsetHeight) {
        plane.style.top = this.offsetHeight - plane.offsetHeight + 'px';
        plane.style.left = event.touches[0].pageX - plane.offsetWidth / 2 + 'px';
        return false;
      } else if (event.touches[0].pageY < plane.offsetHeight) {
        plane.style.top = 0 + 'px';
        plane.style.left = event.touches[0].pageX - plane.offsetWidth / 2 + 'px';
        return false;
      }
      plane.style.left = event.touches[0].pageX - plane.offsetWidth / 2 + 'px';
      plane.style.top = event.touches[0].pageY - mainNavbarHeight - plane.offsetHeight/2 + 'px';

    });

    document.addEventListener('keydown', function (event) {
      switch(event.keyCode) {
        case 39:
          event.preventDefault();
          moveRight();
          break;
        case 37:
          event.preventDefault();
          moveLeft();
          break;
        case 38:
          event.preventDefault();
          moveUp();
          break;
        case 40:
          event.preventDefault();
          moveDown();
          break;
        default:
          break;
      }
    });

    function moveRight () {
      checkDirection('right');
      if((plane.offsetLeft + 5/4*plane.offsetWidth ) < (plane.parentElement.clientWidth) ) {
        plane.style.left = parseInt(plane.style.left) + plane.offsetWidth / 4 + 'px';
      }
    }

    function moveLeft () {
      checkDirection('left');
      if( plane.offsetLeft > 0 ) {
        plane.style.left = parseInt(plane.style.left) - plane.offsetWidth / 4 + 'px';
      }
    }

    function moveUp () {
      if(plane.offsetTop > 0 ) {
        plane.style.top = parseInt(plane.style.top) -  plane.offsetHeight / 4 + 'px';
      }
    }

    function moveDown () {
      if( (plane.offsetTop + plane.offsetHeight) < plane.parentElement.clientHeight ) {
        plane.style.top = parseInt(plane.style.top) + plane.offsetHeight / 4 + 'px';
      }
    }

    function checkDirection (leftOrRight: string) {
      if (leftOrRight == 'left') {
        direction = 0;
        plane.style.transform = "scaleX(-1)";
      } else {
        direction = 1;
        plane.style.transform = "";
      }
    }

  })();

}
