export default function headerAnimation ():void {
  var cloud1 = document.getElementById('cloud1'),
    cloud2 = document.getElementById('cloud2'),
    cloud3 = document.getElementById('cloud3'),
    cloud4 = document.getElementById('cloud4'),
    cloud5 = document.getElementById('cloud5'),
    cloud6 = document.getElementById('cloud6'),
    header = cloud1.parentElement;

  function update(element: HTMLElement, step: number) {
    if ((element.offsetLeft + element.offsetWidth) > header.clientWidth || element.offsetLeft < 0) step = -step;
    return step;
  }

  function draw(element: HTMLElement, step: number) {
    element.style.left = element.getBoundingClientRect().left + step + 'px';
  }

  function animate(options: any) {
    var step = header.clientWidth / options.duration / 60;
    options.element.style.left = options.element.getBoundingClientRect().left + 'px';
    requestAnimationFrame( function animate () {
      step = update(options.element, step);
      draw(options.element, step);
      requestAnimationFrame(animate);
    });
  }


  animate({
    duration: 20,
    element: cloud1
  });

  animate({
    duration: 20,
    element: cloud2
  });

  animate({
    duration: 80,
    element: cloud3
  });

  animate({
    duration: 80,
    element: cloud4
  });

  animate({
    duration: 80,
    element: cloud5
  });

  animate({
    duration: 80,
    element: cloud6
  });
}
