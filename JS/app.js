var number = document.querySelectorAll('.number');
var divi = 100;
number.forEach((element)=>{
    updateCounter(element);
});
function updateCounter(para){
    let val = +para.innerText;
    let target = +para.getAttribute('data-target');
    let increment = target / divi;
    if(val < target){
        para.innerText = val + increment;
        setTimeout(()=>{
            updateCounter(para);
        },30);
    } else {
        para.innerText = target;
    }
}