// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfun);

var arr=JSON.parse(localStorage.getItem("schedule")) || [];
function myfun(){
    event.preventDefault();
    var data={
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    }
    //console.log(data)
    arr.push(data)
    localStorage.setItem("schedule",JSON.stringify(arr));
    window.location.href="matches.html"

    
}
