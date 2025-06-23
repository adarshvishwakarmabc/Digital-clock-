function displayTime() {

  let h = document.getElementById(`hour`);

  let m = document.getElementById(`minute`);
  let s = document.getElementById(`second`);
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  h.innerHTML = String(hour).padStart(2 ,`0`);
  m.innerHTML = String(minute).padStart(2, `0`);
  s.innerHTML = String(second).padStart(2, `0`);
  let span = document.getElementById(`s`);
 if(hour >= 12){
    span.innerHTML = `PM`;
 }
  }


setInterval(displayTime, 1000);
displayTime();