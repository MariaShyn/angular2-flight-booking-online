export default function choosePlace (): void {
  var planeSeatings = document.getElementById('plane-seatings'),
    bookButton = document.getElementById('booked-places'),
    bookedList = document.getElementById('booked-places-list');
  var bookedPlaces: any[] = [], bookedIDList: any[] = [];

  planeSeatings.addEventListener('click', function (event) {
    var target = <HTMLTextAreaElement>event.target;
    var indexTarget = bookedPlaces.indexOf(target);
    if (target.parentNode != this ) return;
    if (!~indexTarget) {
      target.style.backgroundColor = "rgb(204, 204, 204)";
      bookButton.style.visibility = 'visible';
      if(target.classList.contains('vip')) {
        target.style.boxShadow = "2px 0 0 black, 10px 0 0 rgb(204, 204, 204)"
      } else {
        target.style.boxShadow = "2px 0 0 black, 7px 0 0 rgb(204, 204, 204)"
      }
      bookedPlaces.push(target);
      bookedIDList.push(target.id);
      bookedList.innerHTML = bookedIDList.join();
    } else {
      bookedPlaces.splice(indexTarget, 1);
      bookedIDList.splice(+target.id, 1);
      bookedList.innerHTML = bookedIDList.join();
      if(!bookedPlaces.length) bookButton.style.visibility = 'hidden';
      if(target.classList.contains('vip')) {
        target.style.backgroundColor = "rgb(26, 65, 109)";
        target.style.boxShadow = "2px 0 0 black, 10px 0 0 rgb(26, 65, 109)"
      } else {
        target.style.backgroundColor = "red";
        target.style.boxShadow = "2px 0 0 black, 7px 0 0 red"
      }
    }
  })
}
