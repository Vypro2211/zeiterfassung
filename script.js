myWorkingHours.innerHTML = localStorage.getItem (`html`);


function addWorktime(){

    let currentDate = myDate.value;
    let StartTime = myStartTime.value;
    let endTime = myendTime.value;


   myWorkingHours.innerHTML += `<div class="list-item">
   <img class="small-img" src="img/clock.png">
   ${currentDate} ${StartTime} ${endTime}
   </div>`;

   localStorage.setItem(`html`, myWorkingHours.innerHTML);


}